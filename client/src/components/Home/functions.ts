import { IMovieRequest } from "../../interfaces/Movie"
import movieService from "../../services/movie"

const fetchMovies = async () : Promise<IMovieRequest> => {
    const response = await movieService.getRandomMoviesList()
    return response
}

const homeFunctions = {
    fetchMovies
}

export default homeFunctions