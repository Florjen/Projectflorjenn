//importojme DATATYPES modulin sequelize
import {DataTypes, INTEGER } from 'sequelize'

//importojme funksionin sequelize nga /config/connectDB
import sequelize from '../../config/connectDB.js'


//Krijojme skemen e perdoruesit ose userit
// table name 
//atributet e perdoruesit 
//opsionet shtesee te tabeles ... ne kete rast te tabeles user vetem 

export const User = sequelize.define("user",{
    id:{
       type:DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false //nuk lejojme te ruhet asnje person pa asnje germe 0
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false //nuk lejojme te ruhet asnje person pa asnje germe 0
    },
   email:{
        type:DataTypes.STRING,
        allowNull:false, //nuk lejojme te ruhet asnje person pa asnje germe 0
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false //nuk lejojme te ruhet asnje person pa asnje germe 0
    },
    role:{
        type:DataTypes.ENUM,
        values:['admin','user','moderator'],
        defaultValue:'user'
    }
},{
    //freezeTableName:true,
    indexes:[{fields:['email']}]
})