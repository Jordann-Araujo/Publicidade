let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://sxlssrmppajjsl:22c365b742141e58fddb9f2d820234ed316f049bd232be3a37004b99275ffad7@ec2-3-95-85-91.compute-1.amazonaws.com:5432/d9kd91pc1pio5a",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        },
        define: {
            freezeTableName: true
        }
    }
);

module.exports = db;