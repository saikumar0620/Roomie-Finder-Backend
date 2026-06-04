import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import {users} from "./users.schema"

export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  age: integer("age").notNull(),
  gender: varchar("gender", { length: 20 }).notNull(),
  occupation: varchar("occupation", { length: 50 }).notNull(),
  city: varchar("city"),
  bio: text("bio"),
  budget: integer("budget").notNull(),
  smoking: varchar("smoking").notNull(),
  drinking: varchar("drinking").notNull(),
});
