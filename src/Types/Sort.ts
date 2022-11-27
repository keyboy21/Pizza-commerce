import { z } from "zod";

const SortType = z.object({
  id: z.number(),
  name: z.string(),
  sortProperty: z.string(),
  order: z.string(),
})

export type sortType = z.infer<typeof SortType>