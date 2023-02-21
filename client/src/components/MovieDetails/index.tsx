import { Button } from "@ui5/webcomponents-react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { getMovieDetails } from "../../store/actionCreators/get-movie-details"
import { useTypedSelector } from "../../useTypeSelector"
import MoviePosterComponent from "../../utils/Poster"
import StarRatingComponent from "../../utils/StarRating"

const MovieDetailsComponent = () => {
    const {movieID} = useParams()

    const dispatch = useDispatch()
    const { movie, loading, error } = useTypedSelector((state) => state.movie);

    useEffect(() => {
        // @ts-ignore
        dispatch(getMovieDetails(movieID))
    }, [])   

    return movie ? (
        <>
            <div className="movie-details-breadcrumb">
                <Link to={'/'} ><span>Voltar</span></Link>
            </div>
            <div className="movie-details-container">
                <div className="movie-details-left-container">
                    <h2>{movie && movie.title}</h2>
                    <p>{movie && movie.plot}</p>
                    <div className="movie-details-actors">

                    <strong>Actors: </strong>{movie && movie.actors}
                    </div>
                    <div className="movie-details-review">

                    <strong>Review: </strong>
                    <StarRatingComponent rating={movie && movie.rating}/>
                    </div>
                    <Button className="movie-details-favorite-button">
                        Favorite
                    </Button>
                </div>
                
                    {/* Movie Poster Component */}
                    <MoviePosterComponent data={movie} />
                
            </div>
        </>
    ) : null
}

export default MovieDetailsComponent