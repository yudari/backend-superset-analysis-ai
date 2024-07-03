import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dashboard_user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
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
    tableName: 'dashboard_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dashboard_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
