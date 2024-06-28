import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class favstar extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    class_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obj_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dttm: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'favstar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "favstar_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
