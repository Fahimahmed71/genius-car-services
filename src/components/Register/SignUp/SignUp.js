import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const [updateProfile] = useUpdateProfile(auth);

  const [agree, setAgree] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const rePassRef = useRef("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const rePass = rePassRef.current.value;

    // const agree = e.target.check.checkbox;

    await createUserWithEmailAndPassword(email, pass);

    await updateProfile({ displayName: name });
    alert("Updated profile");

    navigate("/");

    if (pass !== rePass) {
      return;
    } else {
      createUserWithEmailAndPassword(email, pass);
    }
  };

  return (
    <div className="container mx-auto w-25">
      <h1 className="text-center text-primary">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control
            ref={rePassRef}
            type="password"
            placeholder="Retyper Password"
            required
          />
        </Form.Group>
        <Form.Group
          className={agree ? "text-primary" : "text-danger"}
          controlId="formBasicCheckbox"
        >
          <Form.Check
            onClick={() => setAgree(!agree)}
            name="check"
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button disabled={!agree} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-primary">
        Already got an account{" "}
        <span>
          <Link
            className="text-danger pe-auto text-decoration-none"
            to="/login"
          >
            Login
          </Link>
        </span>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
