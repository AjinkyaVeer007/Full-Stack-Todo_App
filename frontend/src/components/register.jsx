import React from "react";
import { useState } from "react";

function Register(props) {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [fnameValidation, setFNameValidation] = useState("hidden");
  const [lnameValidation, setLNameValidation] = useState("hidden");
  const [mobileValidation, setMobileValidation] = useState("hidden");
  const [emailValidation, setEmailValidation] = useState("hidden");
  const [passValidation, setPassValidation] = useState("hidden");

  //Login validation
  const handlevalidation = () => {
    if (!fname) {
      setFNameValidation("");
    }
    if (!lname) {
      setLNameValidation("");
    }
    if (!mobile) {
      setMobileValidation("");
    }
    if (!email) {
      setEmailValidation("");
    }
    if (!pass) {
      setPassValidation("");
    }
  };

  return (
    <section className={props.hide}>
      <div className="bg-[#dfeaf0] p-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto mb-12 md:mb-0">
            <img
              src="https://i.pinimg.com/564x/3a/14/f4/3a14f40c7a6e8c3d34023d274980fcd9.jpg"
              className="lg:w-[320px] md:w-[260px] w-[200px]"
              alt="img"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Register</p>
              </div>

              <div className="mb-6">
                <input
                  value={fname}
                  onChange={(event) => setFName(event.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="First Name"
                />
                <div className={fnameValidation}>
                  <div className="text-red-600">FirstName is mandatory</div>
                </div>
              </div>

              <div className="mb-6">
                <input
                  value={lname}
                  onChange={(event) => setLName(event.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Last Name"
                />
                <div className={lnameValidation}>
                  <div className="text-red-600">LastName is mandatory</div>
                </div>
              </div>

              <div className="mb-6">
                <input
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  type="number"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Mobile Number"
                />
                <div className={mobileValidation}>
                  <div className="text-red-600">Mobile number is mandatory</div>
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
                <div className={emailValidation}>
                  <div className="text-red-600">Email is mandatory</div>
                </div>
              </div>

              <div className="mb-6">
                <input
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                <div className={passValidation}>
                  <div className="text-red-600">Password is mandatory</div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <button
                  onClick={handlevalidation}
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
