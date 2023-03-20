module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        createdAt: 'TimeStamp',
        updatedAt: 'TimeStamp',
    });
    return Cart;
};
