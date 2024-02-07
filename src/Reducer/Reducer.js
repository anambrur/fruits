const cardReducer = (state, action) => {
  if (action.type === "increase") {
    console.log("Increase");
    return {
      number: state.number + 1,
    };
  }
  if (action.type === "decrease") {
    return {
      number: state.number - 1,
    };
  }
};
export default cardReducer
