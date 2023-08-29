import border from "../../public/big-border.png";
import rbg from "../../public/rbg.png";
function RegisterPopup(props) {
  //   const [shoeModal, setshoeModal] = useState({ show: false });

  //   const Modal = () => {
  //     setshoeModal({ show: true });
  //   };

  //   const CloseModal = () => {
  //     setshoeModal({ show: false });
  //   };
  return (
    <div>
      {/* modal */}
      <div
        className="border-2 border-[#d78f02] bg-[length:100%_100%] rounded-md my-20 lg:my-24 xl:my-36 mx-8 sm:mx-16 lg:mx-32 xl:mx-56 justify-center items-center flex overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-50 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${rbg})`,
        }}
      ></div>
      <div
        className="modal-krs font-cormorant border-[30px] bg-[length:100%_100%] rounded-md my-20 lg:my-24 xl:my-36 mx-8 sm:mx-16 lg:mx-32 xl:mx-56 justify-center items-center flex overflow-x-hidden fixed inset-3 z-50 "
        style={{
          borderImageSource: `url(${border})`,
          borderImageSlice: `60`,
        }}
      >
        <div className="modal-krs absolute top-0 py-8 z-10 flex flex-col justify-center items-center px-12">
          <div className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-4xl">
            Choose the wizardry you are interested in.
          </div>

          <div className="flex flex-col lg:flex-row mt-8 sm:px-12 gap-8 xl:gap-10 pt-8 text-black">
            <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[220px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
              <a href="/form/63447230697dffcdec69cd02">
              <div
                className="bg-transparent h-10 w-[216px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >

                <button
                  className="bg-cover h-8 w-[208px] text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  Web Development
                </button>
              </div>
              </a>
            </div>

            <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[220px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
              <a href="/form/63447441697dffcdec69cd0c">
              <div
                className="bg-transparent h-10 w-[216px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >
                <button
                  className="bg-cover h-8 w-[208px] text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  Embedded Systems
                </button>
              </div>
              </a>
            </div>

            <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[220px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
                    <a href="/form/63447328697dffcdec69cd07">
              <div
                className="bg-transparent h-10 w-[216px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >
                <button
                  className="bg-cover h-8 w-[208px] text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                >
                  Machine Learning
                </button>
              </div>
              </a>
            </div>
          </div>
          {/* close button */}
          <div
            className="mt-16 bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] h-[42px] w-[140px] flex justify-center items-center"
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
                onClick={() => props.close()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPopup;
