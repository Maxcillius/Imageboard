import CreatePost from "@/components/createPost";

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <div>
            <CreatePost/>
            {children}
        </div>
    )
}