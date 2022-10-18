import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Image/logo.png";
import {
  AppBar,
  Box,
  Toolbar,
  Modal,
  Tooltip,
  Typography,
  IconButton,
  Icon,
} from "@mui/material";
import { Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/*   <Navbar bg="" className="">
        <Container className="">
          <Navbar.Brand href="#home" className="mx-auto">
            <h1 id="logo">Book Ticket</h1>
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Brand logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <i className="fa fa-user-circle" id="userIcon"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Box>
        <AppBar position="static">
          <Toolbar>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-XEIMRaw-3lc4xqBTfmm5oCibYbMj33ZxA&usqp=CAU"
              alt="logo"
              id="logo1"
            />

            <Typography
              sx={{ flexGrow: 1, textAlign: "center" }}
              component="div"
            >
              <h3
                style={{
                  textDecoration: "none",
                  margin: "20px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                BookTicket
              </h3>
            </Typography>

            <div
              style={{
                marginLeft: "20px",
                display: "flex",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  margin: "20px",
                  color: "white",
                  fontSize: "20px",
                }}
              ></Link>
            </div>

            <Tooltip title="Logout">
              <IconButton onClick={handleOpen}>
                <Link to="/">
                  <i
                    style={{
                      textDecoration: "none",
                      backgroundColor: "white",
                      borderRadius: "10%",
                    }}
                    className="fa fa-user-circle"
                    id="userIcon"
                  ></i>
                </Link>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
