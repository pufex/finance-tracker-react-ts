import type { ReactNode } from "react"

import { cn } from "../../utils/cn"

import "./Window.css"

type WindowProps = {
    children: ReactNode | (() => ReactNode),
    maxwidth: string,
    left?: string,
    top?: string,
    right?: string,
    bottom?: string,
    active?: boolean,
}

const Window = ({
    children,
    maxwidth,
    active,
    top,
    left,
    right,
    bottom,
}: WindowProps) => {
    return <div 
        className={cn(
            "window__window",
            active ? "active" : "",
        )}
        style={{
            maxWidth: maxwidth,
            top: top ?? "unset",
            left: left ?? "unset",
            bottom: bottom ?? "unset",
            right: right ?? "unset",
        }}
    >
        {
            children instanceof Function
                ? children()
                : children
        }
    </div>
}

export default Window
