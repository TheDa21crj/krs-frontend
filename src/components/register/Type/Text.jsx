
function Text({initial,name,change}) {

  return (
    <div className="">
      <input
        type="text"
        placeholder={name=="Referral"?"Referral code (optional)":`${name}`}
        className="bg-transparent w-full text-sm md:text-base"
        name={name}
        defaultValue={initial.value}
        onChange={change}
        style={{
          outline: "none",
          color: "white",
        }}
      
      ></input>
    </div>
  );
}

export default Text;