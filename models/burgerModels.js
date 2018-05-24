module.exports = function(sequelize, DataTypes) {
    let BurgerModel = sequelize.define("BurgerModel", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return BurgerModel
};