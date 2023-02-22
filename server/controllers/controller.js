const model = require('../models/model');

module.exports = {
  createCategories,
  getCategories,
  createTransaction
}

//  POST: http://localhost:8000/api/categories
async function createCategories(req, res) {
  const Create = new model.Categories({
    type: "Investment",
    color: "#FCBE44"
  })

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res.status(400).json({ message: `Error while creating categories ${err}` });
  });
}

//  GET: http://localhost:8000/api/categories
async function getCategories(req, res) {
  let data = await model.Categories.find({})

  let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color }));
  return res.json(filter);
}

//  POST: http://localhost:8000/api/transaction
async function createTransaction(req, res) {
  if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
  let { name, type, amount } = req.body;

  const create = await new model.Transaction(
    {
      name,
      type,
      amount,
      date: new Date()
    }
  );
  create.save(function (err) {
    if (!err) return res.json(create);
    return res.status(400).json({ message: `Error while creating transaction ${err}` });
  });

}