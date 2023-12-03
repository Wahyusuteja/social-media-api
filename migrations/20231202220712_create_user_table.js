/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", function(table) {
        table.increments("id").primary();
        table.string("username", 50).notNullable();
        table.string("email", 100).notNullable().unique();
        table.string("password").notNullable();
        table.string("avatar", 250).nullable();
        table.string("location",250).nullable();
        table.string("bio", 250).nullable();
        table.string("interest", 250).nullable();
        table.boolean("isVeriefid").defaultTo(false);
        table.timestamps(true, true);

    }).then(() => {
        console.log("user table created");
    }).catch((err) =>{
        console.log("eror creating user table", err);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user")
    .then(() => {
        console.log("user table dropped");
    })
    .catch(() => {
        console.log("Error dropping user table:", err);
    });
};
