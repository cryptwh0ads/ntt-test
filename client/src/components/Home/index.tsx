import { FlexBox, Icon, Input, Title } from "@ui5/webcomponents-react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getRandomMoviesList } from "../../store/actionCreators/get-random-movies"
import { searchMoviesByTitle } from "../../store/actionCreators/search-movies"
import { useTypedSelector } from "../../useTypeSelector"
import MoviePosterComponent from "../../utils/Poster"



const HomeComponent = () => {

    const dispatch = useDispatch()
    const { movies, loading, error } = useTypedSelector((state) => state.movie);
    const [searchValue, setSearchValue] = useState<string | undefined>('')

    useEffect(() => {
        // @ts-ignore
        dispatch(getRandomMoviesList())
    }, [])

    return (<>
        
        <div className="home-page-title-container">
            <Input 
                    icon={
                        <Icon interactive name="search"/>
                    } 
                    showClearIcon
                    onBlur={() => {
                        //@ts-ignore
                        dispatch(searchMoviesByTitle(searchValue))
                        
                    }} 
                    defaultValue={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
        </div>

        <FlexBox
            alignItems="Center"
            justifyContent="Center"
            wrap="Wrap"
        >

                {
                    movies && movies.map((movie, index) => {
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