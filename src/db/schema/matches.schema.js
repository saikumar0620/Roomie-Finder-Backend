import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import {users} from "./users.schema"

export const matches = pgTable("matches", {
  id: uuid("id").defaultRandom().primaryKey(),
  senderId: uuid("sender_id").references(() => users.id),
  receiverId: uuid("receiver_id").references(() => users.id),
  status: varchar("status", {length: 20,}).default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
