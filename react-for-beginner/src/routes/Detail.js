import { useState, useEffect } from "react";
import{useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const {id} = useParams();

  const getMovie = async () => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  
  return (
    <div>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <div>
            <Movie 
              id={movie.id}
              coverImage={movie.medium_cover_image} 
              title={movie.title} 
              genres={movie.genres}
              description_full={movie.description_full} 
            />
        </div>
      )}
    </div>
)
}

export default Detail;