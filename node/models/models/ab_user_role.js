import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ab_user_role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
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
      },
      unique: "ab_user_role_user_id_role_id_key"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_role',
        key: 'id'
      },
      unique: "ab_user_role_user_id_role_id_key"
    }
  }, {
    sequelize,
    tableName: 'ab_user_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ab_user_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ab_user_role_user_id_role_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
