import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import {users} from "./users.schema"


export const notifications = pgTable("notifications", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  title: varchar("title", {length: 255,}),
  body: text("body"),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
