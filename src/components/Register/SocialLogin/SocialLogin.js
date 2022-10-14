import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let errorEl;

  if (error) {
    errorEl = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }

  return (
    <section>
      <h6 className="or text-center fw-light">Or</h6>
      {errorEl}

      <div className="d-flex flex-column gap-3 ">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-warning border-0 py-3"
        >
          Sign in Google
        </button>
        <button className="bg-primary border-0 py-3">Sign in GitHub</button>
      </div>
    </section>
  );
};

export default SocialLogin;
