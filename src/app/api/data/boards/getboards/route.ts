import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const boards = await prisma.boards.findMany();
        return NextResponse.json({
            boards,
        })
    } catch(err) {
        return NextResponse.json({
            Error: err,
        })
    }
}