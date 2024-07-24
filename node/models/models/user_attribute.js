import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_attribute extends Model {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    welcome_dashboard_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dashboards',
        key: 'id'
      }
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
    tableName: 'user_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_attribute_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
