import { Injectable } from "@nestjs/common";
import MovieRepository from "src/application/repositories/movie-repository";
import Movie from "src/domain/entities/movie";

@Injectable()
export default class ListMoviesUseCase {
    constructor(
        private readonly _movieRepository : MovieRepository
    ) {}

    public async execute(searchString: string) : Promise<Movie[]> {
        const movies = await this._movieRepository.list(searchString);

        return movies;
    }
}