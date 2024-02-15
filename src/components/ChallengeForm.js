import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import SampleChallenge from "./sampleChallenge";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  form: {
    maxWidth: "440px",
    width: "100%",
    background: "#FFFFFF",
    borderRadius: "24px",
    padding: "32px",
    fontFamily: "Inter",
    position: "fixed",
    right: 24,
    top: 24,
    overflow: "auto",
  },
  button: {
    position: "fixed",
    top: 30,
    left: 1300,
    textTransform: "none",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 8,
    cursor: "pointer",
  },
};

const Tags = [
  {
    value: "Feature",
    label: "Feature",
  },
  {
    value: "Tech",
    label: "Tech",
  },
];

const ChallengeForm = ({ classes, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, tags });
    setTitle("");
    setDescription("");
    setTags("");
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleOpen}
      >
        Add Challenge
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.form}>
          <CloseIcon
            className={classes.closeButton}
            onClick={(e) => setOpen(false)}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Enter Title"
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            multiline
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Enter Description"
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            label="Enter Tags"
            select
          >
            {Tags.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            sx={{ width: "100%", marginTop: 2 }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Modal>
      <SampleChallenge />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(ChallengeForm);
