import { pgTable, uuid } from "drizzle-orm/pg-core";
import {users} from "./users.schema"



export const savedProfiles = pgTable("saved_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id").references(() => users.id),

  savedUserId: uuid("saved_user_id").references(() => users.id),
});
