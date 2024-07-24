import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tab_state extends Model {
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
    extra_json: {
      type: DataTypes.TEXT,
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
    label: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    schema: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    query_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latest_query_id: {
      type: DataTypes.STRING(11),
      allowNull: true,
      references: {
        model: 'query',
        key: 'client_id'
      }
    },
    autorun: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    template_params: {
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
    hide_left_bar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    saved_query_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'saved_query',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tab_state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tab_state_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tab_state_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
