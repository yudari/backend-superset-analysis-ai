import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_tab_dashboard_embed extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tab_dashboard_chart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dashboard_slices',
        key: 'id'
      }
    },
    id_tab_dashboard: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_tab_embed',
        key: 'id_tab_dashboard'
      }
    },
    id_tb_tab_dashboard_embed: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tb_tab_dashboard_embed',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tb_tab_dashboard_embed",
        unique: true,
        fields: [
          { name: "id_tab_dashboard_chart" },
        ]
      },
      {
        name: "tb_tab_dashboard_embed_pkey",
        unique: true,
        fields: [
          { name: "id_tb_tab_dashboard_embed" },
        ]
      },
    ]
  });
  }
}
