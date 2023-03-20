module.exports = (sequelize, DataTypes) => {
    const OrderStatus = sequelize.define("OrderStatus", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Status: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        createdAt: false,
        updatedAt: false,
    });
    return OrderStatus;
};
