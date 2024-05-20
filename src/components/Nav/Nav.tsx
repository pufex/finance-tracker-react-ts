import "./Nav.css"

import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

import Profile from "../Profile/Profile"

const Nav = () => {

    const user = {
        name: "Jakub",
        surname: "Abram",
        email: "j.abram1@wp.pl",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/European_shorthair_cat.png/1200px-European_shorthair_cat.png"
    }

    const {name, surname, email, picture} = user

    return <>
        <nav className="nav">
            <div className="nav__inner">
                <Link
                    to="/dashboard"
                    className="nav__link"
                >
                    Dashboard
                </Link>
                {
                    // TODO: 
                    !null
                    // only visible if user is logged in 
                        && <Profile
                            name={name}
                            surname={surname}
                            email={email}
                            picture={picture}
                        />
                }
            </div>
        </nav>
        <Outlet />
    </>
}

export default Nav
