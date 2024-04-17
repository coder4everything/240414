const Sequelize = require('sequelize');

class Address extends Sequelize.Model{
  static initiate(sequelize){
    Address.init({
      idx: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: '인덱스'
      },
      sido: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      sigungu: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      etc: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      latitude: {
        type: Sequelize.DECIMAL(18, 15),
        allowNull: true
      },
      longitude: {
        type: Sequelize.DECIMAL(18, 15),
        allowNull: true
      }
    }, {
      sequelize,
      timestamps:false,
      underscored:false,
      modelName:'Address',
      tableName:'t_address',
      paranoid:false,
      charset:'utf8mb4',
      collate:'utf8mb4_0900_ai_ci'
    });
}

static associate(db) {}

}

module.exports = Address