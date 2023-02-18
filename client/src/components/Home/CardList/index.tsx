import React from 'react'
import { Card, CardHeader } from "@ui5/webcomponents-react";

import { IMovie } from "../../../interfaces/Movie";

interface CardProps {
    data: IMovie
}

const CardListComponent: React.FC<CardProps> = ({data}) => {
    return (
        <Card 
            header={
                <CardHeader
                    titleText={data.title}
                    />
                }
            className="movie-card"
            key={data.id}
        >
            <img src={data.poster} alt={data.title} className="movie-card-poster" />
        </Card>
    )
}

export default CardListComponent