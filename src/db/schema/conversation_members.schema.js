import { pgTable, uuid } from "drizzle-orm/pg-core";
import {users} from "./users.schema"
import { conversations } from "./conversation.schema";

export const conversationMembers = pgTable("conversation_members", {
  id: uuid("id").defaultRandom().primaryKey(),

  conversationId: uuid("conversation_id").references(() => conversations.id),

  userId: uuid("user_id").references(() => users.id),
});
