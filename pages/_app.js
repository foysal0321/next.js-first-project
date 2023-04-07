import Link from 'next/link'
import './styles/global.css'
import { useRouter } from 'next/router'

export default function App ({Component, pageProps}){
    
    const router = useRouter()
    const color =  router.pathname === '/' ? 'active': ''
    
    return (
        <>
        <div className="">
            <h1>Our Site</h1>
            <nav>
                <ul>
                    <li>
                        <Link className={color} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={router.pathname === '/about' ? 'active': ''} href='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={router.pathname === '/blog' ? 'active': ''} href='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Component {...pageProps} />
        <p>Footer</p>
        </>
    )
}