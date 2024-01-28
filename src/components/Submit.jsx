import { sentCount } from "../apiCalls.js/countApi";

const submitHandler = (count) => {
  sentCount(count);
};

// eslint-disable-next-line react/prop-types
function Submit({ count }) {
  return (
    <>

    {/* it's necessary to pass only the reference to the callback function, otherwise the api call will be invoked every time the submit component renders */}
      <button className="submitBtn" onClick={() => submitHandler(count)}>
        SUBMIT
      </button>
    </>
  );
}

export default Submit;
