import React from "react";
import { useState } from "react";

import bg1 from "../../public/bg-1.jpg";
import krsclsses from "../../public/krs-classes-text.png";
import krsclsses1 from "../../public/krs_classes1.png";
import bluecard from "../../public/blue-card.png";
import yellowcard from "../../public/yellow-card.png";
import greencard from "../../public/green-card.png";
import broomleft from "../../public/broom-left.png";
import broomright from "../../public/broom-right.png";
import bluepopup from "../../public/blue-bg.png";
import yellowpopup from "../../public/yellow-bg.png";
import greenpopup from "../../public/green-bg.png";
import bluepopups from "../../public/bluepopup.png";
import yellowpopups from "../../public/yellowpopup.png";
import greenpopups from "../../public/greenpopup.png";
import smallborder from "../../public/small-border.png";
import bigborder from "../../public/big-border.png";
import wing from "../../public/wing.png";
import webs from "../../public/webs.png";
import devs from "../../public/devs.png";
import machs from "../../public/machs.png";
import learns from "../../public/learns.png";
import embs from "../../public/embs.png";
import syss from "../../public/syss.png";
import sbtn from "../../public/small-button.png";
import webdev from "../../public/web-development-text.png";
import machlearn from "../../public/machine-learning-text.png";
import embsys from "../../public/embedded-systems-text.png";
import BasicCard from "./BasicCard";
import RegisterPopup from "./RegiserPopup";
import { useEffect,useContext } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
function ClassesMain() {
  const authCtx = useContext(AuthContext);
  const [shoeModal, setshoeModal] = useState({ show: false });
  const [domain, setDomain] = useState("");
  const [showbt, setshowbt] = useState(true);

  const Modal = () => {
    setshoeModal({ show: true });
  };

  const CloseModal = () => {
    setshoeModal({ show: false });
  };
  async function makereq(){
 
     try{
     
     
      const webresp = await axios.post(
        `/api/registration/register/checkreg/`,
        { email:authCtx.user.email , sheetid:"", formid: '63447230697dffcdec69cd02' },
        { headers: { Authorization: `${authCtx.token}` } }
      );
     
      const webdata = webresp.data;

      const mlresp = await axios.post(
        `/api/registration/register/checkreg/`,
        { email:authCtx.user.email , sheetid:"", formid: '63447328697dffcdec69cd07' },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      
      const mldata = mlresp.data;

      const embdresp = await axios.post(
        `/api/registration/register/checkreg/`,
        { email:authCtx.user.email , sheetid:"" , formid: '63447441697dffcdec69cd0c' },
        { headers: { Authorization: `${authCtx.token}` } }
      );
  
      const embddata = embdresp.data;
      
      if(webdata.reg==true){
           
            setDomain("web")
            setshowbt(false)
      }
      else if(mldata.reg==true){
      
           setDomain("ml")
           setshowbt(false)
      }else if(embddata.reg==true){
       
           setDomain("embd")
           setshowbt(false)
      }else{
        setshowbt(true)
      }
     }catch(e){
      console.log(e)
     }
  }

  useEffect(()=>{
//     if(authCtx.isLoggedIn==true){
//       // makereq();
//     }else{
//  setshowbt(true)
//     }
  
  },[authCtx.isLoggedIn])
  return (
    <>
      <div className="">
        <div>
          <div className="flex flex-col items-center justify-center pt-8">
            <img
              src={krsclsses1}
              alt=""
              className="h-auto w-[80%] max-w-[900px]"
            />
            <p className="text-center text-sm sm:text-xl  text-white mx-8 font-semibold pt-8 font-cormorant">
              KRS MAGICAL CLASSES, as the name suggests will lead you towards
              the ultimate level of wizardry. It is an educational program
              consisting of three distinct domains: Charms (Web Development),
              Potions (Machine Learning) and Alchemy (Embedded Systems). The
              main focus of this wizardry program will be providing quality
              theoretical education in wizardry as well as hands-on experience
              in their wizardry subjects. The classes will initially kick off
              from the basics with an introduction to the complexities of major
              projects and escalate to building a project of their own. Apart
              from these amenities, a magical certificate will be provided to
              acknowledge the knowledge of your wizardry. The details of the
              subjects are given below! Swipe Down.
            </p>
          </div>
          {/* registraion button */}
          {showbt==true && (<>
          {domain===""  && <div className="flex justify-center pt-4 sm:pt-8 font-cormorant">
            {/* <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] h-[42px] w-[140px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
              <div
                className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${yellowpopup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >
                <button
                  className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                  onClick={() => Modal()}
                >
                  Register
                </button>
              </div>
            </div> */}
            <a href="https://krs.kiit.ac.in/form/6361c4169febee669348ec8c">
            <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] h-[42px] w-[240px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
              <div
                className="bg-transparent h-10 w-[236px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${yellowpopup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >
                <button
                  className="bg-cover h-8 w-[228px] text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  Register For Basic Exams
                </button>
              </div>
            </div></a>
          </div>}</>)}
          {shoeModal.show ? (
            <>
              <RegisterPopup  popup={yellowpopup} close={CloseModal} />
            </>
          ) : null}
          {/* Basic */}
          <div className="text-white flex justify-center items-center mt-4">
            <img className="w-36 sm:w-56 md:w-80" src={broomleft} alt="" />
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#e2ad07] to-[#896a09]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center font-cormorant">
                Basic
              </h1>
            </div>

            <img className="w-36 sm:w-56 md:w-80" src={broomright} alt="" />
          </div>
          {/* Basic Cards */}
          <section className="flex flex-col lg:flex-row w-full items-center space-y-12 lg:space-y-0 justify-between px-24 py-8 pb-16 sm:pb-28 text-white  font-cormorant">
            <BasicCard
              img={bluecard}
              popup={bluepopup}
              popups={bluepopups}
              smallb={smallborder}
              bigb={bigborder}
              wing={wing}
              popuptxt1={webs}
              popuptxt2={devs}
              sbtn={sbtn}
              modalHeading={webdev}
              type="web"
              domain={domain}
              year={authCtx.user.year}
            />
            <BasicCard
              img={yellowcard}
              popup={yellowpopup}
              popups={yellowpopups}
              smallb={smallborder}
              bigb={bigborder}
              wing={wing}
              popuptxt1={embs}
              popuptxt2={syss}
              sbtn={sbtn}
              modalHeading={embsys}
              type="embd"
              domain={domain}
              year={authCtx.user.year}
            />
            <BasicCard
              img={greencard}
              popup={greenpopup}
              popups={greenpopups}
              smallb={smallborder}
              bigb={bigborder}
              wing={wing}
              popuptxt1={machs}
              popuptxt2={learns}
              sbtn={sbtn}
              modalHeading={machlearn}
              type="ml"
              domain={domain}
              year={authCtx.user.year}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default ClassesMain;
