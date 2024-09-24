import Link from "next/link";

export default async function NotFound() {
    return (
        <>
        <h1>Not Found</h1>
        <Link href="/">Go back to home</Link>
        </>
    )
}