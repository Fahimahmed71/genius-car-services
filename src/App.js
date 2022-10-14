import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";
import About from "./components/Home/About/About";
import AddServices from "./components/Home/AddServices/AddServices";
import Home from "./components/Home/Home";
import ServicesDetails from "./components/Home/Services/Service/ServicesDetails/ServicesDetails";
import ManageServices from "./components/ManageServices/ManageServices";
import Order from "./components/Order/Order";
import Login from "./components/Register/Login/Login";
import RequiredAuth from "./components/Register/RequiredAuth/RequiredAuth";
import SignUp from "./components/Register/SignUp/SignUp";
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/Nav/Nav";
import NotFound from "./components/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<ServicesDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequiredAuth>
              <CheckOut />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequiredAuth>
              <AddServices />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <ManageServices />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <RequiredAuth>
              <Order />
            </RequiredAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
