import Entry from "../../components/Entry/Entry";

import AddRecord from "./components/AddRecord/AddRecord";

import "./Dashboard.css"

const user = {
    name: "Jakub",
    surname: "Abram",
    email: "j.abram1@wp.pl",
    picture: "Jakub",
}

const Dashboard = () => {

    const {name} = user;

    const entries = [{
        id: "0",
        description: "Haircut",
        amount: -50,
        category: "Entertainment",
        paymentMethod: "Credit Card",
        date: "2024-04-20T22:43:29.195S",
    }]

    return <main className="dashboard__main">
        <header className="dashboard__header">
            <h1 className="dashboard__heading">
                Hello, {name}!
            </h1>
        </header>
        <section className="dashboard__add-record">
            <AddRecord />
        </section>
        <section className="dashboard__entries">

            {/* 1. ROW */}

            <div className="dashboard__table__header">
                Description
            </div>
            <div className="dashboard__table__header">
                Amount
            </div>
            <div className="dashboard__table__header">
                Category
            </div>
            <div className="dashboard__table__header">
                Payment Method
            </div>
            <div className="dashboard__table__header">
                Date
            </div>
            <div className="dashboard__table__header">
                Delete
            </div>

            {/* 2+ Rows */}

            {
                !entries.length
                    ? null
                    : entries.map(({
                        id,
                        description,
                        amount,
                        category,
                        paymentMethod,
                        date,
                    }, index) => {
                        return <Entry
                            id={id}
                            description={description}
                            amount={amount}
                            paymentMethod={paymentMethod}
                            date={date}
                            category={category}
                            index={index}
                        />
                    })
            }
        </section>
    </main>
}

export default Dashboard
