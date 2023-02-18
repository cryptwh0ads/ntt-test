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