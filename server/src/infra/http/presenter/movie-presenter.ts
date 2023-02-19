import Movie from "src/domain/entities/movie"

export default class MoviePresenter {
    
    static toHttpResponse(movie : Movie) {
        return {
            title : movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            type: movie.Type,
            poster: movie.Poster
        }
    }

    static toHttpListResponse(movies : Movie[]) {
        return {
            amount : movies?.length,
            data : movies?.map(this.toHttpResponse)
        }
    }

    static getMovieDetails(movie: Movie){
        return {
            title : movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            type: movie.Type,
            poster: movie.Poster,
            plot: movie.Plot,
            actors: movie.Actors,
            rating: movie.imdbRating
    } }
}
