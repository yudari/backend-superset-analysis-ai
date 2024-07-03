import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sl_columns extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "sl_columns_uuid_key"
    },
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
    is_aggregation: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_additive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_dimensional: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_filterable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_increase_desired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_managed_externally: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_partition: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_physical: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_temporal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_spatial: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expression: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    warning_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    external_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_json: {
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
    advanced_data_type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sl_columns',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sl_columns_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sl_columns_uuid_key",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
