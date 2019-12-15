let initialState = {
  name: "InitialName",
  address: "InitialAddress",
  city: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER_DETAILS":
      console.log("action", action);
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city
      };
    default:
      return { ...state };
  }
};

export default userReducer;
