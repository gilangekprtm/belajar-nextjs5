import Head from 'next/head'
import Link from 'next/link'

const UserDetails = ({ user }) => {
    return (
        <div>
            <Head>
                <title>User Details | Belajar Nextjs</title>
                <meta name='description' content={user.name} />
            </Head>

            <div style={{ margin: "20px", padding: "20px", border: "1px solid black" }}>
                <h1 style={{ color: "blue" }}>{user.name}</h1>
                <p style={{ color: "red" }}>{user.email}</p>
                {/*<div>
                    <h2>Address</h2>
                    <pre>{JSON.stringify(user.address, null, 2)}</pre>
                </div>*/}
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                {/*<div>
                    <h2>Company</h2>
                    <pre>{JSON.stringify(user.company, null, 2)}</pre>
                </div>*/}
            </div>

            <Link href="/about" style={{ cursor: "pointer", textDecoration: "underline", color: "blue", padding: "10px" }}>
                Back to About
            </Link>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    }
}

export default UserDetails;