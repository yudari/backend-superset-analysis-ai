import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class saved_query extends Model {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    db_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    label: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    schema: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    changed_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    created_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    extra_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rows: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_saved_query_uuid"
    },
    template_parameters: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'saved_query',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "saved_query_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_saved_query_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
