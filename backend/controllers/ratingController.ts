import { Request, Response } from "express";
import { prisma } from "../database/connection";

async function getRatings(req: Request, res: Response) {
  try {
    const ratings = await prisma.userRating.findMany();
    res.json(ratings);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createRating(req: Request, res: Response) {
  try {
    const { userId, roomId, rating, comment } = req.body;
    const newRating = await prisma.userRating.create({
      data: {
        userId,
        roomId,
        rating,
        comment,
      },
    });
    res.status(201).json(newRating);
  } catch (error) {
    console.error("Error creating rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getRatings, createRating };
