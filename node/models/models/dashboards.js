import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dashboards extends Model {
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
    dashboard_title: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    position_json: {
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
    css: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "idx_unique_slug"
    },
    json_metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "uq_dashboards_uuid"
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
    tableName: 'dashboards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dashboards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_unique_slug",
        unique: true,
        fields: [
          { name: "slug" },
        ]
      },
      {
        name: "uq_dashboards_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
