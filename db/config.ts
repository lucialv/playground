import { defineDb, defineTable, column } from "astro:db";

const Profiles = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    bio: column.text(),
  },
});

export default defineDb({
  tables: { Profiles },
});
