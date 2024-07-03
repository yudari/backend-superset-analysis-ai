import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cache_keys extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cache_key: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    cache_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datasource_uid: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cache_keys',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cache_keys_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ix_cache_keys_datasource_uid",
        fields: [
          { name: "datasource_uid" },
        ]
      },
    ]
  });
  }
}
