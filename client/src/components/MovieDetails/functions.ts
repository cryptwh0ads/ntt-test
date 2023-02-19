import { IMovieDetailsResponse } from "../../interfaces/Movie"
import movieService from "../../services/movie"

const fetchMovieDetails = async (id: string) : Promise<IMovieDetailsResponse> => {
    const response = await movieService.getMovieDetails(id)
    return response
}

const movieDetailsFunctions = {
    fetchMovieDetails
}

export default movieDetailsFunctions