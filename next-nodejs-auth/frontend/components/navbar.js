import Link from 'next/link'
import styles from '../styles/navbar.module.css'


    const Navbar = () => (
        
    <div className ={styles.navbar}>
        <Link href="/"><a> <b>Home</b></a></Link> |
        <Link href="/register"><a> <b>Register</b> </a></Link>  |
        <Link href="/login"><a> <b>Login</b> </a></Link> |
        <Link href="/profile"><a> <b>About cat</b> </a></Link> | 
        <Link href="/pet"><a> <b>PetEdit</b> </a></Link> |
        <Link href="/getConfig"><a><b>Thai cat breeds</b> </a></Link> | 
        <Link href="/logout"><a> <b>Logout</b> </a></Link> 
    </div>
)


export default Navbar