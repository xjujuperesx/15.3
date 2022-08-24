const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

function professionalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_PROFESSIONAL':
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default professionalReducer;
