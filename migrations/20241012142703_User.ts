import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("User", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw('(UUID())')).notNullable();
        table.string("name").notNullable().unique();
        table.string("email").notNullable().unique();
        table.string("password");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("tasks")
}

