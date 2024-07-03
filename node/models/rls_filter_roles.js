import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class rls_filter_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ab_role',
        key: 'id'
      }
    },
    rls_filter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'row_level_security_filters',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'rls_filter_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rls_filter_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
