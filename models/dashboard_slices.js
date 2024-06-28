import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dashboard_slices extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dashboards',
        key: 'id'
      },
      unique: "uq_dashboard_slice"
    },
    slice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'slices',
        key: 'id'
      },
      unique: "uq_dashboard_slice"
    }
  }, {
    sequelize,
    tableName: 'dashboard_slices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dashboard_slices_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_dashboard_slice",
        unique: true,
        fields: [
          { name: "dashboard_id" },
          { name: "slice_id" },
        ]
      },
    ]
  });
  }
}
