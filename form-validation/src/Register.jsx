import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";

const USER_REGEX = /^[A-Z][a-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/Register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus;
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [test]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd, matchPwd]);

  return (
    <>
    <p ref={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">  
    {errMsg} </p>
      <form action="">
        <label htmlFor="username">
            Username:
            <FontAwesomeIcon icon= {faCheck} className={validMatch && matchPwd ? "valid" : 'hide'}/>
        </label>

      </form>

      </>
  )
};

export default Register;
