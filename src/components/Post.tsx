"use client"

import UserDetails from "@/utils/postInfo"
import axios from "axios";
import { useState } from "react";

export default function Post({ user } : { user: UserDetails } ) {

    const timestamp = new Date(user.created_at);

    const time = {
        year: timestamp.getFullYear(),
        month: timestamp.getMonth() + 1,
        date: timestamp.getDate(),
        day: timestamp.getDay(),
        hour: timestamp.getHours(),
        min: timestamp.getMinutes(),
        sec: timestamp.getSeconds()
    }

    const [likes, setLikes] = useState(user.likes);

    const handleCounts = async () => {
        try {
            const response = await axios.post("/api/data/posts/likepost", {
                postId: user.id,
                board_id: user.board_id
            })

            setLikes(likes+1);

        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div className="w-screen h-fit my-5">
            <div className="bg-[#FDE2CA] mx-4">
                <div className="flex flex-row justify-start gap-4 px-4">
                    <p className="text-green-800">Anonymous</p>
                    <p className="text-red-800">{time.date}/{time.month}/{time.year}</p>
                    <p className="text-pink-800">{time.day}</p>
                    <p className="text-pink-800">{time.hour}:{time.min}:{time.sec}</p>
                    <p className="text-yellow-800">No. {user.id}</p>
                    <p className="hover:cursor-pointer hover:text-slate-500" onClick={handleCounts}>Likes [{likes}]</p>
                </div>
                <div className="p-4">
                    <p>{user.content}</p>
                </div>
            </div>
        </div>
    )
}