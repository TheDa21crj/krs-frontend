function FlipCard(props) {
  return (
    <div class="flip-card" style={{ width: `${props.width}` }}>
      <div class="flip-card-inner">
        <div
          class="flip-card-front rounded-2xl bg-[center_left_-7em] lg:bg-center md:bg-center bg-cover "
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <div className="text-3xl text-yellow-500 absolute top-0 py-2 px-5 bg-black bg-opacity-70 w-full z-10">
            {props.title}
          </div>
        </div>
        <div class="flip-card-back py-4 px-6 rounded-2xl text-white bg-black">
          <h1 className="text-xl">{props.title}</h1>
          <p className="text-sm md:text-base">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
