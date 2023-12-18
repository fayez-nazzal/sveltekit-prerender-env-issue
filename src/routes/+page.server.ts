import { env } from "$env/static/private";

export const load = () => {
  return {
    exampleEnv: env.EXAMPLE,
  };
};
