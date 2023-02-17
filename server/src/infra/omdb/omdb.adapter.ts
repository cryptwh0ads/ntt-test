import MovieRepository from "src/application/repositories/movie-repository";
import movie from "src/domain/entities/movie";

export default class OMDbAdapterRepository implements MovieRepository{

//http://www.omdbapi.com/?i=tt3896198&apikey=2e10e9ad

    private baseURL = 'http://www.omdbapi.com/?apikey=2e10e9ad'

    async list(searchString: string): Promise<movie[]> {
        const response = await fetch(this.baseURL + `&s=${searchString}`)
        return response.json().then(data => data.Search);
    }

    async getById(id: string): Promise<movie> {
        const response = await fetch(this.baseURL + `&i=${id}`)
        return await response.json()
    }
    
}