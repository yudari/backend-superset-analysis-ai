import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_dataset_users extends Model {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sl_dataset_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_dataset_users_pkey",
        unique: true,
        fields: [
          { name: "dataset_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
