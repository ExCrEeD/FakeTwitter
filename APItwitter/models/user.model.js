module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      //agregar password
      password: {
        type: Sequelize.STRING,
      },
      creation_date: Sequelize.DATE,
    },
    {
      tableName: "users",
    }
  );
  return User;
};
