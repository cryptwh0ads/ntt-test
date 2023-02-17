export type MovieProps = {
    imdbID ?: string
    Title : string
    Year : string
    Type ?: MovieTypes
    Poster : string
    Plot ?: string
    Actors ?: string
    imdbRating ?: number
}

type MovieTypes = 'movie' | 'series' | 'episode'

export default class Movie {
    private _imdbID : string;
    private _title : string;
    private _year : string;
    private _type : MovieTypes
    private _poster : string
    private _plot : string
    private _actors : string
    private _imdbRating : number
    
    constructor(props : MovieProps ) {
        this._imdbID = props.imdbID,
        this._title = props.Title,
        this._year = props.Year,
        this._type = props.Type
        this._poster = props.Poster,
        this._plot = props.Plot,
        this._actors = props.Actors,
        this._imdbRating = props.imdbRating
    }

    public get imdbID() : string { return this._imdbID }

    public set imdbID(imdbID : string) { this._imdbID = imdbID }

    public get Title() : string { return this._title }

    public set Title(title : string) { this._title = title }

    public get Year() : string { return this._year }

    public set Year(year : string) { this._year = year }

    public get Type() : MovieTypes { return this._type }

    public set Type(type : MovieTypes) { this._type = type }

    public get Poster() : string { return this._poster }

    public set Poster(poster : string) { this._poster = poster }

    public get Plot() : string { return this._plot }

    public set Plot(plot : string) { this._plot = plot }

    public get Actors() : string { return this._actors }

    public set Actors(actors : string) { this._actors = actors }

    public get imdbRating() : number { return this._imdbRating }

    public set imdbRating(imdbRating : number) { this._imdbRating = imdbRating }
}
