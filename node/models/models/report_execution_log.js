import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class report_execution_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scheduled_dttm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    value_row_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    report_schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'report_schedule',
        key: 'id'
      }
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'report_execution_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_report_execution_log_report_schedule_id",
        fields: [
          { name: "report_schedule_id" },
        ]
      },
      {
        name: "ix_report_execution_log_start_dttm",
        fields: [
          { name: "start_dttm" },
        ]
      },
      {
        name: "report_execution_log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
