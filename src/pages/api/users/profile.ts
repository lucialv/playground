// import type { APIRoute } from "astro";
// import { db, eq, Profiles } from "astro:db";
// import { supabase } from "../../../lib/supabase";

// export const POST: APIRoute = async ({ request }) => {
//   const { data, error } = await supabase.auth.getSession();
//   console.log(data);

//   const formData = await Astro.request.formData();
//   const bio = formData.get("bio");
//   const id = data.user.id;
//   if (typeof bio === "string") {
//     await db.update(Profiles).set({ bio: "Meow" }).where(eq(Profiles.id, id));
//   }
// };
