import Image from "next/image"
import jpg from "./image.jpg"

export default function PostHolder( { context } : { context: string } ) {

    return (
        <div className="bg-[#E76F51] w-56 h-full flex flex-col justify-center py-5">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center mx-4 w-lvh h-40 bg-[#B9B9B9]">
                    <Image src={jpg} alt="Post" width={500}></Image>
                </div>
                <div className="flex flex-col justify-center mx-4">
                    <p className="p-2 text-center">{context}</p>
                </div>
            </div>
        </div>
    )
}