import actionsTypes from "../actions/actionsTypes";

const seriesCardsReducer = (currentSeriesCards, action) => {
  let newSeriesCards;
  switch (action.type) {
    case actionsTypes.loadSeries:
      newSeriesCards = [...action.mySeries];
      break;
    case actionsTypes.deleteCard:
      newSeriesCards = currentSeriesCards.filter(
        (card) => card.id !== action.id
      );
      break;
    default:
      newSeriesCards = [...currentSeriesCards];
  }
  return newSeriesCards;
};

export default seriesCardsReducer;
