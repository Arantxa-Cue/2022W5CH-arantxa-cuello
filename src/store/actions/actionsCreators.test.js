import { deleteCardAction, loadMySeriesAction } from "./actionsCreators";

describe("Given a deleteCardAction funcion", () => {
  describe("When it receives id", () => {
    test("Then it shoud return an action type delete-card", () => {
      const id = [{ name: "Arantxa" }, { name: "Stuart" }];
      const expectedAction = {
        type: "delete-card",
        id,
      };
      const action = deleteCardAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadMySeriesAction", () => {
  describe("When it receives mySeries", () => {
    test("Then it should return an action type load-series", () => {
      const mySeries = [{ name: "Arantxa" }, { name: "Stuart" }];
      const expectedAction = {
        type: "load-series",
        mySeries,
      };
      const action = loadMySeriesAction(mySeries);
      expect(action).toEqual(expectedAction);
    });
  });
});
