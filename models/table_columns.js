import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class table_columns extends Model {
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
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tables',
        key: 'id'
      },
      unique: "uq_table_columns_column_name"
    },
    column_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uq_table_columns_column_name"
    },
    is_dttm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    groupby: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    filterable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    expression: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    verbose_name: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    python_date_format: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_table_columns_uuid"
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    advanced_data_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'table_columns',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "table_columns_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_table_columns_column_name",
        unique: true,
        fields: [
          { name: "column_name" },
          { name: "table_id" },
        ]
      },
      {
        name: "uq_table_columns_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
