import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class embedded_dashboards extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allow_domain_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dashboards',
        key: 'id'
      }
    },
    changed_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'embedded_dashboards',
    schema: 'public',
    timestamps: false
  });
  }
}
