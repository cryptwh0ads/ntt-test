export interface IMovie {
    poster: string
    title: string
    id: string
}

export interface IMovieRequest {
    amount: number
    data: IMovie[]
}