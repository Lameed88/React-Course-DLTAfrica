import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";

const Login = () => {
  const LOGIN_URL = "/auth";
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus;
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setSuccess(true);
      setUser("");
      setPwd("");
    } catch (err) {

    }
    // if(!username || !pwd) {
    //     setErrMsg('Invalid Entry');
    //     return;
    //   }

    console.log(user, pwd);
 
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You have successfully Login</h1>
          <p>
            <a href="home">Home </a>
          </p>
        </section>
      ) : (
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
            <label htmlFor="user">User</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="pwd"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
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
