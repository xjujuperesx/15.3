import store from '../store';

const ADD_PERSONAL = 'ADD_PERSONAL';
const ADD_PROFESSIONAL = 'ADD_PROFESSIONAL';

export const personalInfo = (payload) => (
  store.dispatch({ type: ADD_PERSONAL, payload })
);

export const professionalInfo = (payload) => (
  store.dispatch({ type: ADD_PROFESSIONAL, payload })
);
