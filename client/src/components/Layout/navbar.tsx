import { ShellBar, Input, Icon } from "@ui5/webcomponents-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import { searchMoviesByTitle } from "../../store/actionCreators/search-movies"

const NavbarComponent =()=>{

    return (
        <ShellBar
            primaryTitle="Movie Scraper"
        />
    )
}

export default NavbarComponent