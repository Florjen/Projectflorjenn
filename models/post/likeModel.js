import { DataTypes } from "sequelize";



//importojme funkksionin sequelize nga ./config
import sequelize from '../../config/connectDB.js'




export const Like = sequelize.define("likes",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    state:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
    //mungojne UserId dhe postId por do ti krijojme ato duke perdorur associations

     }
    )