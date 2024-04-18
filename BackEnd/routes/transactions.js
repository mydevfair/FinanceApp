const { addIncome, getIncome, deleteIncome } = require('../controllers/Income.js');
const {addExpense, getExpense, deleteExpense} = require('../controllers/expenses.js');
const router = require('express').Router();

router.post('/add-income', addIncome)
router.get('/get-income', getIncome)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense)
router.get('/get-expense', getExpense)
router.delete('/delete-expense/:id', deleteExpense)
module.exports = router