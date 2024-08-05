import TrendingContainer from "@/components/TrendingContainer";
import BoardContainer from "@/components/BoardContainer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default async function boards() {
    return (
        <div>
            <div>
                <Navbar content=""/>
            </div>
            <div className="flex flex-col justify-center">
                <Header Heading={"Imageboard"}/>
                <div className="flex flex-row justify-center mb-10">
                    <div className="grid grid-cols-10 auto-cols-auto md:gird-rows-10 md:auto-cols-auto">
                        <div className="col-span-6 mx-10">
                            <TrendingContainer Title="Trending"/>
                        </div>
                        <div className="col-span-4 mx-10">
                            <BoardContainer Title="Boards"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}