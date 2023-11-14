import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";

const Login = () => {
    const LOGIN_URL = '/auth'
    const { setAuth } = useContext(AuthContext)

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus;
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(!username || !password) {
    //     setErrMsg('Invalid Entry');
    //     return;
    //   }

    setSuccess(true);
    console.log(username,  password);
    setUsername()
    setPassword

  };

  return (
    <>
    {success ? (
      <section>
        <h1>
          You have successfully Login
        </h1>
        <p>
          <a href="home">Home </a>
        </p>
      </section>
    ):(
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <button>Sign Up</button>
      </form>
      <p>
        Need an Account? <br />
      </p>
    </section>
    )}
    </>
  );
};

export default Login;
