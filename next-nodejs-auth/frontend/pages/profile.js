import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import Link from 'next/link'
import Footer from  "../components/footer";

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1 >About cat</h1>
                <img src="https://img.wongnai.com/p/1600x0/2020/09/08/964fd387c6a84d329d1cd3a9cd28e089.jpg" 
                    height ="400px"
                    width ="800px"

                    />
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EfMraoAfo0c" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br>
                    <div className={styles.box}>
                    <p className={styles.text_de}><b>แมว(ชื่อวิทยาศาสตร์: Felis catus)  </b>
                    เป็นสัตว์เลี้ยงลูกด้วยนม อยู่ในตระกูล Felidae ต้นตระกูลมาจากเสือไซบีเรีย (Felis tigris altaica) ซึ่งมีช่วงลำตัวตั้งแต่จมูกถึงปลายหางยาวประมาณ 40 เซนติเมตร แมวที่เลี้ยงตามบ้าน 
                    แมว(ชื่อวิทยาศาสตร์: Felis catus) เป็นสัตว์เลี้ยงลูกด้วยนม อยู่ในตระกูล Felidae ต้นตระกูลมาจากเสือไซบีเรีย (Felis tigris altaica) ซึ่งมีช่วงลำตัวตั้งแต่จมูกถึงปลายหางยาวประมาณ 40 เซนติเมตร แมวที่เลี้ยงตามบ้าน 
                    จะมีรูปร่างขนาดเล็ก ขนาดลำตัวยาว ช่วงขาสั้นและจัดอยู่ในกลุ่มของประเภทสัตว์กินเนื้อ มีเขี้ยวและเล็บแหลมคมสามารถหดซ่อนเล็บได้เช่นเดียวกับเสือ สืบสายเลือดมาจากแมวป่าที่มีขนาดใหญ่กว่า ซึ่งลักษณะบางอย่างของแมวยังคงพบเห็นได้ในแมวบ้านปัจจุบัน
                    หรือในพิพิธภัณฑ์อังกฤษในลอนดอน มีการแสดงสมบัติที่นำออกมาจากพีระมิดโบราณแห่งอียิปต์ ซึ่งรวมถึงมัมมี่แมวหลายตัว ซึ่งเมื่อนำเอาผ้าพันมัมมี่ออกก็พบว่าแมวเริ่มเข้ามาเกี่ยวข้องกับวิถีชีวิตของมนุษย์ตั้งแต่เมื่อประมาณ 9,500 ปีก่อน 5
                    ซึ่งจากหลักฐานทางประวัติศาสตร์ที่เก่าแก่ที่สุดของแมวคือการทำมัมมี่แมวที่พบในสมัยอียิปต์โบราณแมวในสมัยโบราณทุกตัวมีลักษณะใกล้เคียงกัน คือเป็นแมวที่มีรูปร่างเล็ก ขนสั้นมีแต้มสีน้ำตาล มีความคล้ายคลึงกับพันธุ์ในปัจจุบัน ที่เรียกว่าแมวอะบิสซิเนีย </p>
                    <p className={styles.text_de}><b>สายพันธุ์แมว</b>
                    <li>แมวเปอร์เซีย (Persian) </li>
                    <li>แมวอเมริกัน ชอร์ตแฮร์ (American Shorthair)</li>
                    <li>แมวสก็อตติช โฟลด์ (Scottish Fold) </li>
                    <li>แมววิเชียรมาศ (Siamese) </li>
                    <li>สฟริงซ์ (Sphynx) </li>
                    <li>แมวบริติช ชอร์ตแฮร์ (British Shorthair)</li>
                    <li>แมวเมนคูน (Main Coon)</li>
                    <li>แมวเบงกอล (Bengal)</li>
                    <li>แมวเอ็กโซติก (Exotic) </li>
                    <li>อเมริกันเคิร์ล (American Curl)</li>
                    </p>
                    </div>
                <div>
                  
                </div>
                <br></br>
                <Footer/>
            </div>
        </Layout>
    )
}

export default Profile1

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
