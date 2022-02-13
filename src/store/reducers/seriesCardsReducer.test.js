import actionsTypes from "../actions/actionsTypes";
import seriesCardsReducer from "./seriesCardsReducer";

describe("Given a seriesCardsReducer component", () => {
  describe("When it receives two series cards and the action 'loadSeries'", () => {
    test("Then it should return mySeries", () => {
      const currentState = [];
      const mySeries = {
        series: [
          {
            id: 3,
            name: "Mad Men",
            creator: "Matthew Weiner",
            year: 2007,
            poster:
              "https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg",
            watched: true,
            score: 5,
            emmies: 116,
          },
          {
            id: 4,
            name: "6 feet under",
            creator: "Alan Ball",
            year: 2001,
            poster: "https://www.cine.com/media/series/2711.jpg",
            watched: true,
            score: 5,
            emmies: 53,
          },
        ],
      };
      const expectedArrayofSeries = [
        {
          id: 3,
          name: "Mad Men",
          creator: "Matthew Weiner",
          year: 2007,
          poster:
            "https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg",
          watched: true,
          score: 5,
          emmies: 116,
        },
        {
          id: 4,
          name: "6 feet under",
          creator: "Alan Ball",
          year: 2001,
          poster: "https://www.cine.com/media/series/2711.jpg",
          watched: true,
          score: 5,
          emmies: 53,
        },
      ];
      const action = {
        type: actionsTypes.loadSeries,
        newSeriesCard: mySeries,
      };

      const newArrayofSeries = seriesCardsReducer(currentState, action);
      expect(newArrayofSeries).toEqual(expectedArrayofSeries);
    });
  });
});
