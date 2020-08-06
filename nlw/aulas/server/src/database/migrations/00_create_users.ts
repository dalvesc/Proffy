import Knex from "knex";

//quais alterações quer no banco
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

//deu merda o que fazer pra voltar
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
