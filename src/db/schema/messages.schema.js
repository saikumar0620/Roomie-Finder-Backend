import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import {users} from "./users.schema"
import { conversations } from "./conversation.schema";

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),

  conversationId: uuid("conversation_id").references(() => conversations.id),

  senderId: uuid("sender_id").references(() => users.id),

  message: text("message"),

  imageUrl: varchar("image_url", { length: 500 }),

  createdAt: timestamp("created_at").defaultNow(),
});
