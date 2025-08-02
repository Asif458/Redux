const intialState = {
  count: 0,
};

function counterReducer(state = intialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}


 



// this is action creator  used inside dispatch
function inc() {
  return { type: "increment" };
}

function dec() {
  return { type: "decrement" };
}

export  {inc,dec} ;

export default counterReducer;
