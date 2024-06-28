import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_permission extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "ab_permission_name_key"
    }
  }, {
    sequelize,
    tableName: 'ab_permission',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_permission_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ab_permission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
