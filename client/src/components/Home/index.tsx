import { ShellBar, Input, Icon, FlexBox, Title } from "@ui5/webcomponents-react"
import { useEffect, useState } from "react"
import { IMovieRequest } from "../../interfaces/Movie"
import MoviePosterComponent from "../../utils/Poster"
import { fetchMovies } from "./functions"



const HomeComponent = () => {

    const [moviesList, setMoviesList] = useState<IMovieRequest>(Object)

    useEffect(() => {
        fetchMovies().then(response => setMoviesList(response))
    },[])

    return (<>
        <ShellBar
            primaryTitle="Movie Scraper"
            searchField={
                <Input 
                    icon={
                        <Icon interactive name="search"/>
                    } 
                    showClearIcon 
                />
            }
        />
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
                        return <MoviePosterComponent data={movie} key={index} linkTo={`${movie.type}/${movie.id}/details`} />
                    })
                }
        </FlexBox>

  </>)
}

export default HomeComponent