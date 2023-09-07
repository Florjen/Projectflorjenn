//importojme DataTypes nga moduli sequelize
import { DataTypes,INTEGER } from "sequelize";



//importojme funkksionin sequelize nga ./config
import sequelize from '../../config/connectDB.js'




export const Category = sequelize.define("category",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    catName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    catDescription:{
        type:DataTypes.TEXT
        
    },
    catImage:{
        type:DataTypes.STRING,
        
    },
   bgColor:{
     type:DataTypes.STRING,
    
  }
},{
    freezeTableName:true
})