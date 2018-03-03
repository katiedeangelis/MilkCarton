module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ageLastSeen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ageNow: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        race: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ethnicity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateEntered: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastSeen: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};

// "caseInfo": {
//     "lastName": "Deveau",
//     "ageLastSeen": "49 to years old",
//     "race": "White",
//     "ethnicity": "",
//     "sex": "Male",
//     "weight": "145.0 to 154.0",
//     "firstName": "David",
//     "dateEntered": "12/19/2013",
//     "lastSeen": "May 09, 2011 00:00",
//     "ageNow": "56 years old",
//     "nickname": "",
//     "middleName": "D.",
//     "status": "Missing",
//     "height": "66.0"