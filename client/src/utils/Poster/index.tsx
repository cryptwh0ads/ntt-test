import { Card, CardHeader } from "@ui5/webcomponents-react"
import { Link, redirect } from "react-router-dom"
import { IMovie } from "../../interfaces/Movie"

interface CardProps {
    data: IMovie | undefined
    linkTo ?: string
    withHeader ?: boolean
}


const MoviePosterComponent: React.FC<CardProps> = ({data, linkTo, withHeader}) => {
    return linkTo ? (
        <Link to={linkTo}>
        <Card 
            header={
                withHeader ?
                <CardHeader
                    titleText={data?.title}
                    />
                    : null
                }
            className="movie-card"
            
        >
            <img src={data?.poster} alt={data?.title} className="movie-card-poster" />
        </Card>
        </Link>
    ) : (
        <Card 
            header={
                withHeader ?
                <CardHeader
                    titleText={data?.title}
                    />
                    : null
                }
            className="movie-card"
            
        >
            <img src={data?.poster} alt={data?.title} className="movie-card-poster" />
        </Card>
    )
}

export default MoviePosterComponent