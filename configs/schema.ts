import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id: text('id').primaryKey(),
    name:varchar("name").notNull(),
    email: varchar("email").notNull(),
    imageUrl: varchar("image_url"),
    subscription:boolean("subscription").default(false),
});

