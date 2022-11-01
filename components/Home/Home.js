import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Carousel, Button } from "react-bootstrap";
import Header from "../Header/Header";
import { API_KEY } from "../../App";
import {
  Container,
  Grid,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import MovieCards from "../Moviecard/MovieCards";

import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("India");
  const [movieData, setMovieData] = useState();

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  // console.log(location.state.uName);

  const getData = async () => {
    var k = [];
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1&region=IN`
      )
      .then((res) => {
        k = res.data.results.filter((i) => i);

        setData(k);
        console.log(k);
      });
  };

  const getGData = async () => {
    var k = [];
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1`
      )
      .then((res) => {
        k = res.data.results.filter((i) => i);
        setData(k);
        console.log(k);
      });
  };

  useEffect(() => {
    region == "India" ? getData() : getGData();
  }, []);

  /*  const Book = () => {
    navigate("/Movie/SarkaruVaariPaata");
  }; */

  return (
    <div>
      <div>
        <Header />
      </div>
      <Toolbar sx={{ justifyContent: "right", marginTop: "10px" }}>
        <FormControl sx={{ width: "150px" }}>
          <InputLabel>Region</InputLabel>
          <Select value={region} label={`Region`} onChange={handleChange}>
            <MenuItem value="India" onClick={getData}>
              India
            </MenuItem>
            <MenuItem value="Global" onClick={getGData}>
              Global
            </MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      <div id="welcome" className="bg-danger">
        <p id="userName1">Welcome:{location.state.uName}</p>
      </div>
      <Carousel fade id="carousel">
        <Carousel.Item>
          <img
            id="carousalImg"
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1662447828178_imran.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663675555384_thegreenweb.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1663245561221_mughalweb.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="movieList" className="d-flex"></div>

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
        >
          {data &&
            data.map((i, key) => (
              <Grid item xs={2} sm={4} md={4} lg={3} key={key}>
                <MovieCards passed={i} />
              </Grid>
            ))}
        </Grid>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
