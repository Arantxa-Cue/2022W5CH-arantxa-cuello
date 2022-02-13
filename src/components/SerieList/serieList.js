import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SeriesContext from "../../store/contexts/SeriesContext";
import useApi from "../../hooks/useApi";

const SerieList = (id) => {
  const { deleteCardAPI } = useApi();

  const deleteSerie = () => {
    deleteCardAPI(id);
  };
  return (
    <>
      <section className="series-pending">
        <h3 className="subsection-title">Pending series</h3>
        <p className="info">You have 4 series pending to watch</p>
        {id.series.map((serie, index) => (
          <ul key={serie.id} className="series-list">
            <li className="serie">
              <img
                className="serie__poster"
                src={serie.poster}
                alt="The Sopranos poster"
              />
              <h4 className="serie__title">{serie.name}</h4>
              <p className="serie__info">
                {serie.creator} {serie.year}
              </p>
              <ul className="score">
                <li className="score__star">
                  <i className="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li className="score__star">
                  <i className="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li className="score__star">
                  <i className="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li className="score__star">
                  <i className="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li className="score__star">
                  <i className="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i
                className="fas fa-times-circle icon--delete"
                onClick={deleteSerie}
              ></i>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
};

export default SerieList;
