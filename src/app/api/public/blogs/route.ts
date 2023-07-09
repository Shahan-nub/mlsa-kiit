import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    const blogs = await prisma.blogs.findMany({
      select: {
        title: true,
        author: true,
        description: true,
        imageUrl: true,
        link: true,
        date: true,
      },
    });

    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: "Something went wrong",
    });
  }
};