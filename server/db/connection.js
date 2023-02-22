const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.DATABASE_URL)
  .then(db => {
    console.log('DB connected');
    return db;
  }).catch(err => {
   console.log('Error connection')
  });


  module.exports = connection