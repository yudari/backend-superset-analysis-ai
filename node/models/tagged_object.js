import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tagged_object extends Model {
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
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tag',
        key: 'id'
      },
      unique: "uix_tagged_object"
    },
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "uix_tagged_object"
    },
    object_type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "uix_tagged_object"
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
    tableName: 'tagged_object',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tagged_object_object_id",
        fields: [
          { name: "object_id" },
        ]
      },
      {
        name: "tagged_object_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uix_tagged_object",
        unique: true,
        fields: [
          { name: "tag_id" },
          { name: "object_id" },
          { name: "object_type" },
        ]
      },
    ]
  });
  }
}
