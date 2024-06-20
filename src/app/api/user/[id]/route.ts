import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";
// updating user
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    let { id }: { id: string | number } = params;
    if (id) id = parseInt(id);
    else throw new Error("ID not found!");

    const { name, email } = await req.json();

    if (!name || !email) {
      throw new Error("Name and Email are required");
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    return NextResponse.json({ updatedUser });
  } catch (error) {
     

    return NextResponse.json("Error Updating user");
  }
};

// deleting user
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try{
    let { id }: { id: string | number } = params;
    if (id) id = parseInt(id);
    else throw new Error("ID not found!");
     await prisma.user.delete({
       where: { id },
     });
    return NextResponse.json("delete user successfully");

    
  }catch(error)
  {
    return NextResponse.json("Error deleting user");

  }
}
