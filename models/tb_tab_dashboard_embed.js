import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_tab_dashboard_embed extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id_tab_dashboard_chart: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'dashboard_slices',
          key: 'id'
        }
      },
      id_tab_dashboard: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_tab_embed',
          key: 'id_tab_dashboard'
        }
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
      ]
    });
  }
}
