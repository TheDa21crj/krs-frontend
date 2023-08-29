import {Link} from "react-router-dom";

function TestCard({data}) {
  return (
    <div class=" bg-white flex flex-col justify-center rounded-md pt-2  w-[300px]">
      <div className="h-60 flex">
      <div className="m-4 text-justify  text-[12px] flex-col place-items-end justify-end px-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          class="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        {data.content}
            </div>
      </div>
      

      <div class="flex ml-4 mb-4">
        <img
          src="https://ik.imagekit.io/krs/default_avatar_1m6KnY5Ee.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660061843478"
          class="rounded-full shadow-lg w-10 h-10 "
        />
        <div>
          <Link to="/members">
          <h5 class="text-xl font-semibold  ml-4 ">{data.Name}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
