function Info({ event, inst }) {
  const date = new Date(event.date);
  const datestring = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return (
    <div
      className="xl:w-[30%] md:w-[50%] sm:w-[50%] lg:w-[30%] w-[100%] my-5 mx-10 sm:ml-10 sm:mr-0 h-96 rounded"
      style={{ background: "rgba(28, 28, 28, 1)" }}
    >
      <div className="flex flex-col items-center space-y-2">
        <img src={event.pic} className="w-[100%] h-44" alt="" />
        <div className="flex flex-col w-[100%] ml-5">
          <text className="text-yellow-500 xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold">
            {event.title}
          </text>
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12C4.71667 12 4.479 11.904 4.287 11.712C4.095 11.52 3.99934 11.2827 4 11C4 10.7167 4.096 10.479 4.288 10.287C4.48 10.095 4.71734 9.99933 5 10C5.28334 10 5.521 10.096 5.713 10.288C5.905 10.48 6.00067 10.7173 6 11C6 11.2833 5.904 11.521 5.712 11.713C5.52 11.905 5.28267 12.0007 5 12ZM9 12C8.71667 12 8.479 11.904 8.287 11.712C8.095 11.52 7.99934 11.2827 8 11C8 10.7167 8.096 10.479 8.288 10.287C8.48 10.095 8.71734 9.99933 9 10C9.28334 10 9.521 10.096 9.713 10.288C9.905 10.48 10.0007 10.7173 10 11C10 11.2833 9.904 11.521 9.712 11.713C9.52 11.905 9.28267 12.0007 9 12ZM13 12C12.7167 12 12.479 11.904 12.287 11.712C12.095 11.52 11.9993 11.2827 12 11C12 10.7167 12.096 10.479 12.288 10.287C12.48 10.095 12.7173 9.99933 13 10C13.2833 10 13.521 10.096 13.713 10.288C13.905 10.48 14.0007 10.7173 14 11C14 11.2833 13.904 11.521 13.712 11.713C13.52 11.905 13.2827 12.0007 13 12ZM2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20H2ZM2 18H16V8H2V18Z"
                  fill="#FFB742"
                />
              </svg>
              <text className="text-white ml-2">{datestring}</text>
            </div>
            <div className="flex mr-5">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z"
                  fill="#FFB742"
                />
              </svg>
              <text className="text-white ml-2"> {event.venue}</text>
            </div>
          </div>
          {/* <div className="flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <text className="text-white ml-5"> {event.venue}</text>
          </div> */}
          {/* <div className="flex ml-7 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
              />
            </svg>
            <text className="text-white ml-5">{datestring}</text>
          </div> */}
        </div>
        <br />
        <div className="ml-5 w-[100%]">
          <p className="text-white">{inst}</p>
        </div>
      </div>

      <br></br>
    </div>
  );
}

export default Info;
