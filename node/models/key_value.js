import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class key_value extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resource: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    value: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
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
    changed_on: {
      type: DataTypes.DATE,
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
    expires_on: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'key_value',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_key_value_expires_on",
        fields: [
          { name: "expires_on" },
        ]
      },
      {
        name: "ix_key_value_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
      {
        name: "key_value_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
