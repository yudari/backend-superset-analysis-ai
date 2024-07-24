import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_tab_embed_result_analysis extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tb_tab_embed_result_analysis: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id_tb_tab_dashboard_result_analysis: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'tb_tab_dashboard_result_analysis',
        key: 'id_tb_tab_dashboard_result_analysis'
      }
    },
    id_tab_dashboard: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'tb_tab_embed',
        key: 'id_tab_dashboard'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_tab_embed_result_analysis',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_tab_embed_result_analysis_pkey",
        unique: true,
        fields: [
          { name: "id_tb_tab_embed_result_analysis" },
        ]
      },
    ]
  });
  }
}
