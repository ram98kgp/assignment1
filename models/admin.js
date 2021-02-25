module.exports = (sequelize, DataTypes) => {
    const Admin_ram = sequelize.define( "Admin_ram" , {
        name: {
            type:   DataTypes.STRING,
            allowNull:  false
        },
        email:{
            type:   DataTypes.STRING,
            allowNull:  false
        },
        password: {
            type:   DataTypes.STRING,
            allowNull:  false
        }

    });
    return Admin_ram;
};