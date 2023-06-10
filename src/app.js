import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'school fee',
        amount: 250,
        date: new Date(2023, 3, 20)
    },
    {
        id: 'e2',
        title: 'Books',
        amount: 230,
        date: new Date(2023, 3, 21)
    },
    {
        id: 'e3',
        title: 'House rent',
        amount: 700,
        date: new Date(2023, 4, 20)
    },
    {
        id: 'e4',
        title: 'Food',
        amount: 500,
        date: new Date(2023, 3, 225)
    }
];

const App = () =>{

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    
    const addExpenseHandler = (expense) => {
        // console.log(expense);
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}
export default App;