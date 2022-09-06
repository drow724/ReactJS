
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieList({id, coverImage, title, genres, description_full}) {
  return (
    <div> 
      <img src={coverImage} alt={title}/>
      <h2>{title}</h2>
      <ul>
        {genres.map((g,index) => <li key={index}>{g}</li>)}
      </ul>
      <p>{description_full}</p>
    </div>
  )
}

MovieList.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_full: PropTypes.string.isRequired,
}

export default MovieList;
