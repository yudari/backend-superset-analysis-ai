import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class keyvalue extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'keyvalue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "keyvalue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
