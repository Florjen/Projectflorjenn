import { DataTypes,INTEGER } from "sequelize";



//importojme funkksionin sequelize nga ./config
import sequelize from '../../config/connectDB.js'




export const Post = sequelize.define("posts",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT
        
    },
  image:{
        type:DataTypes.STRING,
        
    },
    likes:{
        type:DataTypes.INTEGER,
    },
    komente:{
        type:DataTypes.INTEGER,
    },
    views:{
        type:DataTypes.INTEGER
    }
  
},{
    freezeTableName:true
})