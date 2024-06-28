import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "ab_role_name_key"
    }
  }, {
    sequelize,
    tableName: 'ab_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_role_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ab_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
