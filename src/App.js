import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Movie from "./components/Movie/Movie";
import Payment from "./components/Payment/Payment";
import Theater from "./components/Theater/Theater";
export const API_KEY = "abfd4e16";

function App() {
  let userList = [
    {
      id: "a1",
      name: "Vinay",
      username: "Vinay",
      password: "vinay12",
      email: "vinay@gmail.com",

      role: "admin",
    },
    {
      id: "u1",
      name: "Deeksha",
      username: "Deeksha",
      password: "Deeksha",
      email: "deeksha@gmail.com",
      role: "user",
    },
    {
      id: "u2",
      name: "Dhuruv",
      username: "Dhuruv",
      password: "Dhuruv",
      email: "duruv@gmail.com",
      role: "user",
    },
    {
      id: "u3",
      name: "Vinayak",
      username: "Vinayak",
      password: "Vinayak",
      email: "vinayak@gmail.com",
      role: "user",
    },
    {
      id: "u4",
      name: "Anikra",
      username: "Anikra",
      password: "Anikra",
      email: "anikra@gmail.com",
      role: "user",
    },
    {
      id: "u5",
      name: "Naveena",
      username: "Naveena",
      password: "Naveena",
      email: "naveena@gmail.com",
      role: "user",
    },
    {
      id: "u6",
      name: "Madhu",
      username: "Madhu",
      password: "Madhu",
      email: "madhu@gmail.com",
      role: "user",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login userData={userList} />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/:title/theaters" element={<Theater />}></Route>
          <Route path="/movie/:title" element={<Movie />}></Route>
          <Route path="/checkout/:title" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
