const initialState = {
  favourties: [],
};
export default function mainReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favourties: [...state.favourties, payload],
      };
    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favourties: state.favourties.filter((company) => company !== payload),
      };
    default:
      return state;
  }
}
