

function Email({initial,name,pre,change}) {


    return (
      <div>
        {pre==2? <input
          type="email"
          placeholder="name@example.com"
          className="bg-transparent"
          name={name}
          defaultValue={initial}
          onChange={change}
          style={{
            width: "100%",
            outline: "none",
            color: "white",
          }}
          disabled
        ></input>: <input
        type="email"
        placeholder="name@example.com"
        className="bg-transparent w-full"
        name={name}
        defaultValue={initial}
        onChange={change}
        style={{
          width: "100%",
          outline: "none",
          color: "white",
        }}
      ></input>}
      </div>
    );
  }

  export default Email;