import { ShellBar, Input, Icon } from "@ui5/webcomponents-react"
import { useNavigate } from "react-router-dom"

const NavbarComponent =()=>{

    return (
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
    )
}

export default NavbarComponent