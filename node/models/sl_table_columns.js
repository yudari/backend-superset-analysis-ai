import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_table_columns extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sl_tables',
        key: 'id'
      }
    },
    column_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sl_columns',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sl_table_columns',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_table_columns_pkey",
        unique: true,
        fields: [
          { name: "table_id" },
          { name: "column_id" },
        ]
      },
    ]
  });
  }
}
