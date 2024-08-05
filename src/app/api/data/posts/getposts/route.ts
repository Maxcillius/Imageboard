import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    const body = await req.json();

    try {
        const response = await prisma.posts.findMany({
            where: {
                board_id: body.board_id
            }
        })

        return NextResponse.json(response)

    } catch (err) {

        return NextResponse.json({
            Error: err
        })
    }
}