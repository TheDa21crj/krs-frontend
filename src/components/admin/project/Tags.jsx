import React, { useEffect, useState } from "react";

export default function Tags(props) {
  const [rounded, setRounded] = useState();
  const [margin, setMargin] = useState();

  const clickHandler = () => {
    props.deleteHandler(props.name);
  };

  useEffect(() => {
    if (props.border == "round") {
      setRounded("15px");
    } else if (props.border == "roundSm") {
      setRounded("4px");
    }

    props.visible ? setMargin("4px") : setMargin("0px");
  });

  return (
    <div
      className="text-white pr-3  rounded mr-2 text-sm flex mt-3 h-7 w-fit"
      style={{ backgroundColor: "#535353", borderRadius: `${rounded}` }}
    >
      {props.imageView ? (
        <img
          src={props.image}
          alt=""
          className="rounded-full w-7 h-7"
          style={{ marginLeft: `${margin}` }}
        />
      ) : (
        <></>
      )}
      <div className="ml-2 py-1">{props.name}</div>
      {props.visible ? (
        <div
          className="flex justify-center items-center ml-[7px] cursor-pointer"
          onClick={clickHandler}
        >
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.92399 9.36089C9.95954 9.39401 9.98805 9.43395 10.0078 9.47833C10.0276 9.52271 10.0382 9.57062 10.0391 9.6192C10.0399 9.66778 10.031 9.71603 10.0128 9.76108C9.99461 9.80614 9.96753 9.84706 9.93317 9.88142C9.89882 9.91577 9.85789 9.94286 9.81284 9.96105C9.76779 9.97925 9.71954 9.98818 9.67096 9.98733C9.62238 9.98647 9.57447 9.97584 9.53009 9.95606C9.48571 9.93629 9.44577 9.90778 9.41264 9.87223L5.32671 5.7869L1.24077 9.87223C1.17219 9.93614 1.08147 9.97093 0.987742 9.96928C0.894011 9.96762 0.804581 9.92965 0.738293 9.86337C0.672005 9.79708 0.634034 9.70765 0.632381 9.61392C0.630727 9.52019 0.665519 9.42947 0.729427 9.36089L4.81476 5.27495L0.729427 1.18901C0.665519 1.12043 0.630727 1.02972 0.632381 0.935985C0.634034 0.842254 0.672005 0.752823 0.738293 0.686535C0.804581 0.620247 0.894011 0.582277 0.987742 0.580623C1.08147 0.578969 1.17219 0.613761 1.24077 0.67767L5.32671 4.763L9.41264 0.67767C9.48123 0.613761 9.57194 0.578969 9.66567 0.580623C9.75941 0.582277 9.84883 0.620247 9.91512 0.686535C9.98141 0.752823 10.0194 0.842254 10.021 0.935985C10.0227 1.02972 9.9879 1.12043 9.92399 1.18901L5.83866 5.27495L9.92399 9.36089Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
