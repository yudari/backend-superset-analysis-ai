import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_permission_view_role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_view_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_permission_view',
        key: 'id'
      },
      unique: "ab_permission_view_role_permission_view_id_role_id_key"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_role',
        key: 'id'
      },
      unique: "ab_permission_view_role_permission_view_id_role_id_key"
    }
  }, {
    sequelize,
    tableName: 'ab_permission_view_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_permission_view_role_permission_view_id_role_id_key",
        unique: true,
        fields: [
          { name: "permission_view_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "ab_permission_view_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
