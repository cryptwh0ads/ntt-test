import { Module } from "@nestjs/common";
import MovieRepository from "src/application/repositories/movie-repository";
import OMDbAdapterRepository from "./omdb.adapter";

@Module({
    providers : [
        {
            provide : MovieRepository,
            useClass: OMDbAdapterRepository
        } 
    ],
    exports : [
        MovieRepository
    ]
})
export default class OMDbAdapterModule {}