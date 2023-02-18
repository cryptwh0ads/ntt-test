import { ShellBar, StandardListItem, Avatar, Input, Icon, FlexBox, Title, Card, Loader, CardHeader } from "@ui5/webcomponents-react"
import { useEffect, useState } from "react"
import { IMovie, IMovieRequest } from "../../interfaces/Movie"
import CardListComponent from "./CardList"
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
                    moviesList.data?.map((movie) => {
                        return <CardListComponent data={movie} />
                    })
                }
        </FlexBox>

  </>)
}

export default HomeComponent