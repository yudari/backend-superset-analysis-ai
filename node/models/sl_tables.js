import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_tables extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "sl_tables_uuid_key"
    },
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
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    is_managed_externally: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    catalog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schema: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    external_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_json: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'sl_tables',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_tables_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sl_tables_uuid_key",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
