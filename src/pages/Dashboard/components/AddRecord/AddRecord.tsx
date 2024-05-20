import type { FormEvent } from "react"
import type { InputTextStateType } from "../../../../hooks/useInput/types"

import { useState } from "react"
import { useInput } from "../../../../hooks/useInput/hooks/useInput/useInput"

import Input from "../../../../components/Input/Input"
import Button from "../../../../components/Button/Button"
import Dropdown from "../../../../components/Dropdown/Dropdown"

import { paymethods, categories } from "../../../../objects"

import "./AddRecord.css"

export type Categories = "Entertainment"

const AddRecord = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    error;
    setLoading;


    const [description, handleDescriptionChange, setDescriptionError] = useInput({})
    const [amount, handleAmountChange, setAmountError] = useInput({})

    setAmountError;

    const [category, setCategory] = useState<InputTextStateType>({
        value: "unset",
        isError: false,
        errorMessage: "",
    }) 

    const handleCategoryChange = (value: string) => {
        setCategory({...category,
            value
        });
    }

    const [payment, setPayment] = useState<InputTextStateType>({
        value: "unset",
        isError: false,
        errorMessage: "",
    }) 

    const handlePaymentChange = (value: string) => {
        setPayment({...payment,
            value
        });
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        setDescriptionError()
    }
    
    return <form
        className='add-record__form'
        onSubmit={handleSubmit}
    >
        <Input
            value={description.value}
            isError={description.isError}
            errorMessage={description.errorMessage}
            onChange={handleDescriptionChange}
        >
            Description:
        </Input>
        <Input
            value={amount.value}
            isError={amount.isError}
            errorMessage={amount.errorMessage}
            onChange={handleAmountChange}
        >
            Amount:
        </Input>
        <Dropdown
            items={categories}
            placeholder="Choose a category"
            onChoice={handleCategoryChange}
            value={category.value}
            >
            Category
        </Dropdown>
        <Dropdown
            items={paymethods}
            placeholder="Select a Payment Method"
            onChoice={handlePaymentChange}
            value={payment.value}
        >
            Payment Method
        </Dropdown>
        <Button
            type="primary"
            role="submit"
            loading={loading}
            disabled={loading}
            className="add-record__submit"
        >
            Add Record
        </Button>
    </form>
}

export default AddRecord
