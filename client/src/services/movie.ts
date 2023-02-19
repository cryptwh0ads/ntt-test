import { api } from "."
import { IMovieDetailsResponse, IMovieRequest } from "../interfaces/Movie"

// some suggested movie titles
const movieTitles: Array<string> = [
    'furious',
    'hack',
    'action',
    'developer',
    'programming'
]

const getRandomMoviesList = async (): Promise<IMovieRequest> => {
    return await (await api.get(`/v1/movies/${movieTitles[Math.floor(Math.random()*movieTitles.length)]}`)).data
}

const getMovieDetails = async (id: string): Promise<IMovieDetailsResponse> => {
    return await (await api.get(`/v1/movies/details/${id}`)).data
}

const searchMoviesByTitle = async (title: string) : Promise<IMovieRequest> => {
    return await (await api.get(`/v1/movies/${title}`)).data
}

const movieService = {
    getRandomMoviesList,
    getMovieDetails,
    searchMoviesByTitle
}

export default movieService 