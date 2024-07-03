import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ssh_tunnels extends Model {
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
    created_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changed_by_fk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    database_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dbs',
        key: 'id'
      }
    },
    server_address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    server_port: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    username: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    private_key: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    private_key_password: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ssh_tunnels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_ssh_tunnels_database_id",
        unique: true,
        fields: [
          { name: "database_id" },
        ]
      },
      {
        name: "ix_ssh_tunnels_uuid",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
      {
        name: "ssh_tunnels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
