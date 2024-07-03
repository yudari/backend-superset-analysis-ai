import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_permission_view extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_permission',
        key: 'id'
      },
      unique: "ab_permission_view_permission_id_view_menu_id_key"
    },
    view_menu_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_view_menu',
        key: 'id'
      },
      unique: "ab_permission_view_permission_id_view_menu_id_key"
    }
  }, {
    sequelize,
    tableName: 'ab_permission_view',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_permission_view_permission_id_view_menu_id_key",
        unique: true,
        fields: [
          { name: "permission_id" },
          { name: "view_menu_id" },
        ]
      },
      {
        name: "ab_permission_view_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
