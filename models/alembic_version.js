import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class alembic_version extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    version_num: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'alembic_version',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "alembic_version_pkc",
        unique: true,
        fields: [
          { name: "version_num" },
        ]
      },
    ]
  });
  }
}
