import { useState } from "react";
import border from "../../public/big-border.png";
import bg from "../../public/bluepopup1.png";
function BasicCard(props) {
  const [shoeModal, setshoeModal] = useState({ show: false });

  const Modal = () => {
    setshoeModal({ show: true });
  };

  const CloseModal = () => {
    setshoeModal({ show: false });
  };

  return (
    <div>
      <div className="w-[230px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden w-full h-full">
            <img src={props.img} alt="" className="h-full w-full" />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 bg-cover border-2 border-[#f3af40] rounded-md"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popups})`,
            }}
          >
            <div className="text-center text-black flex flex-col items-center justify-center h-full bg-cover">
              <div className="z-0 absolute">
                <img src={props.smallb} alt="" />
              </div>
              <div className="z-10 absolute flex flex-col justify-center items-center">
                <img src={props.wing} alt="" />
                <img className="w-5/6 h-16" src={props.popuptxt1} alt="" />
                <img className="w-5/6 h-16" src={props.popuptxt2} alt="" />
                <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
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
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {shoeModal.show ? (
        <>
          <div
            className=" bg-[length:100%_100%] rounded-md my-20 lg:my-24 xl:my-28 mx-8 sm:mx-16 lg:mx-28 xl:mx-36 justify-center items-center flex overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-50 "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popups})`,
            }}
          ></div>
          <div
            className="modal-krs border-[30px] bg-[length:100%_100%] rounded-md my-20 lg:my-24 xl:my-28 mx-8 sm:mx-16 lg:mx-28 xl:mx-36 justify-center items-center flex overflow-x-hidden fixed inset-3 z-50 "
            style={{
              // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
              // borderImage: `url(${border}) 4% stretch`,
              // borderImageOutset: `20px`,
              borderImageSource: `url(${border})`,
              borderImageSlice: `60`,
            }}
          >
            <div className="modal-krs absolute top-0 py-8 z-10 flex flex-col justify-center items-center px-12">
              <img className="scale-95" src={props.modalHeading} alt="" />
              {props.type === "web" && (
                <div className="text-justify text-sm sm:text-base py-4 overflow-y-auto">
                  Web development refers to the building, creating, and
                  maintaining of websites. It includes aspects such as web
                  design, web publishing, web programming, and database
                  management. It is the creation of an application that works
                  over the internet i.e. websites. HTML, CSS and JavaScript are
                  the basic languages that are used in web development. Web
                  development can be an excellent, lucrative career, if you are
                  passionate about developing websites, web apps, or doing UI/UX
                  work. However, you need to frequently upgrade your skills as
                  it is a continuously evolving field. In our class of charms we
                  will get you acquainted with the magic of web development and
                  you will be able to make your own projects after the
                  completion of our magical classes.
                </div>
              )}
              {props.type === "embd" && (
                <div className="text-justify text-sm sm:text-base py-4 overflow-y-auto">
                  An embedded system is a combination of computer hardware and
                  software designed for a specific function.The systems can be
                  programmable or have fixed functionality. Industrial machines,
                  consumer electronics etc are possible locations for an
                  embedded system. The scope of the Embedded System is widely
                  increasing day to day. The Embedded software found huge
                  applications in telecommunications, defence instrumentations,
                  railroad networks, consumer electronics, electronic payments,
                  and the smart card industry, etc. Like this, embedded system
                  applications are increasing rapidly day-by-day. Therefore, one
                  can get a number of expanded opportunities in Embedded
                  Systems. Project ideas include Embedded Web Tech Traffic
                  Monitoring System, Automation of Cars Using Embedded Systems
                  Technology, transients Control for Home Appliances Project
                  etc. In our class of alchemy, we will get you acquainted with
                  the magic of embedded systems and you will be able to make
                  your own projects after the completion of our magical classes.
                </div>
              )}
              {props.type === "ml" && (
                <div className="text-justify text-sm sm:text-base py-4 overflow-y-auto">
                  Machine learning is a subfield of artificial intelligence,
                  which is broadly defined as the capability of a machine to
                  imitate intelligent human-like behaviour. Through the concept
                  of machine learning predictions, analysis on data, automations
                  can be made in a more simple way. There are many more
                  functionalities of this wizardry. The scope of Machine
                  Learning is not limited to one sector. Rather, it is expanding
                  across all fields such as banking and finance, information
                  technology, media & entertainment, gaming, and the automotive
                  industry. As the Machine Learning scope is very high, there
                  are some areas where researchers are working towards
                  revolutionising the world for the future. Some of the major
                  project ideas include Stock price predictions, image
                  classifications, etc. In our class of potions we will get you
                  acquainted with the magic of Machine learning and you will be
                  able to make your own projects after the completion of our
                  magical classes.
                </div>
              )}
              <div className="flex flex-col md:flex-row px-12 gap-4 md:gap-12 pt-8 text-black">
                
                    {props.domain=="web" && props.type=="web" && props.year!="1st" &&<div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  > <a href={`https://classroom.google.com/c/NTU1NTcwNzU4MTM5?cjc=xugjqah`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                  {props.domain=="ml" && props.type=="ml"&& props.year!="1st"  && <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  ><a href={`https://classroom.google.com/c/NTAyNjMwODk5Mjk0?cjc=iwbom3k`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                  {props.domain=="embd" && props.type=="embd" && props.year!="1st"  && <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  ><a href={`https://classroom.google.com/c/NTU1NTY5ODU4NTcy?cjc=rbca2fm`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                  {/* ******************************************* */}
                  {props.domain=="web" && props.type=="web" && props.year=="1st" && <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  ><a href={`https://classroom.google.com/c/NTAyNjMxMDkzNzU0?cjc=i7z27cb`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                  {props.domain=="ml" && props.type=="ml"&& props.year=="1st"  && <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  ><a href={`https://classroom.google.com/c/NTAyNjMwNzE1OTI3?cjc=ds2teoq`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                  {props.domain=="embd" && props.type=="embd" && props.year=="1st"  && <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  ><a href={`https://classroom.google.com/c/NTAyNjI5ODQyODAx?cjc=cq5xkgi`}>
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                    >
                      Class Link
                    </button>
                  </a>  </div>
                </div>}
                
                <div
                  className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] h-[42px] w-[140px] flex justify-center items-center"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  <div
                    className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                      clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                    }}
                  >
                    <button
                      className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                      style={{
                        clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                      }}
                      onClick={() => CloseModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default BasicCard;
