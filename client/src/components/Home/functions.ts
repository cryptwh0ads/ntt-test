import { IMovieRequest } from "../../interfaces/Movie"
import movieService from "../../services/movie"

export const fetchMovies = async () : Promise<IMovieRequest> => {
    const response = await movieService.getRandomMoviesList()
    return response
}