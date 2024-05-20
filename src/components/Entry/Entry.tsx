// import { useState } from "react"

import Button from "../Button/Button"

import { cn } from "../../utils/cn"

import "./Entry.css"


type EntryProps = {
    id: string,
    description: string,
    amount: number,
    category: string,
    paymentMethod: string,
    date: string,
    index: number,
}


const Entry = ({
    id,
    description,
    amount,
    category,
    paymentMethod,
    date,
    index,
}: EntryProps) => {

    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState("")

    const handleDelete = () => {
        id
    }

    return <>
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            {description}
        </div>   
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            {amount}
        </div>   
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            {category}
        </div>   
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            {paymentMethod}
        </div>   
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            {date}
        </div>   
        <div className={cn(
            "entry__cell",
            index%2 == 1 ? "uneven" : ""
        )}>
            <Button
                type="primary"
                onClick={handleDelete}
            >
                Delete
            </Button>
        </div>   
    </>
}

export default Entry
