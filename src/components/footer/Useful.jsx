import { Link } from "react-router-dom";

function Useful() {
  return (
    <div className="font-WorkSans mb-16">
      <h1 className="font-extrabold text-white text-lg">Useful Links</h1>
      <div
        className=""
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "36px",
          color: "#7B7B7B",
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

export default Useful;
