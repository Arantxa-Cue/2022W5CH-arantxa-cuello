import actionsTypes from "./actionsTypes";

export const deleteCardAction = (id) => ({
  type: actionsTypes.deleteCard,
  id,
});

export const loadMySeriesAction = (mySeries) => ({
  type: actionsTypes.loadSeries,
  mySeries,
});
