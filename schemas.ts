import { z } from "npm:zod";

export const PostFrontmatterSchema = z.object({
  title: z.string(),
  published_at: z.date().nullable(),
  snippet: z.string(),
  cover: z.object({
    square: z.string(),
    rect: z.string().optional(),
  }),
  links: z.array(z.object({
    url: z.string(),
    text: z.string(),
  })).optional(),
});
export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export const EnvSchema = z.object({
  BUTTONDOWN_API_KEY: z.string(),
});
export type Env = z.infer<typeof EnvSchema>;
