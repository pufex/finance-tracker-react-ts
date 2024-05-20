import { useEffect, useRef, useState } from "react"
import { useIcons } from "../../contexts/Icons"

import { cn } from "../../utils/cn"

import "./Dropdown.css"

type DropdownProps = {
    children: string | (() => string),
    onChoice: (item: string) => void,
    value: string,
    placeholder: string,
    items: string[],
    className?: string,
}

const Dropdown = ({
    placeholder = "Choose an item",
    children,
    onChoice,
    value,
    items,
    className,
}: DropdownProps) => {
    
    const {IoMdArrowDropdown} = useIcons();

    const [display, setDisplay] = useState(true);
    const switchDisplay = () => setDisplay(p => !p)
    const dropdownId = useRef(`id-${crypto.randomUUID()}`)

    const handleWindowClick = (e: MouseEvent) => {
        console.log("click")
        const {target} = e;
        if(target instanceof Element)
        if(!target.closest(`#${dropdownId.current}`))
            setDisplay(false)
    }

    useEffect(() => {
        if(display)
            window.addEventListener("click", handleWindowClick)
        else window.removeEventListener("click", handleWindowClick)
        return () => window.removeEventListener("click", handleWindowClick)
    }, [display])

    return <div 
        className={cn(
            "dropdown__container",
            className ?? "",
        )}
        id={dropdownId.current}
    >
        <div className="dropdown__layout">
            <label className="dropdown__label">
                {
                    children instanceof Function 
                        ? children()
                        : children
                }
            </label>
            <button 
                className="dropdown__button"
                onClick={switchDisplay}
            >
                {
                    value != "unset"
                        ? value
                        : <span className="dropdown__placeholder">
                            {placeholder}
                        </span>
                }
                <IoMdArrowDropdown 
                    size={30}
                    className={cn(
                        "dropdown__arrow",
                        display ? "active" : ""
                    )}
                />
            </button>
        </div>
        {
            display 
                && <div className="dropdown__list-wrapper">
                    <ul className="dropdown__list">
                        {
                            items.length
                                && items.map((item) => {
                                    return <li
                                        className="dropdown__item"
                                        onClick={() => {
                                            onChoice(item)
                                            setDisplay(false)
                                        }}
                                    >
                                        {item}
                                    </li>
                                })
                        }
                    </ul>
                </div>
        }
    </div>
}

export default Dropdown
