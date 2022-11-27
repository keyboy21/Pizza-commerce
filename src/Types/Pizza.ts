import { z } from "zod";

const Pizza = z.object({
  id: z.string(),
  imageUrl: z.string().url({ message: "Invalid url" }),
  title: z.string(),
  types: z.array(z.number()),
  sizes: z.array(z.number()),
  price: z.number(),
  category: z.number(),
  rating: z.number()
})
export type Pizza = z.infer<typeof Pizza>

