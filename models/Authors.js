module.exports = (sequelize, DataTypes) => {
    const Authors = sequelize.define("Authors", {
        AuthorId: {
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
    return Authors;
};
