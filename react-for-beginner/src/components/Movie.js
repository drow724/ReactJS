
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({id, coverImage, title, genres, description_full}) {
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img}/>
      <h2>{title}</h2>
      <ul>
        {genres.map((g,index) => <li key={index}>{g}</li>)}
      </ul>
      <p>{description_full}</p>
    </div>
  )
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_full: PropTypes.string.isRequired,
}

export default Movie;
