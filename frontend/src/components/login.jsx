import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [fName, setFName] = useState();
  const [LName, setLName] = useState();
  const [validation, setValidation] = useState("hidden");
  const [title, setTitle] = useState("Login");
  const [register, setRegister] = useState("hidden");
  const [registerButton, setRegisterButton] = useState("hidden");
  const [loginButton, setLoginButton] = useState("");
  const [hide, setHide] = useState("");

  const navigate = useNavigate();

  //Validation
  const loginValidation = async () => {
    if (!email || !pass) {
      setValidation("");
    } else {
      const data = {
        email: email,
        password: pass,
      };

      await axios
        .post("http://localhost:4000/login", data)
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.data?.token);
        })
        .catch((err) => {
          console.log(err);
        });

      setEmail("");
      setPass("");

      navigate("/dashboard");
    }
  };

  const registerValidation = async () => {
    if (!email || !pass || !fName || !LName) {
      setValidation("");
    } else {
      setValidation("hidden");
      setTitle("Login");
      setRegister("hidden");
      setLoginButton("");
      setRegisterButton("hidden");
      setHide("");
      setEmail("");
      setPass("");

      const data = {
        firstname: fName,
        lastname: LName,
        email: email,
        password: pass,
      };

      await axios.post("http://localhost:4000/register", data);
    }
  };

  const handleRegister = () => {
    setValidation("hidden");
    setTitle("Register");
    setRegister("");
    setLoginButton("hidden");
    setRegisterButton("");
    setHide("hidden");
  };
  return (
    <section>
      <div className="p-6 h-screen bg-[#dee4f8] text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto mb-12 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/3d-render-todo-check-list-with-ticks-task-test_107791-15401.jpg?w=740&t=st=1673449053~exp=1673449653~hmac=ea5cc011a49034f6c813a448ce2fd4f9b05840bcbb218f8c3ebb2b3e3ff053f0"
              className="lg:w-[520px] w-[200px]"
              alt="img"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">{title}</p>
              </div>

              <div className={validation}>
                <div className="text-red-600">All fields are mandatory</div>
              </div>

              <div className={register}>
                <div className="mb-6">
                  <input
                    value={fName}
                    onChange={(event) => setFName(event.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    value={LName}
                    onChange={(event) => setLName(event.target.value)}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className={hide}>
                <div className="text-gray-800 flex justify-between items-center mb-6">
                  Forgot password?
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className={loginButton}>
                  <button
                    onClick={loginValidation}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
                <div className={registerButton}>
                  <button
                    onClick={registerValidation}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                </div>
                <div className={hide}>
                  <div className="flex mt-2">
                    <p className="text-sm font-semibold  pt-1 mb-0">
                      Don't have an account?
                    </p>
                    <div
                      onClick={handleRegister}
                      className="font-semibold ml-2 text-blue-600 transition duration-200 ease-in-out cursor-pointer"
                    >
                      Register
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
