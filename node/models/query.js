import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class query extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "client_id"
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    tmp_table_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    tab_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sql_editor_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    schema: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    select_sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    executed_sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    select_as_cta: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    select_as_cta_used: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rows: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    results_key: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    start_running_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_result_backend_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tracking_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tmp_schema_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ctas_method: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    limiting_factor: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "UNKNOWN"
    }
  }, {
    sequelize,
    tableName: 'query',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_id",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "ix_query_results_key",
        fields: [
          { name: "results_key" },
        ]
      },
      {
        name: "query_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ti_user_id_changed_on",
        fields: [
          { name: "user_id" },
          { name: "changed_on" },
        ]
      },
    ]
  });
  }
}
