import { DataTypes } from "sequelize";



//importojme funkksionin sequelize nga ./config
import sequelize from '../../config/connectDB.js'




export const Comment = sequelize.define("comments",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   text:{
        type:DataTypes.TEXT,
      allowNull:false,
    },
   // status:{
       // type:DataTypes.ENUM,
       // values:["onhold","removed","published"],
        //defaultValue:"published"
   //}

    //mungojne UserId dhe postId por do ti krijojme ato duke perdorur associations
     }
    )
