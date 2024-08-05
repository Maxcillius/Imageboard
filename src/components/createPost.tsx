"use client"
import axios from "axios"
import { useState } from "react"

export default function CreatePost() {

    const [content, setContent] = useState("");
    const [id, setId] = useState("");
    const [state, setState] = useState("");
    const [success, setSuccess] = useState("text-red-600 text-center");

    const handleSubmit = async () => {
        if (content.length > 600) {
            setState("Content must not exceed 600 characters");
            return;
        }

        try {
            const response = await axios.post("/api/data/posts/putposts", {
                content: content,
                board_id: id
            });
            
            if(response.data.Error) {
                setSuccess("text-red-600 text-center");
                setState("No board exists with this name");
            } else {
                setSuccess("text-green-600 text-center");
                setState("Post submitted successfully!");
            }

        } catch (error) {
            setSuccess("text-red-600 text-center");
            setState("An error occurred. Please try again.");
        }

    }

    return (
        <div>
            <div className="flex flex-col rounded-xl w-contain m-4">
                <div className="text-center font-bold text-white bg-[#c59a77] py-5">
                    <h5 className="text-2xl font-bold">Create a post</h5>
                </div>
                <div className="bg-[#FDE1CA] flex flex-col justify-center py-10 gap-10">
                    <div className={success}>
                        {state}
                    </div>
                    <div className="flex flex-row justify-center">
                        <p className="mx-4 pt-2">Board Id</p>
                        <input type="text" placeholder="BoardId" className="p-2" onChange={(e) => {
                            setId(e.target.value);
                        }}></input>
                    </div>
                    <div className="flex flex-row justify-center">
                        <p className="mx-4 pt-2">Content</p>
                        <div className="flex flex-col justify-center gap-5">
                            <textarea name="content" cols={30} rows={5} className="p-2" onChange={(e) => {
                                setContent(e.target.value);
                            }}/>
                            <button className="text-center font-bold text-2xl bg-[#E76F51] p-2 rounded-lg text-white hover:cursor-pointer hover:text-[#994e3c]" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}