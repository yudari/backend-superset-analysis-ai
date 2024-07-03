import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _ab_permission from  "./ab_permission.js";
import _ab_permission_view from  "./ab_permission_view.js";
import _ab_permission_view_role from  "./ab_permission_view_role.js";
import _ab_register_user from  "./ab_register_user.js";
import _ab_role from  "./ab_role.js";
import _ab_user from  "./ab_user.js";
import _ab_user_role from  "./ab_user_role.js";
import _ab_view_menu from  "./ab_view_menu.js";
import _alembic_version from  "./alembic_version.js";
import _annotation from  "./annotation.js";
import _annotation_layer from  "./annotation_layer.js";
import _cache_keys from  "./cache_keys.js";
import _css_templates from  "./css_templates.js";
import _dashboard_roles from  "./dashboard_roles.js";
import _dashboard_slices from  "./dashboard_slices.js";
import _dashboard_user from  "./dashboard_user.js";
import _dashboards from  "./dashboards.js";
import _dbs from  "./dbs.js";
import _dynamic_plugin from  "./dynamic_plugin.js";
import _embedded_dashboards from  "./embedded_dashboards.js";
import _favstar from  "./favstar.js";
import _key_value from  "./key_value.js";
import _keyvalue from  "./keyvalue.js";
import _logs from  "./logs.js";
import _query from  "./query.js";
import _report_execution_log from  "./report_execution_log.js";
import _report_recipient from  "./report_recipient.js";
import _report_schedule from  "./report_schedule.js";
import _report_schedule_user from  "./report_schedule_user.js";
import _rls_filter_roles from  "./rls_filter_roles.js";
import _rls_filter_tables from  "./rls_filter_tables.js";
import _row_level_security_filters from  "./row_level_security_filters.js";
import _saved_query from  "./saved_query.js";
import _sl_columns from  "./sl_columns.js";
import _sl_dataset_columns from  "./sl_dataset_columns.js";
import _sl_dataset_tables from  "./sl_dataset_tables.js";
import _sl_dataset_users from  "./sl_dataset_users.js";
import _sl_datasets from  "./sl_datasets.js";
import _sl_table_columns from  "./sl_table_columns.js";
import _sl_tables from  "./sl_tables.js";
import _slice_user from  "./slice_user.js";
import _slices from  "./slices.js";
import _sql_metrics from  "./sql_metrics.js";
import _sqlatable_user from  "./sqlatable_user.js";
import _ssh_tunnels from  "./ssh_tunnels.js";
import _tab_state from  "./tab_state.js";
import _table_columns from  "./table_columns.js";
import _table_schema from  "./table_schema.js";
import _tables from  "./tables.js";
import _tag from  "./tag.js";
import _tagged_object from  "./tagged_object.js";
import _tb_chart_result_analysis from  "./tb_chart_result_analysis.js";
import _tb_tab_dashboard_embed from  "./tb_tab_dashboard_embed.js";
import _tb_tab_dashboard_result_analysis from  "./tb_tab_dashboard_result_analysis.js";
import _tb_tab_embed from  "./tb_tab_embed.js";
import _tb_tab_embed_result_analysis from  "./tb_tab_embed_result_analysis.js";
import _user_attribute from  "./user_attribute.js";

