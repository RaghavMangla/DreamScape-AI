import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email").notNull().unique(),
    password: varchar("password").notNull(),
    imageUrl: varchar("image_url"),
    subscription:boolean("subscription").notNull().default(false),
});

