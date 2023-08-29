function Text() {
  return (
    <div className="mb-4 w-[250px]">
      <text className="text-yellow-500 font-bold text-6xl">
        KIIT<br></br> Robotics<br></br> Society
      </text>
      <br></br>
      <text className="text-white text-2xl italic">
        {" "}
        <br />
        Ideas💡that Enlighten
      </text>
      <br />

      <div className="flex text-gray-300 mt-10 pr-8 mb-8 lg:mb-0">
        <div>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="white"
          >
            <path
              fill="white"
              d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
            />
          </svg>{" "}
        </div>
        <div>
          <h1 className="pl-2">Campus-12 Patia, Bhubaneswar, Odisha 751024</h1>
        </div>
      </div>
    </div>
  );
}

export default Text;
