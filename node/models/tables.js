import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tables extends Model {
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
    table_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "_customer_location_uc"
    },
    main_dttm_col: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    default_endpoint: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbs',
        key: 'id'
      },
      unique: "_customer_location_uc"
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
    offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cache_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schema: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "_customer_location_uc"
    },
    sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    perm: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    filter_select_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fetch_values_predicate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_sqllab_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    template_params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schema_perm: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_tables_uuid"
    },
    is_managed_externally: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    external_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    normalize_columns: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    always_filter_main_dttm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tables',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "_customer_location_uc",
        unique: true,
        fields: [
          { name: "database_id" },
          { name: "schema" },
          { name: "table_name" },
        ]
      },
      {
        name: "tables_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_tables_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
