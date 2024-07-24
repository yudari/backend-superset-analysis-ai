import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dbs extends Model {
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
    database_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "dbs_database_name_key"
    },
    sqlalchemy_uri: {
      type: DataTypes.STRING(1024),
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
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    cache_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    select_as_create_table_as: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allow_ctas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    expose_in_sqllab: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    force_ctas_schema: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    allow_run_async: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allow_dml: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verbose_name: {
      type: DataTypes.STRING(250),
      allowNull: true,
      unique: "dbs_verbose_name_key"
    },
    impersonate_user: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allow_file_upload: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    encrypted_extra: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    server_cert: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    allow_cvas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_dbs_uuid"
    },
    configuration_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "sqlalchemy_form"
    },
    is_managed_externally: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    external_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dbs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dbs_database_name_key",
        unique: true,
        fields: [
          { name: "database_name" },
        ]
      },
      {
        name: "dbs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "dbs_verbose_name_key",
        unique: true,
        fields: [
          { name: "verbose_name" },
        ]
      },
      {
        name: "uq_dbs_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
