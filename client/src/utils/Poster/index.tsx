import { Card, CardHeader } from "@ui5/webcomponents-react"
import { Link, redirect } from "react-router-dom"
import { IMovie } from "../../interfaces/Movie"

interface CardProps {
    data: IMovie
    linkTo ?: string
}


const MoviePosterComponent: React.FC<CardProps> = ({data, linkTo}) => {
    return linkTo ? (
        <Link to={linkTo}>
        <Card 
            header={
                <CardHeader
                    titleText={data.title}
                    />
                }
            className="movie-card"
            
        >
            <img src={data.poster} alt={data.title} className="movie-card-poster" />
        </Card>
        </Link>
    ) : (
        <Card 
            header={
                <CardHeader
                    titleText={data.title}
                    />
                }
            className="movie-card"
            
        >
            <img src={data.poster} alt={data.title} className="movie-card-poster" />
        </Card>
    )
}

export default MoviePosterComponent