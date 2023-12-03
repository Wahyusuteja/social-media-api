migrate_create:
	knex migrate:make $(file)
migrate_up:
	knex migrate:up
migrate_down:
	knex migrate:down
server:
	node src/main.js