import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(res: NextRequest) {
    const body = await res.json();

    const postId = body.postId;
    const board_id = body.board_id
    
    try {
        const response = await prisma.posts.update({
            where: {
                id: postId,
                board_id: board_id
            },
    
            data: {
                likes: {
                    increment: 1,
                }
            }
        })

        return NextResponse.json({response});

    } catch (error) {
        return NextResponse.json(error)
    }
}