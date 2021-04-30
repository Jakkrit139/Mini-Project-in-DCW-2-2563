import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("")
    }
 
    return (
        <Layout>
            <Head>
                <title>Logout </title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>Logout to Lovely Pets Let's GO</h1>
                <h1>ขอบคุณที่เข้ามาชม</h1>
                <h1>นาย จักรกฤษ์ กรงไกรจักร รหัส 5735512139</h1>
                <img src="https://s359.kapook.com/pagebuilder/7c03ab25-2487-4c3c-830f-e882ebefc27b.jpg" 
                    height ="400px"
                    width ="800px"

                    />
                <div>
                    <h2> {status}  </h2>
                </div>
            </div>
        </Layout>
    )
}
