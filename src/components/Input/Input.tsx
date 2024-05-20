import type { ChangeEvent } from "react"

import { useState } from "react"
import { useIcons } from "../../contexts/Icons"

import {cn} from "../../utils/cn"

import "./Input.css"

type InputProps = {
    className?: string,
    children: string | (() => string)
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    isError?: boolean,
    errorMessage: string,
    isPassword?: boolean,
}

const Input = ({
    children,
    value,
    onChange,
    isError,
    errorMessage = "Invalid value",
    isPassword,
    className
}: InputProps) => {

    const {IoMdUnlock, IoMdLock} = useIcons();

    const [visible, setVisible] = useState(false);
    const switchVisibility = () => setVisible(p => !p)

    return <div 
        className={cn(
            "input__container",
            className ?? ""
        )}
    >
        <div className="input__labels">
            <label className="input__label">
                {
                    children instanceof Function 
                        ? children()
                        : children
                }
            </label>
            {
                isError
                    && <label className="input__label input__label-error">
                        {errorMessage}
                    </label>
            }
        </div>
        <div className="input__itself">
            <input 
                type={
                    typeof isPassword == "undefined"
                        ? "text"
                        : visible
                            ?  "text"
                            : "password"
                            
                }
                className="input__input"
                onChange={onChange}
                value={value}
            />
            {
                typeof isPassword != "undefined"
                    && <button
                        onClick={switchVisibility}
                        className="input__lock-container"
                        tabIndex={-1}
                    >
                        {
                            visible
                                ? <IoMdUnlock
                                    size={30}
                                    className="input__lock"
                                />
                                : <IoMdLock
                                    size={30}
                                    className="input__lock"
                                />
                        }
                    </button>
            }
        </div>
    </div>
}

export default Input
