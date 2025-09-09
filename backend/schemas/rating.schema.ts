import z from "zod";

export const createRatingSchema = z.object({
  userId: z.int(),
  roomId: z.int(),
  rating: z.int().min(1).max(5),
  comment: z.string().max(300),
});
