import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class rls_filter_tables extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tables',
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
    tableName: 'rls_filter_tables',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rls_filter_tables_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
