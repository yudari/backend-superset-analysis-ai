import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class annotation extends Model {
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
    start_dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_dttm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    layer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'annotation_layer',
        key: 'id'
      }
    },
    short_descr: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    long_descr: {
      type: DataTypes.TEXT,
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
    created_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ab_user',
        key: 'id'
      }
    },
    json_metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'annotation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "annotation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ti_dag_state",
        fields: [
          { name: "layer_id" },
          { name: "start_dttm" },
          { name: "end_dttm" },
        ]
      },
    ]
  });
  }
}
