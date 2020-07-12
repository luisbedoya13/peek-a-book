export const config = {
  server: {
    hostname: Deno.env.get('HOST'),
    port: Number(Deno.env.get('PORT')),
  },
  database: String(Deno.env.get('DB_PATH')),
};
