export interface IMovie {
    poster: string
    title: string
    id: string
    type: string
}

export interface IMovieRequest {
    amount: number
    data: IMovie[]
}

export interface IMovieDetailsResponse {
    title: string
    id: string
    type: string
    poster: string
    plot: string
    actors: string
    rating: number  
}