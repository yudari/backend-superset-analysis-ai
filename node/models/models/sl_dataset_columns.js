import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_dataset_columns extends Model {
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
    tableName: 'sl_dataset_columns',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_dataset_columns_pkey",
        unique: true,
        fields: [
          { name: "dataset_id" },
          { name: "column_id" },
        ]
      },
    ]
  });
  }
}
