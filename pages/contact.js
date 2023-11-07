import React from 'react';
import Link from 'next/link';
import Navbar from "@/pages/component/Navbar";

const Contact = () => {
    return (
        <div>
            < Navbar />
            <h1>Contact Us</h1>
            <p>This is an about us page.</p>
            <Link href="/">Go to Home</Link>
        </div>
    );
};

export default Contact;