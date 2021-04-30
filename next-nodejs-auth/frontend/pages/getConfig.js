import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Footer from  "../components/footer";

const GetConfig = () => {
    return (<Layout>
        <Head>
            <title>Thai cat breeds</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h1 >Thai cat breeds</h1>
            <br></br>
            <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2.png" 
                    height ="400px"
                    width ="800px" />
                  <br></br>
                  <br></br>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/9YeXnYg2_1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                  <br></br>
                  <h1>มาดูแมวไทยยอดนิยมทั้ง 5 ชนิดกัน ! </h1> 
             
                  <h1 >1. แมวไทยวิเชียรมาศ</h1>
                  <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/Siamese-cat.jpg" 
                    height ="250px"
                    width ="350px" />
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/P9VKWbeYTzk" title="YouTube video player" frameborder="0" allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br>
             <div className={styles.box}>
             <p className={styles.text_de}><b>แมวไทยวิเชียรมาศ หรือ Siamese Cat</b>
             มีขนสั้นสีน้ำตาลอ่อน แต้มสีครั่งหรือน้ำตาลบนใบหน้า หูสองข้าง เท้าทั้งสี่ หาง และอวัยวะเพศ รวม 9 แห่ง แต่ไม่ใช่สายพันธุ์เดียวกันกับแมวเก้าแต้ม มีนัยน์ตาสีฟ้า ตามตำรามักกล่าวว่าแมวมงคลชนิดนี้ 
             คนธรรมดาสามัญชนไม่สามารถเลี้ยงได้ และมีการซื้อขายกันถึง 1แสนตำลึงทอง คำว่าวิเชียรมาศ หมายถึง เพชรแห่งดวงจันทร์ (Moon Diamond)</p>
             </div>
             <br></br>
             <h1 >2. แมวไทยขาวมณี/ขาวปลอด</h1>
             <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%93%E0%B8%B5.jpg" 
                    height ="250px"
                    width ="350px" />
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0pl48_KRFDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br></br>
            <div className={styles.box}>
             <p className={styles.text_de}><b>แมวไทยขาวมณี (Khao Manee) หรือ แมวขาวปลอด</b>
             ถือว่าเป็นที่นิยมและเลี้ยงกันมากในปัจจุบัน แมวสายพันธู์นี้จะมีสีขาวทั้งตัว ดูสะอาด หัวไม่กลมและไม่แหลมจนเกินไป จมูกสั้น หางยาวปลายหางแหลมชี้ตรง 
             มีนัยน์ตา 2 สี คือสีเหลืองอำพันกับสีฟ้า แต่บางตัวอาจมีตาสองสีในตัวเดียว ซึ่งพบได้ยากมาก ขาวมณี หมายถึง ความขาวสะอาดบริสุทธิ์ทั้งกายและใจ </p>
            </div>
            <br></br>
            <h1 >3. แมวไทยศุภลักษณ์/ทองแดง</h1>
            <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C.jpg" 
                    height ="250px"
                    width ="350px" />
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VtSGLbQ3FBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
            <div className={styles.box}>
            <p className={styles.text_de}><b>แมวศุภลักษณ์ (Burmese) หรือที่เรียกอีกชื่อว่า แมวทองแดง</b>
            มีสีทองแดงหรือน้ำตาลแดงเข้มทั่วตัว ขนสั้นคล้ายสีสนิม บริเวณส่วนหู ใบหน้า ปลายขา หาง จะมีสีน้ำตาลเข้มกว่าบริเวณลำตัวทั่วไป นัยน์ตามีสีเหลืองอำพัน หนวดของแมวศุภลักษณ์จะมีสีแวววาวเหมือนกับลวดทองแดง 
            หางยาว ปลายหางแหลมชี้ตรง โคนหางใหญ่ มีนิสัยฉลาด เปี่ยมล้นไปด้วยพลัง กระตือรือร้น ขี้เล่น และ ติดเจ้าของ </p>
            </div>
            <br></br>
            <h1 >4. แมวไทยสีสวาด/โคราช/มาเลศ</h1> 
            <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%8A.jpg" 
                    height ="250px"
                    width ="350px" />
                    <br></br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6pTqdwAz_2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
            <div className={styles.box}>
            <p className={styles.text_de}><b>แมวไทยสีสวาด (Korat) หรือ แมวมาเลศ หรือ แมวโคราช หรือ แมวดอกเลา</b>
            ต้นกำเนิดพบที่อำเภอพิมาย จังหวัดนครราชสีมา หรือที่รู้จักกันในนามว่าโคราช มีลักษณะขนสั้น ลำตัวมีสีสวาด ส่วนบริเวณจมูกปากจะเป็นสีเงินหรือสีม่วงอ่อน ใบหน้าเป็นรูปหัวใจ หูตั้งปลายหูกลมมน ตามีสีเหลืองอำพัน หรือสีเขียว หางยาวแหลมตั้งตรง
             ซึ่งแตกต่างกับตำนานพื้นบ้านที่กล่าวว่า แมวโคราชที่มีหางหงิกงอมากเท่าไหร่จะมีโชคลาภมากเท่านั้น </p>
            </div>
            <br></br>
            <h1 >5. แมวไทยโกญจา/ดำปลอด</h1> 
            <img src="https://themanfrommoon.com/wp-content/uploads/2020/09/%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%94%E0%B8%B3%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%94.jpg" 
                    height ="250px"
                    width ="350px" />
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C5Hj9Uwce5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    <br></br>
                    <div className={styles.box}>
                    <p className={styles.text_de}><b>แมวไทยโกญจา หรือ โกนจา (Konja) หรือ แมวไทยดำปลอด </b>
                    หมายถึง เสียงดังกังวาน/นกกระเรียน แมวชนิดนี้เป็นแมวสีดำสนิทตลอดทั้งตัว ขนสั้น ไม่มีสีอื่นใดปะปนเลยแม้แต่น้อย ยิ่งไปกว่านั้นยังมีลักษณะเป็นขนเส้นเล็กละเอียดนุ่มและเรียบตรงทั้งลำตัว 
                    หูใหญ่ตั้งสูง นัยน์ตาสีดอกบวบแรกแย้ม หรือสีเหลืองอมเขียวหรือทองอ่อน อุ้งเท้าคล้ายเท้าสิงห์ เคลื่อนกายราวกับสิงโต </p>
                    </div>
                    <br></br>
        <Footer/>
        </div>

    </Layout>)
}

export default GetConfig