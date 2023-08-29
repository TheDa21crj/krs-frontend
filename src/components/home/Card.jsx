import event from "../../public/event.jpg";
import { useLayoutEffect, useRef } from "react";

function Card({ value }) {
  const eventRef = useRef();

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollAbout);

    return () => {
      window.removeEventListener("scroll", onScrollAbout);
    };
  }, []);
  const onScrollAbout = () => {
    const topPos = eventRef.current.getBoundingClientRect().top;
    const scrollPos = window.innerHeight;

    if (topPos < scrollPos - 100 && topPos > 0) {
      eventRef.current.style.opacity = 1;
      eventRef.current.classList.add("half-flip");
    }
  };

  return (
    <div className="">
      <div
        ref={eventRef}
        class="max-w-sm h-[700px] box-border bg-black border-4 border-solid border-yellow-500  rounded-3xl"
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col justify-between items-stretch border-red-400 h-full">
          <div>
            <a href={`/events#${value._id}`}>
              <div className="flex justify-center">
                <img
                  src={value.thumbnil[0]}
                  className="rounded-lg h-[250px] px-14 pt-8"
                />
              </div>
              <div class="p-2">
                <h1 className="text-center font-poppins text-2xl md:text-lg lg:text-2xl font-bold py-2 text-yellow-500">
                  {value.title}
                </h1>
                <p class=" h-[300px] text-sm md:text-base overflow-hidden font-WorkSans text-white text-justify px-3">
                  {value.description}
                </p>
              </div>
            </a>
          </div>
          <div className="">
            {value.registrationformid && value.status == "Registrations Open" && (
              <a href={`/form/${value.registrationformid}`}>
                {" "}
                <button
                  type="button"
                  class=" flex items-center justify-center w-full px-6 bg-yellow-500 text-black font-WorkSans text-xl font-bold rounded-b-2xl"
                >
                  REGISTER
                </button>
              </a>
            )}
            {value.registrationformid &&
              value.status == "Registrations Closed" && (
                <button
                  type="button"
                  class=" flex items-center justify-center w-full px-6  text-yellow-500 font-WorkSans text-xl font-bold rounded-b-2xl "
                >
                  REGISTERATION CLOSED
                </button>
              )}
            {value.status == "Upcoming" && (
              <button
                type="button"
                class="flex items-center justify-center w-full px-6 py-2.5 bg-amber-600 font-WorkSans text-xl font-bold rounded-b-2xl "
              >
                UPCOMING
              </button>
            )}
            {value.status == "Over" && value.reasultlink != "" && (
              <a href={`${value.reasultlink}`}>
                {" "}
                <button
                  type="button"
                  class=" flex items-center justify-center w-full px-6 py-2.5 bg-yellow-500 text-black font-WorkSans text-xl font-bold rounded-b-2xl "
                >
                  RESULTS
                </button>
              </a>
            )}
                {value.status == "Over" && value.reasultlink == "" && (
                <button
                type="button"
                class="flex items-center justify-center w-full px-6 py-2.5 bg-amber-600 font-WorkSans text-xl font-bold rounded-b-2xl "
              >
               REGISTERATION OVER
              </button>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
