import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_register_user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "ab_register_user_username_key"
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    registration_hash: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ab_register_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_register_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ab_register_user_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
