const initialState = {
    drawerCurrentTab:'Dashboard',
  };
  
  export default reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CURRENT_TAB':
        return {
          ...state,
          drawerCurrentTab: action.payload,
        };
      default:
        return state;
    }
  };
  