import { FlexBox, Title } from "@ui5/webcomponents-react"
import { useEffect, useState } from "react"
import { IMovieRequest } from "../../interfaces/Movie"
import MoviePosterComponent from "../../utils/Poster"
import homeFunctions from "./functions"



const HomeComponent = () => {

    const [moviesList, setMoviesList] = useState<IMovieRequest>(Object)

    useEffect(() => {
        homeFunctions.fetchMovies().then(response => setMoviesList(response))
    },[])

    return (<>
        
        <div className="home-page-title-container">
            <Title> Suggested Movie List</Title>
        </div>

        <FlexBox
            alignItems="Center"
            justifyContent="Center"
            wrap="Wrap"
        >

                {
                    moviesList.data?.map((movie, index) => {
                        return <MoviePosterComponent 
                                    data={movie}
                                    key={index}
                                    linkTo={`${movie.type}/${movie.id}/details`}
                                    withHeader />
                    })
                }
        </FlexBox>

  </>)
}

export default HomeComponent