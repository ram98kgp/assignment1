module.exports = (sequelize, DataTypes) => {
    const Patients_ram = sequelize.define( "Patients_ram" , {
        name: {
            type:   DataTypes.STRING,
            allowNull:  false
        },
        age:{
            type:   DataTypes.INTEGER
        },
        gender: {
            type:   DataTypes.STRING
        },
        walletAmount: {
            type:   DataTypes.INTEGER
        }

    });
    return Patients_ram;
};