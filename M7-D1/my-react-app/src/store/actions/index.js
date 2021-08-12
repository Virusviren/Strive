export const addToFav = (company) => ({
  type: 'ADD_TO_FAV',
  payload: company,
});

export const removeFromFav = (company) => ({
  type: 'REMOVE_FROM_FAV',
  payload: company,
});
