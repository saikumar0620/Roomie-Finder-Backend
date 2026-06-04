import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),

  createdAt: timestamp("created_at").defaultNow(),
});
