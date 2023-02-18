import { api } from "."
import { IMovieRequest } from "../interfaces/Movie"

// some suggested movie titles
const movieTitles: Array<string> = [
    'furious',
    'hack',
    'action',
    'developer',
    'programing'
]

const getRandomMoviesList = async (): Promise<IMovieRequest> => {
    return await (await api.get(`/v1/movies/${movieTitles[Math.floor(Math.random()*movieTitles.length)]}`)).data
}

const movieService = {
    getRandomMoviesList
}

export default movieService 