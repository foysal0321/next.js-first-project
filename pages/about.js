import React from 'react';
import Link from 'next/link';

const about = () => {
    return (
        <div>
            <h2>This About page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, animi?</p>
            <Link href='/'>Back To Home</Link>
        </div>
    );
};

export default about;