import type {FormEvent} from "react"

import { useState } from "react"

import { useInput } from "../hooks/useInput/hooks/useInput/useInput"

import Button from "../components/Button/Button"
import Input from "../components/Input/Input"

import "./styles.css"

const Register = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    setLoading; error;

    const [email, handleEmailChange, setEmailError] = useInput({})
    const [password, handlePasswordChange, setPasswordError] = useInput({})
    const [confirmPassword, handleConfirmPasswordChange, setConfirmPasswordError] = useInput({})

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        setEmailError()
        setPasswordError()
        setConfirmPasswordError()
    }

    return <form
        className="auth__form"
        onSubmit={handleLogin}
    >
        <Input
            onChange={handleEmailChange}
            value={email.value}
            isError={email.isError}
            errorMessage={email.errorMessage}
        >
            Email
        </Input>
        <Input
            onChange={handlePasswordChange}
            value={password.value}
            isError={password.isError}
            errorMessage={password.errorMessage}
            isPassword={true}
        >
            Password
        </Input>
        <Input
            onChange={handleConfirmPasswordChange}
            value={confirmPassword.value}
            isError={confirmPassword.isError}
            errorMessage={confirmPassword.errorMessage}
            isPassword={true}
        >
            Confirm Password
        </Input>
        <Button
            type="primary"
            role="submit"
            loading={loading}
            disabled={loading}
            className={"auth__submit"}
        >
            Login
        </Button>
    </form>
}

export default Register
