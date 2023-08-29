import "./events.css";
import { useRef, useLayoutEffect } from "react";

let count_event = 0;
function EventSlider({ thumb }) {
  const posterRef = [useRef(1), useRef(2), useRef(3)];

  const changestate = () => {
  
    if (count_event == 0) {
      posterRef[0].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[0].current.style.opacity = 0.6;
      posterRef[0].current.style.zIndex = 0;

      posterRef[1].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[1].current.style.opacity = 0.6;
      posterRef[1].current.style.zIndex = 0;

      posterRef[2].current.style.transform = "translatex(0%) scale(1)";
      posterRef[2].current.style.opacity = 1;
      posterRef[2].current.style.zIndex = 1;
   
      count_event = 1;
    } else if (count_event == 1) {
      posterRef[1].current.style.transform = "translatex(0%) scale(1)";
      posterRef[1].current.style.opacity = 1;
      posterRef[1].current.style.zIndex = 1;

      posterRef[2].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[2].current.style.opacity = 0.6;
      posterRef[2].current.style.zIndex = 0;

      posterRef[0].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[0].current.style.opacity = 0.6;
      posterRef[0].current.style.zIndex = 0;

   
      count_event = 2;
    } else if (count_event == 2) {
      posterRef[1].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[1].current.style.opacity = 0.6;
      posterRef[1].current.style.zIndex = 0;

      posterRef[2].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[2].current.style.opacity = 0.6;
      posterRef[2].current.style.zIndex = 0;

      posterRef[0].current.style.transform = "translatex(0%) scale(1)";
      posterRef[0].current.style.opacity = 1;
      posterRef[0].current.style.zIndex = 1;
    
      count_event = 0;
    }
  };
  useLayoutEffect(() => {
    const slideIntervalev = setInterval(() => {
      changestate();
   
    }, 6000);

    return () => {
      clearInterval(slideIntervalev);
    };
  }, []);
  return (
    <div class="event_container">
      <div class="event_cards">
        <label ref={posterRef[0]} class="event_card poster-1" for="item-1">
          <img className="event_img w-fit" src={thumb[0]} alt="img1" />
        </label>
        <label ref={posterRef[1]} class="event_card poster-2" for="item-2">
          <img className="event_img" src={thumb[1]} alt="img2" />
        </label>
        <label ref={posterRef[2]} class="event_card poster-3" for="item-3">
          <img className="event_img" src={thumb[2]} alt="img3" />
        </label>
      </div>
    </div>
  );
}

export default EventSlider;
