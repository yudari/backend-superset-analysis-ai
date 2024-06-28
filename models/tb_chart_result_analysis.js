import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_chart_result_analysis extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id_tab_dashboard_chart: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'tb_tab_dashboard_embed',
          key: 'id_tab_dashboard_chart'
        }
      },
      id_chart: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      result_analysis_chart: {
        type: DataTypes.STRING,
        allowNull: true
      },
      path_image_analysis: {
        type: DataTypes.STRING,
        allowNull: true
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
            { name: "id_tab_dashboard_chart" },
          ]
        },
      ]
    });
  }
}
