import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './component/Navbar'

export default function About({users}) {
    return (
        <>
            <Head>
                <title>About | Belajar Nextjs</title>
                <meta name="description" content="Belajar Nextjs" />
            </Head>
            <Navbar />
            <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={100} />
            {users.map((user) => (
                <div key={user.id} style={{ margin: "20px", padding: "20px", border: "1px solid black" }}>
                    <Link href={`/about/${user.id}`} style={{ color: "blue", cursor: "pointer" }}>
                        {user.name}
                    </Link>
                    <p style={{ color: "red" }}>{user.email}</p>
                </div>
            ))}
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return {
        props: {
            users: users,
        },
    }
}