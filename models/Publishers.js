module.exports = (sequelize, DataTypes) => {
    const Publishers = sequelize.define("Publishers", {
        PublisherId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        createdAt: false,
        updatedAt: false,
    });
    return Publishers;
};
