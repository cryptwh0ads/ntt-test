interface IMovie {
    id: string
    title: string
    poster: string
    type: string
    rating: number
    plot: string
    actors: string
}
  
interface MovieState {
    movies?: IMovie[]
    movie?: IMovie
    loading: boolean
    error?: string | null
}
