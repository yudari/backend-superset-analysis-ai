import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class slice_user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    slice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'slices',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'slice_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "slice_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
