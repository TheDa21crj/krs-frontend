import { Link } from "react-router-dom";

function UsefulClass() {
  return (
    <div className="font-WorkSans mb-16">
      <h1 className="font-extrabold  text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]">
        Useful Links
      </h1>
      <div
        className="px-18 text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]"
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "36px",
          justifyItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/featured">Featured</Link>
        <br></br>
        <Link to="/events">Events</Link>
        <br></br>
        <Link to="/achievements">Achievements</Link>
        <br></br>
        <Link to="/members">Members</Link>
        <br></br>
      </div>
    </div>
  );
}

export default UsefulClass;
