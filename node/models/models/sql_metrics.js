import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sql_metrics extends Model {
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
    metric_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uq_sql_metrics_metric_name"
    },
    verbose_name: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    metric_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tables',
        key: 'id'
      },
      unique: "uq_sql_metrics_metric_name"
    },
    expression: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
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
    },
    d3format: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    warning_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_sql_metrics_uuid"
    },
    currency: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sql_metrics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sql_metrics_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_sql_metrics_metric_name",
        unique: true,
        fields: [
          { name: "metric_name" },
          { name: "table_id" },
        ]
      },
      {
        name: "uq_sql_metrics_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
