import { useIcons } from "../../contexts/Icons"

import { Link } from "react-router-dom"
import Register from "../../auth/Register"

import "./RegisterPage.css"


const RegisterPage = () => {

    const { BsGraphUpArrow } = useIcons();


    return <main className="register-page__main">
        <section className="register-page__card">
            <header className="register-page__header">
                <BsGraphUpArrow 
                    className="register-page__icon"
                    size={40}
                />
                <h1 className="register-page__heading">
                    Register!
                </h1>
            </header>
            <Register /> 
            <div className="register-page__links">
                <span className="register-page__link-wrapper">
                    Already registered? <Link className="register-page__link" to={"/"}>Log in!</Link>
                </span>
            </div>   
        </section>
    </main>
}

export default RegisterPage
