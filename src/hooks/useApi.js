import { useCallback, useContext } from "react";
import {
  deleteCardAction,
  loadMySeriesAction,
} from "../store/actions/actionsCreators";
import SeriesContext from "../store/contexts/SeriesContext";

const useApi = () => {
  const apiURL = `https://series-isdi.herokuapp.com/series`;
  const { dispatch } = useContext(SeriesContext);

  const loadSeriesAPI = useCallback(
    async (id) => {
      const response = await fetch(`${apiURL}/${id}`);
      const series = await response.json();
      dispatch(loadMySeriesAction([series]));
    },
    [apiURL, dispatch]
  );

  const deleteCardAPI = async (id) => {
    const response = await fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteCardAction(id));
    } else {
      throw new Error();
    }
  };
  return { deleteCardAPI, loadSeriesAPI };
};

export default useApi;
