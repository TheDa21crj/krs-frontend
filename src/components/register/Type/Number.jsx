import React from 'react'

function Number({initial,name,pre,change}) {

  return (
    <div>
        <input
          key={name}
          type="number"
          placeholder={`Enter ${name}`}
          className="bg-transparent w-full"
          name={name}
          defaultValue={(pre==1||name=="Contact No"||name=="Whatsapp Contact No")?initial:null}
          onChange={change}
          style={{
            width: "100%",
            outline: "none",
            color: "white",
          }}
         
        ></input>
    </div>
  )
}

export default Number