import { Injectable } from "@nestjs/common";
import MovieRepository from "src/application/repositories/movie-repository";
import Movie from "src/domain/entities/movie";

@Injectable()
export default class GetMovieByIDUseCase {
    constructor(
        private readonly _movieRepository : MovieRepository
    ) {}

    public async execute(id: string) : Promise<Movie> {
        const movie = await this._movieRepository.getById(id);

        return movie;
    }
}