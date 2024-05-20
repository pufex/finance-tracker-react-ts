import type { IconType } from "react-icons"

import { cn } from "../../utils/cn"

import "./Button.css"
import { useIcons } from "../../contexts/Icons"

type ButtonProps = {
    children: string | (() => string),
    loading?: boolean,
    disabled?: boolean,
    onClick?: () => void,
    role?: "submit" | "button" | "reset",
    type: "primary",
    Icon?: IconType,
    className?: string,
}

const Button = ({
    children,
    loading,
    disabled,
    onClick,
    role,
    type,
    Icon,
    className
}: ButtonProps) => {

    const {AiOutlineLoading3Quarters} = useIcons()

    return <button
        type={role}
        className={cn(
            `button__wrapper button-${type}`,
            loading ? "loading" : "",
            className ?? "",
        )}
        disabled={disabled}
        onClick={onClick}
    >
        {
            Icon
                && <Icon 
                    className="button__icon"
                    size={25}
                />
        }
        <span className="button__content">
            {
                children instanceof Function
                    ? children()
                    : children
            }
        </span>
        {
            loading
                && <AiOutlineLoading3Quarters
                    className="button__loading"
                    size={35}
                />
        }
    </button>
}

export default Button
