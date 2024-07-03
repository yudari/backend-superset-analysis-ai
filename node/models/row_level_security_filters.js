import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class row_level_security_filters extends Model {
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
    clause: {
      type: DataTypes.TEXT,
      allowNull: false
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
    filter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uq_rls_name"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'row_level_security_filters',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_row_level_security_filters_filter_type",
        fields: [
          { name: "filter_type" },
        ]
      },
      {
        name: "row_level_security_filters_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_rls_name",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
