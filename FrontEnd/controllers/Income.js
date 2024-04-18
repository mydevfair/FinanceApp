const incomeSchema = require('../models/incomeModel')

exports.addIncome = async (req, res) => {
    const {title, amount, catergory, description, date} = req.body

    const income = incomeSchema({
        title, 
        amount, 
        //catergory, 
        description, 
        date
    })

    try{
        validations
        if(!title || !catergory || !description || !date){
            return res.status(400).json({msg: 'All fields are required'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({msg: 'Amount must be a positive number'})
        }
        await income.save()
        res.status(200).json({msg: 'Income added successfully'})
    }catch(error){
        res.status(500).json({msg: 'Internal server error'})
    }

    console.log(income);
}

exports.getIncome = async (req, res) => {
    try{
        const income = await incomeSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    }catch(error){
        res.status(500).json({msg: 'Internal server error'})
    }
}
exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({msg: 'Income deleted successfully'})
        })
        .catch((error) => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }