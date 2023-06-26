const initialState = {
  drawerCurrentTab: 'Dashboard',
  profileData: {},
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_TAB':
      return {
        ...state,
        drawerCurrentTab: action.payload,
      };
    case 'ADD_PROFILE_DATA':
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};
