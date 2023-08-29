import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import KRS from "../../public/krslogo.jpg";
import BG from "../../public/dronebackground.jpg";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import jwtDecode from "jwt-decode";

function SigninMain() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [show, set] = useState("");
 

  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const glogin = async (email) => {
    const userObject = {
      email: email,
    };

    try {
      const resp = await axios.post("/api/login/glogin", userObject, {
        headers: { Authorization: `` },
      });

      if (resp.data.success == true) {
     


        const info=resp.data.user
        await authCtx.login(info.name,info.email,info.pic,info.roll,info.branch,info.year,resp.data.token, 10800000);
        localStorage.removeItem("newUserName")
        localStorage.removeItem("newUserEmail")
        localStorage.removeItem("newUserPicture")
        if(authCtx.target==null){
          redirect("/admin/");
        }else{
          redirect(`/${authCtx.target}`)
          authCtx.settarget("")

        }
       
      }
      if (resp.status === 200) {
        if(authCtx.target==null){
          redirect("/admin");
        }else{
          redirect(`/${authCtx.target}`)
          authCtx.settarget(null)
        }
      } else if (resp.status === 206) {
        redirect("/AddDataUser");
      }
    } catch (err) {
      console.error(err);

      set("Invalid Credentials");
    }
  };

  const handleCallbackResponse = (res) => {
    const userobject = jwtDecode(res.credential);

    let newUser = {
      name: userobject.name,
      emailMain: userobject.email,
      picture: userobject.picture,
    };

    localStorage.setItem("newUserName", JSON.stringify(userobject.name));
    localStorage.setItem("newUserEmail", JSON.stringify(userobject.email));
    localStorage.setItem("newUserPicture", JSON.stringify(userobject.picture));

    glogin(userobject.email);
  };

  useEffect(() => {
 
    google.accounts.id.initialize({
      client_id:
      import.meta.env.VITE_GOOGLE_SIGNIN,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const login = async () => {
    const { email, password } = showUser;

    if (
      password !== "" &&
      email !== "" &&
      email.indexOf("@") > -1 &&
      email.indexOf(".") !== -1
    ) {
      const userObject = {
        email: email,
        password: password,
      };
      try {
        const res = await axios.post("/api/login/login", userObject, {
          headers: { Authorization: `` },
        });
        const data = res.data;
  
        if (data.success == true) {
        const info=data.user
      
        await authCtx.login(info.name,info.email,info.pic,info.roll,info.branch,info.year,res.data.token, 10800000);
        if(authCtx.target==null){
          redirect("/admin");
        }else{
          
          redirect(`/${authCtx.target}`)
          authCtx.settarget(null)
        }
        } else {
        }
      } catch (err) {
        console.error(err);
        set("Invalid Credentials");
      }
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }
    if (name === "password") {
      if (value === "") {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }

    setUser({ ...showUser, [name]: value });
  };

  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center "
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl  mt-5 mb-5">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Welcome to KRS</h1>
      
        <br />
        <div className="text-white text-xs  mb-3">Sign In with Google</div>
        <div id="SignInDiv"></div>
        <br />
        <center style={{ color: "white" }}>Or</center>
        <br/>
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />

        <h2 className="text-white leading-10">
          <Link to="/ForgetPassword">forgot password?</Link>
         <center> <Link className="text-yellow-500" style={{fontWeight:"bold" }} to="/signup">
            {" "}
            SignUp
          </Link></center>
        </h2>
    

        {show ? <p className="alertText">{show}</p> : ""}

        <br />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold"
          onClick={login}
        >
          Log in
        </button>
        
      </div>
    </div>
  );
}

export default SigninMain;
