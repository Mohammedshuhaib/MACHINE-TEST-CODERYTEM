const mongoose = require('mongoose')   // required mongoose

const Schema = mongoose.Schema

const contactSchema = new Schema(
  {
   
  },
  { collection: 'contactData' }
)

const model = mongoose.model('contactData', contactSchema)

module.exports = model