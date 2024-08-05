export default function Header( { Heading }: { Heading: string } ) {
    return (
        <div className="flex flex-row justify-center bg-[#FFB5A7] my-10">
            <h1 className="text -center font-bold text-8xl text-white py-6">{Heading}</h1>
        </div>
    )
}