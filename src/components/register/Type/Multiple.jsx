
function Multiple({initial,name,change,values}) {

  const options=values.split(',')
    return (
      <div className="text-white">
        {options.map((e,i)=>(
          <>
          {initial==e &&  <input key={i} type="checkbox" defaultValue={initial==""?null:initial} value={e} onChange={change} id={e} name={name}/> }
          {initial!=e &&  <input key={i} type="checkbox" defaultValue={initial==""?null:initial} value={e} onChange={change} id={e} name={name} /> }
         <label for={e}>{e}</label>
         <br></br>
          </>
         ))}
          
      </div>
    );
  }

  export default Multiple;