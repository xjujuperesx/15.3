const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

function personalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_PERSONAL':
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default personalReducer;
