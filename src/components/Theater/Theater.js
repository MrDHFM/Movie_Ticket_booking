import * as React from "react";
import Moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";

import "./Theater.css";
import { Grid } from "@mui/material";

const formatDate = Moment();
const tomorrowMoment = formatDate.clone().add(1, "days");
const D_A_tomorrowMoment = formatDate.clone().add(2, "days");
const Date = formatDate.format("MMM Do YY");
const NDate = tomorrowMoment.format("MMM Do YY");
const NNDate = D_A_tomorrowMoment.format("MMM Do YY");

const pages = [Date, NDate, NNDate];
const showTime = ["11:00 Am", "02:00 Pm", "06:00 Pm", "09:00 Pm"];
const screens = ["Inox", "Imax", "PVR", "Cinepolls"];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ResponsiveAppBar = () => {
  const [layout, setLayout] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState("");
  const [selectedTheater, setSelectedTheater] = React.useState("");
  const [theaters, setTheaters] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    setSelectedTheater(e.target.value);
  };

  const arrowClick = (e) => {
    e.preventDefault();
  };
  console.log(layout);
  console.log(selectedTheater);
  const clickTime = (e) => {
    e.preventDefault();
    setSelectedTime(e.target.value);

    setLayout(true);
    setTheaters(false);
    setExpanded(false);
  };
  console.log(selectedTime);

  console.log(Date);
  console.log(NDate);
  console.log(NNDate);

  const clickDate = (e) => {
    e.preventDefault();
    setTheaters(true);
    setSelectedDate(e.target.value);
  };
  console.log(theaters);

  //console.log(selectedDate);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div id="dates">
        <AppBar
          position="static"
          sx={{ backgroundColor: "Secondary" }}
          id="dateBar"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { s: "flex" },

                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Select Date:
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    id="dateButton"
                    key={page}
                    value={page}
                    onClick={clickDate}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <div id="theaterList">
        {theaters && (
          <div>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex" }, mr: "2" }}
              sm={6}
              md={3}
            >
              <Grid container>
                {screens.map((screen) => (
                  <Grid item sm={12} md={4} lg={3}>
                    <Card sx={{ m: "10px" }} key={screen}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Button onClick={handleExpandClick} value={screen}>
                            {screen}
                          </Button>
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        {/* <Typography>Show Time</Typography>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon onClick={arrowClick} value={screen} />
                    </ExpandMore> */}
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
                            {showTime.map((time) => (
                              <Button
                                id="timeButton"
                                key={time}
                                value={time}
                                onClick={clickTime}
                                sx={{ my: 2, color: "black", display: "block" }}
                              >
                                {time}
                              </Button>
                            ))}
                          </Box>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        )}
      </div>

      <div>
        {layout && (
          <Movie
            date={selectedDate}
            time={selectedTime}
            place={selectedTheater}
          />
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
