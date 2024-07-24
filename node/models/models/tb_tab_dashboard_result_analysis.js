import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_tab_dashboard_result_analysis extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    result_analysis_tab_chart: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path_image_analysis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_tb_tab_dashboard_result_analysis: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tb_tab_dashboard_result_analysis',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_tab_dashboard_result_analysis_pkey",
        unique: true,
        fields: [
          { name: "id_tb_tab_dashboard_result_analysis" },
        ]
      },
    ]
  });
  }
}
