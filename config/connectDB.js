import {Sequelize} from "sequelize"

import dotenv from "dotenv"
dotenv.config()


//Krijojme funksionin qe na mundeson lidhjen me databasen 
const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASS,
{
    host:"localhost",
    dialect:"mysql"

})

//eksportojme funksionin sequelize per ta importuar ne index root file dhe ne cdo skemma qe do te krijojme
export default sequelize 