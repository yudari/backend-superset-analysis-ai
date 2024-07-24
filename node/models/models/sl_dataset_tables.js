import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_dataset_tables extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    dataset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sl_datasets',
        key: 'id'
      }
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sl_tables',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sl_dataset_tables',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_dataset_tables_pkey",
        unique: true,
        fields: [
          { name: "dataset_id" },
          { name: "table_id" },
        ]
      },
    ]
  });
  }
}
