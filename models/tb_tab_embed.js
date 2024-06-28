import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tb_tab_embed extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tab_dashboard: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_tab_dashboard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author_tab_dashboard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_tab_dashboard: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_tab_embed',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tb_tab_embed",
        unique: true,
        fields: [
          { name: "id_tab_dashboard" },
        ]
      },
    ]
  });
  }
}
