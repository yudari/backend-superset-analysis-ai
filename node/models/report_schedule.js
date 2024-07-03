import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class report_schedule extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "uq_report_schedule_name_type"
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "uq_report_schedule_name_type"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    context_markdown: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    crontab: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'slices',
        key: 'id'
      }
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dashboards',
        key: 'id'
      }
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    last_eval_dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    last_value_row_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    validator_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    validator_config_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    log_retention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grace_period: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changed_on: {
      type: DataTypes.DATE,
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
    },
    working_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    report_format: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "PNG"
    },
    creation_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "alerts_reports"
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "UTC"
    },
    extra_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    force_screenshot: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    custom_width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    custom_height: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report_schedule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_creation_method",
        fields: [
          { name: "creation_method" },
        ]
      },
      {
        name: "ix_report_schedule_active",
        fields: [
          { name: "active" },
        ]
      },
      {
        name: "report_schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_report_schedule_name_type",
        unique: true,
        fields: [
          { name: "name" },
          { name: "type" },
        ]
      },
    ]
  });
  }
}
