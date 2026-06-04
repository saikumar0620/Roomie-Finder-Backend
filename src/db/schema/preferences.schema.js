import { pgTable, uuid, varchar, integer, } from "drizzle-orm/pg-core";
import {users} from "./users.schema"


export const preferences = pgTable("preferences", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  preferredGender: varchar("preferred_gender", { length: 20 }),
  minAge: integer("min_age"),

  maxAge: integer("max_age"),
  minBudget: integer("min_budget"),
  maxBudget: integer("max_budget"),

  city: varchar("city", {length: 100,})
});
