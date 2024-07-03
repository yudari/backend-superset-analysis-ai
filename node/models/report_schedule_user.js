import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class report_schedule_user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    report_schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'report_schedule',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'report_schedule_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "report_schedule_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
