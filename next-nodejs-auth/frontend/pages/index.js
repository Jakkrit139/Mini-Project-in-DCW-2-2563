import Head from 'next/head' 
import Layout from '../components/layout' 
import useSWR, { mutate } from "swr";
import axios from "axios";
import React, { } from "react";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
import Footer from  "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
const URL = "http://localhost/api/pets";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const index = () => {
  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);
  
  const selStu = async (id) => {
    let result = await axios.post(`${URL_SEL}/${id}`)
    mutate(URL, data);
  }

  const showPets = () => {
    if (data.list && data.list.length) {
      return data.list.map((item, index) => {
        return (
          <Col className="col-lg-12 col-12">
          <div className={styles.listItem} key={index}>
            {/* <Image src = {item['imgurl']}  width="150" height = "150" /> */}
          {/* <div><img src= {item.imgurl} ></img></div> */}
            <div><b>ชื่อ:</b> {item.name}</div>
            <div><b>สายพันธ์ุ:</b> {item.species}</div>
             <div> <b>เพศ:</b> {item.sex} </div>
            <div><b>อายุ:</b> {item.age}</div>
            <div><img src= {item.imgurl} ></img></div>


            
            <div>
            <button
              className={styles.btn}
              onClick={() => selStu(item.id)}
            >
              Select
            </button></div>
          </div></Col>
        );
      });
    } else {
      return <p></p>;
    }
  };
  return (
    <Layout>
       <Head>
        <title>Lovely Pets Let's GO</title>
    </Head>
    <div className={styles.container}><Navbar />
      <div className={styles.title}>
      <br></br>
      <h1> Lovely Pets Let's GO</h1></div>
      <div className={styles.list}>
        <Row>{showPets()}</Row>
        
      </div>
      <Footer />
    </div>
    </Layout>
  );
};
export default index;
