import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dynamic_plugin extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "dynamic_plugin_name_key"
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "dynamic_plugin_key_key"
    },
    bundle_url: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    created_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    changed_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dynamic_plugin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dynamic_plugin_key_key",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "dynamic_plugin_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "dynamic_plugin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
