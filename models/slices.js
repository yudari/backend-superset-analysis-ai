import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class slices extends Model {
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
    slice_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    datasource_type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    datasource_name: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    viz_type: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    params: {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cache_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perm: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    datasource_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schema_perm: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_slices_uuid"
    },
    query_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_saved_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_saved_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    certified_by: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    certification_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_managed_externally: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    external_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'slices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "slices_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_slices_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
