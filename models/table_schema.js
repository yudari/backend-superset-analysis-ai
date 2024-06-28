import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class table_schema extends Model {
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
    tab_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tab_state',
        key: 'id'
      }
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    schema: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    table: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expanded: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'table_schema',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_table_schema_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "table_schema_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
