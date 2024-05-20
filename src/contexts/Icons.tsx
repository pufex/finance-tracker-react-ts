import type { ChildrenType } from "../types"
import type { IconType } from "react-icons"

import { useContext, createContext } from "react"

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { SiClerk } from "react-icons/si";
import { IoMdLock } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export type IconsContextType = {
    AiOutlineLoading3Quarters: IconType,
    FaCog: IconType,
    PiSignOutBold: IconType,
    SiClerk: IconType,
    IoMdLock: IconType,
    IoMdUnlock: IconType,
    BsGraphUpArrow: IconType,
    FaFacebook: IconType,
    FaGithub: IconType,
    FcGoogle: IconType,
    FaTwitch: IconType,
    IoMdArrowDropdown: IconType,
}

const IconsContext = createContext<IconsContextType | null>(null)

export const useIcons = () => {
    const icons = useContext(IconsContext)
    if(!icons) throw new Error("useIcons cannot be used outside its provider")
    else return icons
}

type IconsProviderProps = {
    children: ChildrenType,
}

const IconsProvider = ({
    children
}: IconsProviderProps) => {

    const value: IconsContextType = {
        AiOutlineLoading3Quarters,
        FaCog,
        PiSignOutBold,
        SiClerk,
        IoMdLock,
        IoMdUnlock,
        BsGraphUpArrow,
        FaFacebook,
        FaGithub,
        FcGoogle,
        FaTwitch,
        IoMdArrowDropdown,
    }

    return <IconsContext.Provider value={value}>
        {
            children instanceof Function
                ? children()
                : children
        }
    </IconsContext.Provider>
}

export default IconsProvider
