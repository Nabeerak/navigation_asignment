import Link from 'next/link';
const page = () => {
    return (
        <div> creating a simple Next.js project
            <br/>
         <Link href = "/homepage">Homepage</Link>
        <br/>
        <Link href = "/namepage">Name page</Link>
        </div>
    )
    
}

export default page;