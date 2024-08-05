import Post from "@/components/Post"
import axios from 'axios';
import UserDetails from "@/utils/postInfo";
import Navbar from "@/components/Navbar";
import { API } from "@/config";

export default async function Board({ params }: { params: { posts: string } } ) {


    const posts = await axios.post(API + "/api/data/posts/getposts", {
        board_id: params.posts
    })

    if(posts.data.length > 0) {

        posts.data.sort((a: UserDetails, b: UserDetails) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

        return (
            <div>
                <div>
                    <Navbar content={params.posts}/>
                </div>
                <div className="py-10 bg-[#FFEEE0] h-screen">
                    {posts.data.map( (post: UserDetails) => {
                        return (
                            <div key={post.id}>
                                <Post user={post} />
                            </div>
                        )
                    } )}                
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <Navbar content={params.posts}/>
                </div>
                <div className="flex flex-row justify-center text-7xl font-bold py-10 text-[#FFB5A7]">
                    Wow so empty
                </div>
            </div>
        )
    }

    
}