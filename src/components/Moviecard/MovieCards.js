import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MovieCard.css";
//import YouTube from "react-youtube";

import {
  Button,
  CardActions,
  Typography,
  Card,
  CardContent,
  Rating,
  Modal,
  Paper,
  CardMedia,
} from "@mui/material";
//import { Box } from "@mui/system";
import not from "../../Image/notfound.png";
//import Header from "../Header/Header";
//import not from "../Img/notfound.png";

const MovieCards = (props) => {
  const [open, setOpen] = useState(false);
  const [keys, setKeys] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getVideos = async (id) => {
    var k = [];
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US`
      )

      .then((res) => {
        console.log(res.data.results);
        k = res.data.results.filter((i) => i.site === "YouTube");
        setKeys(k);
        console.log(k);
      });
  };

  console.log(keys);

  return (
    <div>
      <Card
        id={`card${props.passed.id}`}
        sx={{
          border: "0px solid black",
          marginTop: "20px",
          boxShadow: "10px 10px 10px rgba(176, 174, 174, 0.985)",
        }}
      >
        {/*   <img
          style={{ height: 200 }}
          src={
            props.passed.poster_path == null
              ? not
              : `https://image.tmdb.org/t/p/original/${props.passed.poster_path}`
          }
          alt="poster.exe"
        ></img> */}
        <CardMedia
          id="movieImg"
          component="img"
          height="140"
          image={
            props.passed.poster_path == null
              ? not
              : `https://image.tmdb.org/t/p/original/${props.passed.poster_path}`
          }
          alt="green iguana"
        />
        <CardContent>
          <Rating name="read-only" value={props.passed.popularity} readOnly />
          {props.passed.original_title === props.passed.title ? (
            <Typography variant="h6" component="div">
              {props.passed.title}
            </Typography>
          ) : (
            <div>
              {/*  <Typography gutterBottom variant="h6" component="div">
                {props.passed.original_title}
              </Typography> */}
              <Typography variant="h6" component="div">
                {props.passed.title}
              </Typography>
            </div>
          )}
          {/*   <Typography variant="body2" noWrap color="text.secondary">
            {props.passed.overview}
          </Typography> */}
        </CardContent>
        <CardActions>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
              }}
              to={`/${props.passed.title}/theaters`}
              /* to={`/movie/${props.passed.title}`} */
              state={props.passed}
            >
              <Button
                size="small"
                id={`btn_${props.passed.id}`}
                variant="contained"
                color="primary"
              >
                Book Ticket
              </Button>
            </Link>
            <Button
              id={`btnMD_${props.passed.id}`}
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => {
                handleOpen(props.passed);

                getVideos(props.passed.id);
              }}
            >
              more details
            </Button>
          </div>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Paper
          id="modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1100,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card
            id="details"
            raised
            sx={{
              maxWidth: 1100,
              display: "flex",
              padding: "5px",
              alignItems: "center",
            }}
          >
            {props.passed.backdrop_path == null ? (
              <img
                className="detailImage"
                style={{ width: 700, height: 500 }}
                src={`https://image.tmdb.org/t/p/original/${props.passed.poster_path}`}
                alt="poster.exe"
              ></img>
            ) : (
              <img
                className="detailImage"
                style={{ width: 690, height: 500 }}
                src={`https://image.tmdb.org/t/p/original/${props.passed.backdrop_path}`}
                alt="poster.exe"
              ></img>
            )}

            <CardContent>
              <Typography variant="h6">
                IMBD Rating:{" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  {props.passed.popularity}
                </span>
              </Typography>
              <Rating
                name="read-only"
                value={props.passed.popularity}
                readOnly
              />
              <Typography gutterBottom variant="h6" component="div">
                {props.passed.original_title}
              </Typography>
              <Typography gutterBottom>
                Release Date : {props.passed.release_date.slice(8, 11)}-
                {props.passed.release_date.slice(5, 7)}-
                {props.passed.release_date.slice(0, 4)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.passed.overview}
              </Typography>

              {keys &&
                keys.map(
                  (i, index) =>
                    index < 2 && (
                      <div key={i.key}>
                        <Typography>{i.name}</Typography>
                        {/*  <YouTube videoId={`${i.key}`} opts={opts} /> */}
                      </div>
                    )
                )}
            </CardContent>
          </Card>
        </Paper>
      </Modal>
    </div>
  );
};

export default MovieCards;
