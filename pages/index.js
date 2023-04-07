import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div>
           <h1>Hello  Next .Js</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus natus aliquid quo id quod consequatur illum. Temporibus, ut eius!</p>
           <Link href='/about'>About page</Link>
        </div>
    );
};

export default index;