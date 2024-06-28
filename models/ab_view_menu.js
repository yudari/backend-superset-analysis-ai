import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_view_menu extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "ab_view_menu_name_key"
    }
  }, {
    sequelize,
    tableName: 'ab_view_menu',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_view_menu_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "ab_view_menu_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
