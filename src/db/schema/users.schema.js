import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: varchar("full_name", { length: 50 }).notNull(),
  email: varchar("email", { length: 50 }).notNull(),
  password: varchar("password", { length: 50 }).notNull(),
  isVerified: boolean("is_verified").default(false),
  createdAt:timestamp("created_at",{withTimezone:true}).defaultNow(),
  updatedAt:timestamp("updated_at",{withTimezone:true}).defaultNow()
  
})