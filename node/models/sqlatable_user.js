import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sqlatable_user extends Model {
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
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tables',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'sqlatable_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sqlatable_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
