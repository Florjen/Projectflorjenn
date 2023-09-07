//importojme catSchema nga /models/index.js

import {Category} from '../../models/index.js'


export const newCategory = async (req,res) => {
try {
  const imgPath = req.file.destination.replace("./public","")
  const catimageString = imgPath + req.file.filename
  const category = {
  catName:req.body.catName,
  catDescription:req.body.catDescription,
  catImage:catimageString 
}
const newCat = await Category.create(category)
return res.status(201).send("Kategoria u krijua me sukses")
} catch ( err) {
  console.log(err)
  return res.status(500).send(err)
}
 }