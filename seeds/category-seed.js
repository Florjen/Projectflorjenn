import {Category} from '../models/index.js'




const categoryData = [
    {
        catName:"Sport",
        catDescription:'Gjithcka rreth sportit',
        catImage:'/images/category/sport.jpg',
        bgColor: "#32a852"
    },

    {
        catName:"Shendet",
        catDescription:'Gjithcka rreth shendetit',
        catImage:'/images/category/shendeti.jpg',
        bgColor: "#2d362f"
    },

    {
        catName:"Politike",
        catDescription:'Lajmet e fundit te politikes',
        catImage:'/images/category/politike.jpg',
        bgColor: "#a4b0a7"
    },

]
const seedCategory = () => Category.bulkCreate(categoryData)

//nese perdorim export default nuk kemi cfare te nxjerrim nga objekti
export default seedCategory
