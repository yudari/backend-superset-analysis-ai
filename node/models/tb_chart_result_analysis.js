import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_chart_result_analysis extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tab_chart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_chart_result_analysis',
        key: 'id_tab_chart'
      }
    },
    id_chart: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    result_analysis_chart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    path_image_analysis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_tb_chart_result_analysis: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tb_chart_result_analysis',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tb_chart_result_analysis",
        unique: true,
        fields: [
          { name: "id_tab_chart" },
        ]
      },
      {
        name: "tb_chart_result_analysis_pkey",
        unique: true,
        fields: [
          { name: "id_tb_chart_result_analysis" },
        ]
      },
    ]
  });
  }
}
