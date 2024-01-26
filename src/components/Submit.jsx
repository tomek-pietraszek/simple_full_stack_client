import { sentCount } from "../apiCalls.js/countApi";


const submitHandler =  (count) => {
  
   sentCount(count)
}

// eslint-disable-next-line react/prop-types
function Submit({count}) {
  return (


    <>
      <button className="submitBtn" onClick={(submitHandler(count))}>SUBMIT</button>
    </>
  );
}

export default Submit;
