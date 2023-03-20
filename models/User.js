module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MobileNumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: 'TimeStamp',
    updatedAt: false,
  });
  return User;
};
