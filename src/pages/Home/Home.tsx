import "./Home.css"

import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Login from "../../auth/Login"
import IconButton from "../../components/IconButton/IconButton"

import Finances from "../../assets/finanse.jpg"
import { useIcons } from "../../contexts/Icons"

const Home = () => {

    const navigate = useNavigate();

    const {FaFacebook, FaGithub, FcGoogle, FaTwitch} = useIcons();

    return <main className="home__main">
        <header className="home__header">
            <h1 className="home__heading">
                Your Own Personal Finance Tracker!
            </h1>
        </header>
        <section className="home__grid">
            <section className="home__form">
                <h1 className="home__form__title">
                    Log in!
                </h1>
                <div className="home__form__providers">
                    <IconButton 
                        Icon={FaFacebook}
                        color="#096ae8"
                    />   
                    <IconButton 
                        Icon={FaGithub}
                        color="#000000"
                    />   
                    <IconButton 
                        Icon={FcGoogle}
                        color="#096ae8"
                    />   
                    <IconButton 
                        Icon={FaTwitch}
                        color="#a909e8"
                    />   
                </div>
                <Login />
                <Button
                    type="primary"
                    onClick={() => navigate("/register")}
                    className="home__create-account"
                >
                    Create Account
                </Button>
                <div className="home__form__links">
                    <span className="home__form__link">
                        Forgot password? <Link to={"/reset-password"} className="home__form__link-actual">Reset it Now!</Link>
                    </span>
                </div>
            </section>
            <img 
                className="home__form__thumbnail"
                src={Finances} 
                alt="Picture showing finances"
            />
        </section>
    </main>
}

export default Home
