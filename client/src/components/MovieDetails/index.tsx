import { Button } from "@ui5/webcomponents-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMovieDetailsResponse } from "../../interfaces/Movie"
import MoviePosterComponent from "../../utils/Poster"
import movieDetailsFunctions from "./functions"

const MovieDetailsComponent = () => {
    const {movieID} = useParams()

    const [infos, setInfos] = useState<IMovieDetailsResponse>(Object)

    useEffect(() => {
        movieID && 
            movieDetailsFunctions.fetchMovieDetails(movieID)
                .then(response => setInfos(response))
    }, [movieID])    

    return (
        <>
            <div className="movie-details-container">
                <div className="movie-details-left-container">
                    <h2>{infos.title}</h2>
                    <p>{infos.plot}</p>
                    <div className="movie-details-actors">

                    <strong>Actors: </strong>{infos.actors}
                    </div>
                    <div className="movie-details-review">

                    <strong>Review</strong>
                    </div>
                    <Button className="movie-details-favorite-button">
                        Favorite
                    </Button>
                </div>
                <div className="movie-details-right-container">
                    {/* Movie Poster Component */}
                    <MoviePosterComponent data={infos} />
                </div>
            </div>
        </>
    )
}

export default MovieDetailsComponent