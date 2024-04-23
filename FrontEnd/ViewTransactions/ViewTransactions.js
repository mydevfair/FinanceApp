import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context/GlobalContext';
import { InnerLayout } from '../../Styles/Layout';
import IncomeItem from '../IncomeItem/IncomeItem';


function ViewTransactions() {
  const { incomes, getIncomes, deleteIncome, totalBalance, expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()


  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <ViewTransactionsStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="balance">
          <h2>Total Balance</h2>
          <p>
            {"£"} {totalBalance()}
          </p>
        </div>
        <div className="income-content">
          <div className="incomes">
            <h3>Incomes</h3>
            {incomes.map((income) => {
              const {_id, title, amount, date, category, description, type} = income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            })}
          </div>
          <div className="expenses">
            <h3>Expenses</h3>
            {expenses.map((expense) => {
              const {_id, title, amount, date, category, description, type} = expense;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-red)"
                deleteItem={deleteExpense}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </ViewTransactionsStyled>
  )
}

const ViewTransactionsStyled = styled.div`
  display: flex;
  overflow: auto;

  .income-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .incomes,
  .expenses {
    /* Set these to a fixed width to ensure they don't overflow */
    width: 50%;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;

    h3 {
      margin-bottom: 1rem;
    }
  }

  .balance {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    text-align: center;
    width: 100%;

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }

    p {
      font-size: 3.5rem;
      font-weight: 700;
    }
  }

  /* Reduce the gap between income and expense sections */
  .incomes {
    margin-right: 0.7rem;
  }

  .expenses {
    margin-left: 0.7rem;
  }
`;

export default ViewTransactions
