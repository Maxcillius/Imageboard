import Boards from "./Boards";
import axios from "axios";
import { API } from "@/config";

export default async function Container( { Title } : { Title: string } ) {

    const response = await axios.get(API + "/api/data/boards/getboards");
    const Allboards = response.data.boards;

    return (
        <div>
            <div className="bg-[#F4A261]">
                <h3 className="text-white p-2 font-bold text-3xl pl-10">{Title}</h3>
            </div>
            <div className="bg-[#FDE1CA] h-lvh flex flex-col justify-start p-10">
                <div className="flex flex-row justify-evenly h-full">
                    <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="Japanese"></Boards>
                    </div>
                    <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="video Games"></Boards>
                    </div>
                    <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="Movies"></Boards>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly h-full">
                <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="Others"></Boards>
                    </div>
                    <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="World"></Boards>
                    </div>
                    <div className="flex flex-col justify-start">
                        <Boards response={Allboards} Category="Misc"></Boards>
                    </div>
                </div>
            </div>
        </div>
    )
}