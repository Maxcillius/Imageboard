import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET(req: NextRequest){

    try {
        const response = await prisma.posts.findMany({
            orderBy: {
                likes: "desc",
            },
            take: 8
        })

        return NextResponse.json(response);
    } catch(error) {
        return NextResponse.json(error);
    }
}