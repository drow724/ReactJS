
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieList({id, coverImage, title, summary, genres}) {
  return (
    <div> 
      <img src={coverImage} alt={title}/>
      <h2>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g,index) => <li key={index}>{g}</li>)}
      </ul>
    </div>
  )
}

MovieList.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieList;
