"use client"

import axios from "axios";
import PostHolder from "./PostHolder";
import { useEffect, useState } from "react";
import UserDetails from "@/utils/postInfo";

export default function TrendingContainer( { Title } : { Title: string } ) {

    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        async function GetPopular() {
            try {
                const response = await axios.get("/api/data/posts/popular");
                setPosts(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        GetPopular();
    }, [])

    return (
        <div>
            <div className="bg-[#F4A261]">
                <h3 className="text-white p-2 font-bold text-3xl pl-10">{Title}</h3>
            </div>
            <div className="bg-[#FDE1CA] h-fit flex flex-row justify-center">
                <div className="flex flex-col justify-center p-10">
                    <div className="grid grid-cols-4 grid-rows-2 gap-5">
                        {posts.map( (post: UserDetails) => {

                            var context = post.content;

                            if(post.content.length >= 86) {
                                post.content = context.slice(0, 87) + "...";
                            }

                            return (
                                <div key={post.id}>
                                    <PostHolder context={post.content}/>
                                </div>
                            )
                        } )}
                    </div>
                </div>
            </div>
        </div>
    )
}
