import { Module } from '@nestjs/common';
import GetMovieByIMDbIDUseCase from 'src/application/use-cases/movie/get-one-movie-use-case';
import ListMoviesUseCase from 'src/application/use-cases/movie/list-movies-use-case';
import OMDbAdapterModule from '../omdb/omdb.module';
import MovieController from './controllers/movie.controller';

@Module({
    imports: [OMDbAdapterModule],
    controllers: [MovieController],
    providers: [
        ListMoviesUseCase,
        GetMovieByIMDbIDUseCase
    ],
})

export default class HttpModule {}