export default function initModels(sequelize) {
  const ab_permission = _ab_permission.init(sequelize, DataTypes);
  const ab_permission_view = _ab_permission_view.init(sequelize, DataTypes);
  const ab_permission_view_role = _ab_permission_view_role.init(sequelize, DataTypes);
  const ab_register_user = _ab_register_user.init(sequelize, DataTypes);
  const ab_role = _ab_role.init(sequelize, DataTypes);
  const ab_user = _ab_user.init(sequelize, DataTypes);
  const ab_user_role = _ab_user_role.init(sequelize, DataTypes);
  const ab_view_menu = _ab_view_menu.init(sequelize, DataTypes);
  const alembic_version = _alembic_version.init(sequelize, DataTypes);
  const annotation = _annotation.init(sequelize, DataTypes);
  const annotation_layer = _annotation_layer.init(sequelize, DataTypes);
  const cache_keys = _cache_keys.init(sequelize, DataTypes);
  const css_templates = _css_templates.init(sequelize, DataTypes);
  const dashboard_roles = _dashboard_roles.init(sequelize, DataTypes);
  const dashboard_slices = _dashboard_slices.init(sequelize, DataTypes);
  const dashboard_user = _dashboard_user.init(sequelize, DataTypes);
  const dashboards = _dashboards.init(sequelize, DataTypes);
  const dbs = _dbs.init(sequelize, DataTypes);
  const dynamic_plugin = _dynamic_plugin.init(sequelize, DataTypes);
  const embedded_dashboards = _embedded_dashboards.init(sequelize, DataTypes);
  const favstar = _favstar.init(sequelize, DataTypes);
  const key_value = _key_value.init(sequelize, DataTypes);
  const keyvalue = _keyvalue.init(sequelize, DataTypes);
  const logs = _logs.init(sequelize, DataTypes);
  const query = _query.init(sequelize, DataTypes);
  const report_execution_log = _report_execution_log.init(sequelize, DataTypes);
  const report_recipient = _report_recipient.init(sequelize, DataTypes);
  const report_schedule = _report_schedule.init(sequelize, DataTypes);
  const report_schedule_user = _report_schedule_user.init(sequelize, DataTypes);
  const rls_filter_roles = _rls_filter_roles.init(sequelize, DataTypes);
  const rls_filter_tables = _rls_filter_tables.init(sequelize, DataTypes);
  const row_level_security_filters = _row_level_security_filters.init(sequelize, DataTypes);
  const saved_query = _saved_query.init(sequelize, DataTypes);
  const sl_columns = _sl_columns.init(sequelize, DataTypes);
  const sl_dataset_columns = _sl_dataset_columns.init(sequelize, DataTypes);
  const sl_dataset_tables = _sl_dataset_tables.init(sequelize, DataTypes);
  const sl_dataset_users = _sl_dataset_users.init(sequelize, DataTypes);
  const sl_datasets = _sl_datasets.init(sequelize, DataTypes);
  const sl_table_columns = _sl_table_columns.init(sequelize, DataTypes);
  const sl_tables = _sl_tables.init(sequelize, DataTypes);
  const slice_user = _slice_user.init(sequelize, DataTypes);
  const slices = _slices.init(sequelize, DataTypes);
  const sql_metrics = _sql_metrics.init(sequelize, DataTypes);
  const sqlatable_user = _sqlatable_user.init(sequelize, DataTypes);
  const ssh_tunnels = _ssh_tunnels.init(sequelize, DataTypes);
  const tab_state = _tab_state.init(sequelize, DataTypes);
  const table_columns = _table_columns.init(sequelize, DataTypes);
  const table_schema = _table_schema.init(sequelize, DataTypes);
  const tables = _tables.init(sequelize, DataTypes);
  const tag = _tag.init(sequelize, DataTypes);
  const tagged_object = _tagged_object.init(sequelize, DataTypes);
  const tb_chart_result_analysis = _tb_chart_result_analysis.init(sequelize, DataTypes);
  const tb_tab_dashboard_embed = _tb_tab_dashboard_embed.init(sequelize, DataTypes);
  const tb_tab_dashboard_result_analysis = _tb_tab_dashboard_result_analysis.init(sequelize, DataTypes);
  const tb_tab_embed = _tb_tab_embed.init(sequelize, DataTypes);
  const tb_tab_embed_result_analysis = _tb_tab_embed_result_analysis.init(sequelize, DataTypes);
  const user_attribute = _user_attribute.init(sequelize, DataTypes);

  ab_user.belongsToMany(sl_datasets, { as: 'dataset_id_sl_datasets_sl_dataset_users', through: sl_dataset_users, foreignKey: "user_id", otherKey: "dataset_id" });
  sl_columns.belongsToMany(sl_datasets, { as: 'dataset_id_sl_datasets', through: sl_dataset_columns, foreignKey: "column_id", otherKey: "dataset_id" });
  sl_columns.belongsToMany(sl_tables, { as: 'table_id_sl_tables_sl_table_columns', through: sl_table_columns, foreignKey: "column_id", otherKey: "table_id" });
  sl_datasets.belongsToMany(ab_user, { as: 'user_id_ab_users', through: sl_dataset_users, foreignKey: "dataset_id", otherKey: "user_id" });
  sl_datasets.belongsToMany(sl_columns, { as: 'column_id_sl_columns', through: sl_dataset_columns, foreignKey: "dataset_id", otherKey: "column_id" });
  sl_datasets.belongsToMany(sl_tables, { as: 'table_id_sl_tables', through: sl_dataset_tables, foreignKey: "dataset_id", otherKey: "table_id" });
  sl_tables.belongsToMany(sl_columns, { as: 'column_id_sl_columns_sl_table_columns', through: sl_table_columns, foreignKey: "table_id", otherKey: "column_id" });
  sl_tables.belongsToMany(sl_datasets, { as: 'dataset_id_sl_datasets_sl_dataset_tables', through: sl_dataset_tables, foreignKey: "table_id", otherKey: "dataset_id" });
  ab_permission_view.belongsTo(ab_permission, { as: "permission", foreignKey: "permission_id"});
  ab_permission.hasMany(ab_permission_view, { as: "ab_permission_views", foreignKey: "permission_id"});
  ab_permission_view_role.belongsTo(ab_permission_view, { as: "permission_view", foreignKey: "permission_view_id"});
  ab_permission_view.hasMany(ab_permission_view_role, { as: "ab_permission_view_roles", foreignKey: "permission_view_id"});
  ab_permission_view_role.belongsTo(ab_role, { as: "role", foreignKey: "role_id"});
  ab_role.hasMany(ab_permission_view_role, { as: "ab_permission_view_roles", foreignKey: "role_id"});
  ab_user_role.belongsTo(ab_role, { as: "role", foreignKey: "role_id"});
  ab_role.hasMany(ab_user_role, { as: "ab_user_roles", foreignKey: "role_id"});
  dashboard_roles.belongsTo(ab_role, { as: "role", foreignKey: "role_id"});
  ab_role.hasMany(dashboard_roles, { as: "dashboard_roles", foreignKey: "role_id"});
  rls_filter_roles.belongsTo(ab_role, { as: "role", foreignKey: "role_id"});
  ab_role.hasMany(rls_filter_roles, { as: "rls_filter_roles", foreignKey: "role_id"});
  ab_user.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(ab_user, { as: "ab_users", foreignKey: "changed_by_fk"});
  ab_user.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(ab_user, { as: "created_by_fk_ab_users", foreignKey: "created_by_fk"});
  ab_user_role.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(ab_user_role, { as: "ab_user_roles", foreignKey: "user_id"});
  annotation.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(annotation, { as: "annotations", foreignKey: "changed_by_fk"});
  annotation.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(annotation, { as: "created_by_fk_annotations", foreignKey: "created_by_fk"});
  annotation_layer.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(annotation_layer, { as: "annotation_layers", foreignKey: "changed_by_fk"});
  annotation_layer.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(annotation_layer, { as: "created_by_fk_annotation_layers", foreignKey: "created_by_fk"});
  css_templates.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(css_templates, { as: "css_templates", foreignKey: "changed_by_fk"});
  css_templates.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(css_templates, { as: "created_by_fk_css_templates", foreignKey: "created_by_fk"});
  dashboard_user.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(dashboard_user, { as: "dashboard_users", foreignKey: "user_id"});
  dashboards.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(dashboards, { as: "dashboards", foreignKey: "changed_by_fk"});
  dashboards.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(dashboards, { as: "created_by_fk_dashboards", foreignKey: "created_by_fk"});
  dbs.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(dbs, { as: "dbs", foreignKey: "changed_by_fk"});
  dbs.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(dbs, { as: "created_by_fk_dbs", foreignKey: "created_by_fk"});
  dynamic_plugin.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(dynamic_plugin, { as: "dynamic_plugins", foreignKey: "changed_by_fk"});
  dynamic_plugin.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(dynamic_plugin, { as: "created_by_fk_dynamic_plugins", foreignKey: "created_by_fk"});
  favstar.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(favstar, { as: "favstars", foreignKey: "user_id"});
  key_value.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(key_value, { as: "key_values", foreignKey: "changed_by_fk"});
  key_value.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(key_value, { as: "created_by_fk_key_values", foreignKey: "created_by_fk"});
  logs.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(logs, { as: "logs", foreignKey: "user_id"});
  query.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(query, { as: "queries", foreignKey: "user_id"});
  report_recipient.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(report_recipient, { as: "report_recipients", foreignKey: "changed_by_fk"});
  report_recipient.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(report_recipient, { as: "created_by_fk_report_recipients", foreignKey: "created_by_fk"});
  report_schedule.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(report_schedule, { as: "report_schedules", foreignKey: "changed_by_fk"});
  report_schedule.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(report_schedule, { as: "created_by_fk_report_schedules", foreignKey: "created_by_fk"});
  report_schedule_user.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(report_schedule_user, { as: "report_schedule_users", foreignKey: "user_id"});
  row_level_security_filters.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(row_level_security_filters, { as: "row_level_security_filters", foreignKey: "changed_by_fk"});
  row_level_security_filters.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(row_level_security_filters, { as: "created_by_fk_row_level_security_filters", foreignKey: "created_by_fk"});
  saved_query.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(saved_query, { as: "saved_queries", foreignKey: "changed_by_fk"});
  saved_query.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(saved_query, { as: "created_by_fk_saved_queries", foreignKey: "created_by_fk"});
  saved_query.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(saved_query, { as: "user_saved_queries", foreignKey: "user_id"});
  sl_columns.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(sl_columns, { as: "sl_columns", foreignKey: "changed_by_fk"});
  sl_columns.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(sl_columns, { as: "created_by_fk_sl_columns", foreignKey: "created_by_fk"});
  sl_dataset_users.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(sl_dataset_users, { as: "sl_dataset_users", foreignKey: "user_id"});
  sl_datasets.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(sl_datasets, { as: "sl_datasets", foreignKey: "changed_by_fk"});
  sl_datasets.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(sl_datasets, { as: "created_by_fk_sl_datasets", foreignKey: "created_by_fk"});
  sl_tables.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(sl_tables, { as: "sl_tables", foreignKey: "changed_by_fk"});
  sl_tables.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(sl_tables, { as: "created_by_fk_sl_tables", foreignKey: "created_by_fk"});
  slice_user.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(slice_user, { as: "slice_users", foreignKey: "user_id"});
  slices.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(slices, { as: "slice", foreignKey: "changed_by_fk"});
  slices.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(slices, { as: "created_by_fk_slice", foreignKey: "created_by_fk"});
  slices.belongsTo(ab_user, { as: "last_saved_by_fk_ab_user", foreignKey: "last_saved_by_fk"});
  ab_user.hasMany(slices, { as: "last_saved_by_fk_slice", foreignKey: "last_saved_by_fk"});
  sql_metrics.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(sql_metrics, { as: "sql_metrics", foreignKey: "changed_by_fk"});
  sql_metrics.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(sql_metrics, { as: "created_by_fk_sql_metrics", foreignKey: "created_by_fk"});
  sqlatable_user.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(sqlatable_user, { as: "sqlatable_users", foreignKey: "user_id"});
  tab_state.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(tab_state, { as: "tab_states", foreignKey: "changed_by_fk"});
  tab_state.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(tab_state, { as: "created_by_fk_tab_states", foreignKey: "created_by_fk"});
  tab_state.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(tab_state, { as: "user_tab_states", foreignKey: "user_id"});
  table_columns.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(table_columns, { as: "table_columns", foreignKey: "changed_by_fk"});
  table_columns.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(table_columns, { as: "created_by_fk_table_columns", foreignKey: "created_by_fk"});
  table_schema.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(table_schema, { as: "table_schemas", foreignKey: "changed_by_fk"});
  table_schema.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(table_schema, { as: "created_by_fk_table_schemas", foreignKey: "created_by_fk"});
  tables.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(tables, { as: "tables", foreignKey: "changed_by_fk"});
  tables.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(tables, { as: "created_by_fk_tables", foreignKey: "created_by_fk"});
  tag.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(tag, { as: "tags", foreignKey: "changed_by_fk"});
  tag.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(tag, { as: "created_by_fk_tags", foreignKey: "created_by_fk"});
  tagged_object.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(tagged_object, { as: "tagged_objects", foreignKey: "changed_by_fk"});
  tagged_object.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(tagged_object, { as: "created_by_fk_tagged_objects", foreignKey: "created_by_fk"});
  user_attribute.belongsTo(ab_user, { as: "changed_by_fk_ab_user", foreignKey: "changed_by_fk"});
  ab_user.hasMany(user_attribute, { as: "user_attributes", foreignKey: "changed_by_fk"});
  user_attribute.belongsTo(ab_user, { as: "created_by_fk_ab_user", foreignKey: "created_by_fk"});
  ab_user.hasMany(user_attribute, { as: "created_by_fk_user_attributes", foreignKey: "created_by_fk"});
  user_attribute.belongsTo(ab_user, { as: "user", foreignKey: "user_id"});
  ab_user.hasMany(user_attribute, { as: "user_user_attributes", foreignKey: "user_id"});
  ab_permission_view.belongsTo(ab_view_menu, { as: "view_menu", foreignKey: "view_menu_id"});
  ab_view_menu.hasMany(ab_permission_view, { as: "ab_permission_views", foreignKey: "view_menu_id"});
  annotation.belongsTo(annotation_layer, { as: "layer", foreignKey: "layer_id"});
  annotation_layer.hasMany(annotation, { as: "annotations", foreignKey: "layer_id"});
  tb_tab_dashboard_embed.belongsTo(dashboard_slices, { as: "id_tab_dashboard_chart_dashboard_slice", foreignKey: "id_tab_dashboard_chart"});
  dashboard_slices.hasMany(tb_tab_dashboard_embed, { as: "tb_tab_dashboard_embeds", foreignKey: "id_tab_dashboard_chart"});
  dashboard_roles.belongsTo(dashboards, { as: "dashboard", foreignKey: "dashboard_id"});
  dashboards.hasMany(dashboard_roles, { as: "dashboard_roles", foreignKey: "dashboard_id"});
  dashboard_slices.belongsTo(dashboards, { as: "dashboard", foreignKey: "dashboard_id"});
  dashboards.hasMany(dashboard_slices, { as: "dashboard_slice", foreignKey: "dashboard_id"});
  dashboard_user.belongsTo(dashboards, { as: "dashboard", foreignKey: "dashboard_id"});
  dashboards.hasMany(dashboard_user, { as: "dashboard_users", foreignKey: "dashboard_id"});
  embedded_dashboards.belongsTo(dashboards, { as: "dashboard", foreignKey: "dashboard_id"});
  dashboards.hasMany(embedded_dashboards, { as: "embedded_dashboards", foreignKey: "dashboard_id"});
  report_schedule.belongsTo(dashboards, { as: "dashboard", foreignKey: "dashboard_id"});
  dashboards.hasMany(report_schedule, { as: "report_schedules", foreignKey: "dashboard_id"});
  user_attribute.belongsTo(dashboards, { as: "welcome_dashboard", foreignKey: "welcome_dashboard_id"});
  dashboards.hasMany(user_attribute, { as: "user_attributes", foreignKey: "welcome_dashboard_id"});
  query.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(query, { as: "queries", foreignKey: "database_id"});
  report_schedule.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(report_schedule, { as: "report_schedules", foreignKey: "database_id"});
  saved_query.belongsTo(dbs, { as: "db", foreignKey: "db_id"});
  dbs.hasMany(saved_query, { as: "saved_queries", foreignKey: "db_id"});
  sl_datasets.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(sl_datasets, { as: "sl_datasets", foreignKey: "database_id"});
  sl_tables.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(sl_tables, { as: "sl_tables", foreignKey: "database_id"});
  ssh_tunnels.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(ssh_tunnels, { as: "ssh_tunnels", foreignKey: "database_id"});
  tab_state.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(tab_state, { as: "tab_states", foreignKey: "database_id"});
  table_schema.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(table_schema, { as: "table_schemas", foreignKey: "database_id"});
  tables.belongsTo(dbs, { as: "database", foreignKey: "database_id"});
  dbs.hasMany(tables, { as: "tables", foreignKey: "database_id"});
  tab_state.belongsTo(query, { as: "latest_query", foreignKey: "latest_query_id"});
  query.hasMany(tab_state, { as: "tab_states", foreignKey: "latest_query_id"});
  report_execution_log.belongsTo(report_schedule, { as: "report_schedule", foreignKey: "report_schedule_id"});
  report_schedule.hasMany(report_execution_log, { as: "report_execution_logs", foreignKey: "report_schedule_id"});
  report_recipient.belongsTo(report_schedule, { as: "report_schedule", foreignKey: "report_schedule_id"});
  report_schedule.hasMany(report_recipient, { as: "report_recipients", foreignKey: "report_schedule_id"});
  report_schedule_user.belongsTo(report_schedule, { as: "report_schedule", foreignKey: "report_schedule_id"});
  report_schedule.hasMany(report_schedule_user, { as: "report_schedule_users", foreignKey: "report_schedule_id"});
  rls_filter_roles.belongsTo(row_level_security_filters, { as: "rls_filter", foreignKey: "rls_filter_id"});
  row_level_security_filters.hasMany(rls_filter_roles, { as: "rls_filter_roles", foreignKey: "rls_filter_id"});
  rls_filter_tables.belongsTo(row_level_security_filters, { as: "rls_filter", foreignKey: "rls_filter_id"});
  row_level_security_filters.hasMany(rls_filter_tables, { as: "rls_filter_tables", foreignKey: "rls_filter_id"});
  tab_state.belongsTo(saved_query, { as: "saved_query", foreignKey: "saved_query_id"});
  saved_query.hasMany(tab_state, { as: "tab_states", foreignKey: "saved_query_id"});
  sl_dataset_columns.belongsTo(sl_columns, { as: "column", foreignKey: "column_id"});
  sl_columns.hasMany(sl_dataset_columns, { as: "sl_dataset_columns", foreignKey: "column_id"});
  sl_table_columns.belongsTo(sl_columns, { as: "column", foreignKey: "column_id"});
  sl_columns.hasMany(sl_table_columns, { as: "sl_table_columns", foreignKey: "column_id"});
  sl_dataset_columns.belongsTo(sl_datasets, { as: "dataset", foreignKey: "dataset_id"});
  sl_datasets.hasMany(sl_dataset_columns, { as: "sl_dataset_columns", foreignKey: "dataset_id"});
  sl_dataset_tables.belongsTo(sl_datasets, { as: "dataset", foreignKey: "dataset_id"});
  sl_datasets.hasMany(sl_dataset_tables, { as: "sl_dataset_tables", foreignKey: "dataset_id"});
  sl_dataset_users.belongsTo(sl_datasets, { as: "dataset", foreignKey: "dataset_id"});
  sl_datasets.hasMany(sl_dataset_users, { as: "sl_dataset_users", foreignKey: "dataset_id"});
  sl_dataset_tables.belongsTo(sl_tables, { as: "table", foreignKey: "table_id"});
  sl_tables.hasMany(sl_dataset_tables, { as: "sl_dataset_tables", foreignKey: "table_id"});
  sl_table_columns.belongsTo(sl_tables, { as: "table", foreignKey: "table_id"});
  sl_tables.hasMany(sl_table_columns, { as: "sl_table_columns", foreignKey: "table_id"});
  dashboard_slices.belongsTo(slices, { as: "slouse", foreignKey: "slice_id"});
  slices.hasMany(dashboard_slices, { as: "dashboard_slice", foreignKey: "slice_id"});
  report_schedule.belongsTo(slices, { as: "chart", foreignKey: "chart_id"});
  slices.hasMany(report_schedule, { as: "report_schedules", foreignKey: "chart_id"});
  slice_user.belongsTo(slices, { as: "slouse", foreignKey: "slice_id"});
  slices.hasMany(slice_user, { as: "slice_users", foreignKey: "slice_id"});
  table_schema.belongsTo(tab_state, { as: "tab_state", foreignKey: "tab_state_id"});
  tab_state.hasMany(table_schema, { as: "table_schemas", foreignKey: "tab_state_id"});
  rls_filter_tables.belongsTo(tables, { as: "table", foreignKey: "table_id"});
  tables.hasMany(rls_filter_tables, { as: "rls_filter_tables", foreignKey: "table_id"});
  sql_metrics.belongsTo(tables, { as: "table", foreignKey: "table_id"});
  tables.hasMany(sql_metrics, { as: "sql_metrics", foreignKey: "table_id"});
  sqlatable_user.belongsTo(tables, { as: "table", foreignKey: "table_id"});
  tables.hasMany(sqlatable_user, { as: "sqlatable_users", foreignKey: "table_id"});
  table_columns.belongsTo(tables, { as: "table", foreignKey: "table_id"});
  tables.hasMany(table_columns, { as: "table_columns", foreignKey: "table_id"});
  tagged_object.belongsTo(tag, { as: "tag", foreignKey: "tag_id"});
  tag.hasMany(tagged_object, { as: "tagged_objects", foreignKey: "tag_id"});
  tb_chart_result_analysis.belongsTo(tb_chart_result_analysis, { as: "id_tab_chart_tb_chart_result_analysis", foreignKey: "id_tab_chart"});
  tb_chart_result_analysis.hasMany(tb_chart_result_analysis, { as: "tb_chart_result_analyses", foreignKey: "id_tab_chart"});
  tb_tab_embed_result_analysis.belongsTo(tb_tab_dashboard_result_analysis, { as: "id_tb_tab_dashboard_result_analysis_tb_tab_dashboard_result_analysis", foreignKey: "id_tb_tab_dashboard_result_analysis"});
  tb_tab_dashboard_result_analysis.hasMany(tb_tab_embed_result_analysis, { as: "tb_tab_embed_result_analyses", foreignKey: "id_tb_tab_dashboard_result_analysis"});
  tb_tab_dashboard_embed.belongsTo(tb_tab_embed, { as: "id_tab_dashboard_tb_tab_embed", foreignKey: "id_tab_dashboard"});
  tb_tab_embed.hasMany(tb_tab_dashboard_embed, { as: "tb_tab_dashboard_embeds", foreignKey: "id_tab_dashboard"});
  tb_tab_embed_result_analysis.belongsTo(tb_tab_embed, { as: "id_tab_dashboard_tb_tab_embed", foreignKey: "id_tab_dashboard"});
  tb_tab_embed.hasMany(tb_tab_embed_result_analysis, { as: "tb_tab_embed_result_analyses", foreignKey: "id_tab_dashboard"});

  return {
    ab_permission,
    ab_permission_view,
    ab_permission_view_role,
    ab_register_user,
    ab_role,
    ab_user,
    ab_user_role,
    ab_view_menu,
    alembic_version,
    annotation,
    annotation_layer,
    cache_keys,
    css_templates,
    dashboard_roles,
    dashboard_slices,
    dashboard_user,
    dashboards,
    dbs,
    dynamic_plugin,
    embedded_dashboards,
    favstar,
    key_value,
    keyvalue,
    logs,
    query,
    report_execution_log,
    report_recipient,
    report_schedule,
    report_schedule_user,
    rls_filter_roles,
    rls_filter_tables,
    row_level_security_filters,
    saved_query,
    sl_columns,
    sl_dataset_columns,
    sl_dataset_tables,
    sl_dataset_users,
    sl_datasets,
    sl_table_columns,
    sl_tables,
    slice_user,
    slices,
    sql_metrics,
    sqlatable_user,
    ssh_tunnels,
    tab_state,
    table_columns,
    table_schema,
    tables,
    tag,
    tagged_object,
    tb_chart_result_analysis,
    tb_tab_dashboard_embed,
    tb_tab_dashboard_result_analysis,
    tb_tab_embed,
    tb_tab_embed_result_analysis,
    user_attribute,
  };
}
