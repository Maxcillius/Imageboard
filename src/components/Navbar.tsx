export default function Navbar({content}: {content: string}) {
    return (
        <div className="bg-[#FEC89A] w-screen h-16 text-center flex flex-col justify-center font-bold text-3xl text-white">
            {content}
        </div>
    )
}