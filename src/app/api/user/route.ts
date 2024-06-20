import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

// this is  for create a user
export const POST = async (req: NextRequest) => {
  try {
    const { name, email } = await req.json();
    const user = await prisma.user.create({
      data: { name, email },
    });
    return NextResponse.json("post successfully created");
  } catch (error) {
    return NextResponse.json("error creating post");
  }
};

// this is for  getting user
export const GET = async (req: NextRequest) => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(" error fetching user");
  }
};

