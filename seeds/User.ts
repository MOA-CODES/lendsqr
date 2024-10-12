import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("User").del();

    // Inserts seed entries
    await knex("User").insert([
        { name: "user1", email:"user1@email.com", password:"password" },
        { name: "user2", email:"user2@email.com", password:"password" },
        { name: "user3", email:"user3@email.com", password:"password" }
    ]);
};

// table.uuid("id").primary().defaultTo(knex.raw('(UUID())')).notNullable();
// table.string("name").notNullable().unique();
// table.string("email").notNullable().unique();
// table.string("password");
// table.timestamp("created_at").defaultTo(knex.fn.now());
// table.timestamp("updated_at").defaultTo(knex.fn.now());

