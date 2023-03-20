module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("Orders", {
        OrderId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        PurchaseDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        TotalAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    }, {
        createdAt: 'TimeStamp',
        updatedAt: false,
    });
    return Orders;
};
