import Link from "next/link";

const notFound = () => {
  return (
    <div>
        <h2>Page Not Found</h2>
        <Link href='/'>Return</Link>
    </div>
  )
}
export default notFound;