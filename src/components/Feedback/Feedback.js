import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./Feedback.css";

const Feedback = () => {
  const [textBox, setTextBox] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setTextBox(true);
    console.log(value);
  };

  const feedSubmit = (e) => {
    e.preventDefault();
    setFormStatus(false);
    setMsg("Your feedback is submitted successfully...");
  };

  return (
    <div>
      {formStatus ? (
        <form onSubmit={feedSubmit}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group ">
              <p id="feedback"> Are you Satisfied with the service?</p>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="No"
                color="success"
                control={<Radio color="success" />}
                label="Yes"
              />
              <FormControlLabel
                value="Yes"
                control={<Radio sx={{ color: "red" }} />}
                label="No"
              />
            </RadioGroup>
            {textBox && (
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Feedback...."
                defaultValue=""
                style={{
                  width: 200,
                  height: 100,
                  margin: "10px",
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              />
            )}
            <input type="submit" value="Submit" id="submitFeed" />
          </FormControl>
        </form>
      ) : (
        <div>
          <p id="feedbackMsg">{msg}</p>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              margin: "20px",
              color: "white",
              fontSize: "20px",
            }}
          >
            <Button
              style={{
                textDecoration: "none",
                margin: "20px",
                color: "white",
                fontSize: "20px",
              }}
              id="homeBtn"
            >
              Go To Home
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Feedback;
