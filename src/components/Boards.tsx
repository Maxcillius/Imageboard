import boards from "@/utils/boards"
import Link from "next/link";

export default async function Boards( { response, Category } : { response : boards[], Category: string } ) {


    const boards = response.filter( (board) => {
        return board.category === Category.toLowerCase();
    })

    return (
        <div className='flex flex-col justify-center'>
            <div className=''>
                <h5 className="text-2xl text-black text-center p-2">{Category}</h5>
            </div>
            {boards.map( (data) => {
                return (
                    <div key={data.id}>
                        <Link href={"/boards/" + data.board_id}>
                            <p className="text-center py-1 text-slate-500 hover:cursor-pointer hover:text-red-600">{data.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}