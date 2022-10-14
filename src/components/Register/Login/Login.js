import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passRef = useRef("");

  const navigate = useNavigate();

  if (user) {
    // navigate(from, { replace: true });
  }

  if (sending || loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = emailRef.current.value;
    const pass = passRef.current.value;

    await signInWithEmailAndPassword(mail, pass);

    const { data } = await axios.post(
      "https://safe-oasis-76261.herokuapp.com/login",
      { mail }
    );

    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const resetPass = async () => {
    const mail = emailRef.current.value;
    if (mail) {
      await sendPasswordResetEmail(mail);
      toast("Email Send");
    } else {
      toast("Email Koi Beta");
    }
  };

  return (
    <div className="container mx-auto w-25">
      <h1 className="text-center text-primary">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>

      <p className="text-primary">
        forget Password{" "}
        <span>
          <button onClick={resetPass} className="border-0 bg-light text-danger">
            Reset Password
          </button>
        </span>
      </p>

      <p className="text-primary">
        Create new account{" "}
        <span>
          <Link
            className="text-danger pe-auto text-decoration-none"
            to="/signup"
          >
            SignUp
          </Link>
        </span>
      </p>
      <ToastContainer />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
