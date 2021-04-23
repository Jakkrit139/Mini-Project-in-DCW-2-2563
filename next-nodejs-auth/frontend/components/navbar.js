import Link from 'next/link'
import styles from '../styles/Home.module.css'


    const Navbar = () => (

    <div className ={styles.navbar}>
        <Link href="/"><a> <b>หน้าแรก</b></a></Link> |
        <Link href="/register"><a> <b>สมัครสมาชิก</b> </a></Link>  |
        <Link href="/login"><a> <b>ล๊อกอิน</b> </a></Link> |
        <Link href="/profile"><a> <b>Profile</b> </a></Link> | 
        <Link href="/foo"><a> <b>Foo </b></a></Link> |
        <Link href="/studentedit"><a> <b>Student Edit</b> </a></Link> |
        <Link href="/getConfig"><a><b> Config</b> </a></Link> | 
        <Link href="/logout"><a> <b>ออกจากระบบ</b> </a></Link> 
    </div>
)


export default Navbar