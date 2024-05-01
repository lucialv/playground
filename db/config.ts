import { defineDb, defineTable, column } from "astro:db";

const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    avatar: column.text(),
    username: column.text(),
    bio: column.text(),
    email: column.text(),
  },
});

export default defineDb({
  tables: { Users },
});
