import { env } from "$env/static/private";

export const prerender = true;

export const load = () => {
  return {
    exampleEnv: env.EXAMPLE,
  };
};
