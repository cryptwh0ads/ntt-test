import { Controller, Get, Param } from '@nestjs/common';
import GetMovieByIDUseCase from 'src/application/use-cases/movie/get-one-movie-use-case';
import GetMovieByIMDbIDUseCase from 'src/application/use-cases/movie/get-one-movie-use-case';
import ListMoviesUseCase from 'src/application/use-cases/movie/list-movies-use-case';
import MoviePresenter from '../presenter/movie-presenter';

@Controller('api/v1/movies')
export default class MovieController {

    constructor(
        private readonly _listMoviesUseCase: ListMoviesUseCase,
        private readonly _getMovieByIDUseCase: GetMovieByIDUseCase
    ){}

    @Get(':searchString')
    public async list(@Param() params) {
        const movies = await this._listMoviesUseCase.execute(params.searchString)
        return MoviePresenter.toHttpListResponse(movies)
    }

    @Get('details/:id')
    public async getByID(@Param() params) {
        const movie = await this._getMovieByIDUseCase.execute(params.id)
        return MoviePresenter.getMovieDetails(movie)
    }
}
