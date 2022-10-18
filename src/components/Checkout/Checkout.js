import {
  Box,
  Modal,
  Card,
  Container,
  TableHead,
  Collapse,
  Alert,
  TableBody,
  IconButton,
  TableCell,
  Chip,
  Typography,
  CardMedia,
  Grid,
  Stack,
  Table,
  TableRow,
  Button,
  TextField,
  CardContent,
  Avatar,
  CardActions,
  CardActionArea,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import not from "../../Image/notfound.png";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import notfound from "../../Image/notfound.png";
import { blue, green } from "@mui/material/colors";
//import QRCode from "qrcode";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TelegramIcon, WhatsappIcon } from "react-share";
import Qrcode from "../Qrcode/Qrcode";
import QRCode from "react-qr-code";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Checkout = () => {
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");

  const getPassword = (length = 6) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var genPass = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      genPass += charset.charAt(Math.floor(Math.random() * n));
    }
    setCode(genPass);
    console.log(code);
  };

  const [openAlert, setOpenAlert] = React.useState(false);

  const genre = [
    { id: 12, name: "Adventure" },
    { id: 28, name: "Action" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  const Location = useLocation();
  const data = Location.state;
  console.log(data);
  console.log(data.date);

  const gotgenre = data.data.genre_ids;
  const finalG = genre.filter((i) => {
    if (gotgenre.includes(i.id)) return i.name;
  });
  const Amount = 600 * data.c + data.p * 450;
  const [details, setDetails] = useState([data]);
  const [FinalData, setFinalData] = useState();
  const [FinalConfirm, setFinalConfirm] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();

  /*   const onSubmit = async (res) => {
    details.push(res);
    console.log(details);
    await QRCode.toDataURL(code).then((link) => {
      // this is consuming the 'code'
      setLink(link);
      console.log(link);
    });

    await axios
      .post(`https://61dbe2ea591c3a0017e1a59e.mockapi.io/Ticket`, {
        code: code, // this is  also consuming the 'code'
        info: {
          Name: details[1].Name,
          Email: details[1].Email,
          Movie: details[0].data.title,
          Amount: Amount,
          Tickets: {
            Prime: details[0].details[0],
            Classic: details[0].details[1],
          },
        },
      })
      .then((res) => {
        setFinalData(res.data);
        console.log(res.data);
      });
  }; */

  const deleteData = async () => {
    await axios
      .delete(
        `https://61dbe2ea591c3a0017e1a59e.mockapi.io/Ticket/${FinalData.id}`
      )
      .then((data) => console.log("deleted " + data.data.id));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <Container sx={{ margin: "20px" }}>
        <Collapse in={openAlert}>
          <Alert
            variant="filled"
            severity="success"
            action={
              <IconButton size="small" onClick={() => setOpenAlert(false)}>
                <CloseIcon fontSize="inherit" htmlColor="white" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Ticket Confirmed Successfully ! DownLoad the QR
          </Alert>
        </Collapse>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>
              <img
                style={{ width: "250px", padding: "10px", height: "350px" }}
                src={
                  data.data.poster_path == null
                    ? not
                    : `https://image.tmdb.org/t/p/original/${data.data.poster_path}`
                }
              ></img>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" sx={{ margin: "20px" }} component="h5">
              {data.data.title}
            </Typography>
            <Stack direction="row" sx={{ margin: "20px" }} spacing={1}>
              {finalG.map((i, key) => (
                <Chip label={i.name} key={key} color="primary" />
              ))}
            </Stack>
            <Table>
              <TableHead sx={{ fontSize: "1.5rem" }}>Tickets</TableHead>
              <TableBody>
                <TableRow>
                  <TableCell varient="head">Date:</TableCell>
                  <TableCell>{data.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell varient="head">Time:</TableCell>
                  <TableCell>{data.time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell varient="head">Place:</TableCell>
                  <TableCell>{data.place}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">First Class</TableCell>
                  <TableCell>{data.details[0].join(" , ")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Second Class</TableCell>
                  <TableCell>{data.details[1].join(" , ")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell varient="head">Total</TableCell>
                  <TableCell>{Amount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <br />
            <Link
              style={{ textDecoration: "none" }}
              to="/payment"
              state={Amount}
            >
              <Button color="success" variant="contained">
                Proceed to Pay
              </Button>
            </Link>
          </Grid>

          <Grid item xs={8}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                {/*  <form onSubmit={handleSubmit()}>
                  <TextField
                    margin="dense"
                    {...register("Name")}
                    label="Name"
                    variant="standard"
                  />
                  <br />
                  <TextField
                    margin="normal"
                    {...register("Email")}
                    label="Email"
                    variant="standard"
                  />
                  <br />
                  <Button
                    onClick={() => {
                      handleOpen();
                      getPassword();
                    }}
                    disabled={FinalConfirm ? true : false}
                    color={FinalConfirm ? "success" : "primary"}
                    type="submit"
                    variant="contained"
                  >
                    {FinalConfirm ? " Ticket Confirmed" : "Confirm Book"}{" "}
                  </Button>
                </form> */}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Container>
              <Card
                sx={{
                  maxWidth: "350px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/*   <CardContent>
                  <Typography>
                    {code.length != 0
                      ? ` Download this QR with Ticket code `
                      : ` QR will generate here..`}
                  </Typography>
                  <Box
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "red",
                    }}
                  >
                    <img
                      src={FinalConfirm ? link : notfound}
                      style={{ width: "100px", height: "100px" }}
                      alt="qrcode"
                    ></img>
                  </Box>
                </CardContent> */}
              </Card>
            </Container>
          </Grid>
        </Grid>

        {/* Modal for confirm book yes no  */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h6">
              Do You Want to Book {data.c + data.p} Tickets for '
              {data.data.title} ' ?
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                disabled={openAlert}
                onClick={() => {
                  handleClose();
                  setFinalConfirm(true);
                  setOpenAlert(true);
                }}
                color="success"
              >
                Yes
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  setCode("");
                  deleteData();
                  handleClose();
                }}
              >
                No
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
