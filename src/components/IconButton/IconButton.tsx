import type { IconType } from "react-icons"

import { useIcons } from "../../contexts/Icons"

import { cn } from "../../utils/cn"

import "./IconButton.css"

type IconsButtonProps = {
    loading?: boolean,
    disabled?: boolean,
    role?: "button" | "submit" | "reset",
    Icon: IconType,
    onClick?: () => void,
    className?: string,
    color?: string,
}

const IconButton = ({
    role,
    loading,
    disabled,
    Icon,
    onClick,
    className,
    color
}: IconsButtonProps) => {

    const {AiOutlineLoading3Quarters} = useIcons()

    return <button
        className={cn(
            "icon-button__button",
            className ?? "",
        )}
        disabled={disabled}
        onClick={onClick}
        type={role}
    >
        {
            loading 
                ? <AiOutlineLoading3Quarters
                    className="icon-button__loading"
                    size={25}
                /> 
                : <Icon
                    className="icon-button__icon"
                    size={30}
                    color={color}
                />
        }
    </button>
}

export default IconButton
