import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_user extends Model {
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
      unique: "ab_user_username_key"
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: "ab_user_email_key"
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    login_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fail_login_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changed_on: {
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
    tableName: 'ab_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "ab_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ab_user_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
