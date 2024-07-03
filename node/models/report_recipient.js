import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class report_recipient extends Model {
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
      allowNull: false
    },
    recipient_config_json: {
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
    }
  }, {
    sequelize,
    tableName: 'report_recipient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_report_recipient_report_schedule_id",
        fields: [
          { name: "report_schedule_id" },
        ]
      },
      {
        name: "report_recipient_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
