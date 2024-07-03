import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class logs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.STRING(512),
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
    json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration_ms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    referrer: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_logs_user_id_dttm",
        fields: [
          { name: "user_id" },
          { name: "dttm" },
        ]
      },
      {
        name: "logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
