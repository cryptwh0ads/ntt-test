import Movie from "src/domain/entities/movie";

export default abstract class MovieRepository {
    abstract list(searchString: string) : Promise<Movie[]>;
    abstract getById(id: string) : Promise<Movie | null>;
}