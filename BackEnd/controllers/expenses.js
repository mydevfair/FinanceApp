const ExpenseSchema = require('../models/expenseModel')

exports.addExpense = async (req, res) => {
    const {title, amount, catergory, description, date} = req.body

    const Expense = ExpenseSchema({
        title, amount, catergory, description, date, 
    })

    try{
        //validations
        if(!title || !amount || !catergory || !description || !date ){
            return res.status(400).json({msg: 'All fields are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({msg: 'Amount must be a positive number'})
        }
        await Expense.save()
        res.status(200).json({msg: 'Expense added successfully'})
    }catch(error){
        res.status(500).json({msg: 'Internal server error'})
    }

    console.log(Expense);
}

exports.getExpense = async (req, res) => {
    try{
        const income = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    }catch(error){
        res.status(500).json({msg: 'Internal server error'})
    }
}
exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({msg: 'Expense deleted successfully'})
        })
        .catch((error) => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }