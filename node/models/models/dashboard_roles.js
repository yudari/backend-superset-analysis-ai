import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dashboard_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ab_role',
        key: 'id'
      }
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dashboards',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dashboard_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dashboard_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
