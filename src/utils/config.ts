export const config = {
  hostname: Deno.env.get('HOST'),
  port: Number(Deno.env.get('PORT')),
};
