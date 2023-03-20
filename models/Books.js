module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("Books", {
        BookId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ISBN: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NoOfPages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DateOfPublish: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    }, {
        createdAt: 'TimeStamp',
        updatedAt: false,
    });
    return Books;
};
