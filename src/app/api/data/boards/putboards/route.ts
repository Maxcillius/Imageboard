import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        const response = await prisma.boards.create({
            data: {
                board_id: body.board_id,
                name: body.name,
                description: body.description,
                category: body.category
            }
        })

        return NextResponse.json({response});

    } catch(err) {
        
        return NextResponse.json({Error: err});
    }
}