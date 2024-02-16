import React from "react";
import renderer from "react-test-renderer";
import AuthForm from "./AuthForm";
import { render } from "@testing-library/react";

jest.mock("@mui/styles", () => ({
  withStyles: (styles) => (Component) => (props) =>
    <Component {...props} classes={{ root: {} }} />,
  makeStyles: (styles) => (Component) => (props) =>
    <Component {...props} classes={{ root: {} }} />,
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("AuthForm component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<AuthForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("calls onLogin and navigates to /home when the form is submitted", async () => {
  const onLoginMock = jest.fn();
  const navigateMock = jest.fn();
  const { getByLabelText, getByText } = render(
    <AuthForm onLogin={onLoginMock} navigate={navigateMock} />
  );

  const employeeIdInput = getByLabelText("Enter Employee ID");
  fireEvent.change(employeeIdInput, { target: { value: "123456" } });

  const loginButton = getByText("Login");
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(onLoginMock).toHaveBeenCalledWith("123456");
    expect(navigateMock).toHaveBeenCalledWith("/home");
  });
});
