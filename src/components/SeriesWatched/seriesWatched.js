const SeriesWatched = () => {
  return (
    <>
      <section className="series-watched">
        <h3 className="subsection-title">Watched series</h3>
        <p className="info">You have watched 4 series</p>
        <p className="info">You already have not watched any serie</p>
        <ul className="series-list series-list--watched">
          <li className="serie">
            <img
              className="serie__poster"
              src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
              alt="The Sopranos poster"
            />
            <h4 className="serie__title">The Sopranos</h4>
            <p className="serie__info">David Chase (1999)</p>
            <ul className="score">
              <li className="score__star">
                <i className="icon-score far fa-star" title="1/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="2/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="3/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="4/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="5/5"></i>
              </li>
            </ul>
            <i className="fas fa-times-circle icon--delete"></i>
          </li>
          <li className="serie">
            <img
              className="serie__poster"
              src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
              alt="Game of Thrones poster"
            />
            <h4 className="serie__title">Game of Thrones</h4>
            <p className="serie__info">David Benioff D. B. Weiss (2011)</p>
            <ul className="score">
              <li className="score__star">
                <i className="icon-score far fa-star" title="1/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="2/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="3/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="4/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="5/5"></i>
              </li>
            </ul>
            <i className="fas fa-times-circle icon--delete"></i>
          </li>
          <li className="serie">
            <img
              className="serie__poster"
              src="https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg"
              alt="Mad Men poster"
            />
            <h4 className="serie__title">Mad Men</h4>
            <p className="serie__info">Matthew Weiner (2007)</p>
            <ul className="score">
              <li className="score__star">
                <i className="icon-score far fa-star" title="1/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="2/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="3/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="4/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="5/5"></i>
              </li>
            </ul>
            <i className="fas fa-times-circle icon--delete"></i>
          </li>
          <li className="serie">
            <img
              className="serie__poster"
              src="https://www.cine.com/media/series/2711.jpg"
              alt="6 feet under poster"
            />
            <h4 className="serie__title">6 feet under</h4>
            <p className="serie__info">Alan Ball (2001)</p>
            <ul className="score">
              <li className="score__star">
                <i className="icon-score far fa-star" title="1/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="2/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="3/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="4/5"></i>
              </li>
              <li className="score__star">
                <i className="icon-score far fa-star" title="5/5"></i>
              </li>
            </ul>
            <i className="fas fa-times-circle icon--delete"></i>
          </li>
        </ul>
      </section>
    </>
  );
};
export default SeriesWatched;
