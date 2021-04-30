import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/pet.module.css";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
import Footer from  "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import config from '../config/config';

const API_URL = "http://localhost/api/pets";
const admin = ({ token }) => {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState({});
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(0);
  const [pet, setPet] = useState({});
  const [imgurl, setImgurl] = useState();
  const [detail, setDetail] = useState() ;
 

  const handleChangeImage = e =>{
    const file = e.target.files[0];
    const imgurl = URL.createObjectURL(file);
    setImgurl(imgurl);
  }


  useEffect(() => {
    getPets();
    setImgurl();    
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
     
      setUser(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getpet = async (id) => {
    const result = await axios.get(`${API_URL}/${id}`)
    console.log('pet id: ', result.data)
    setPet(result.data)
}
 
  const getPets = async () => {
    let result = await axios.get(API_URL);
    setPets(result.data.list);
  };

  const addPet = async () => {
    let result = await axios.post(API_URL, {
      name,
      species,
      sex,
      age,
      imgurl,
      detail
    });
    console.log(result);
    getPets();
  };

  const deletePet = async (id) => {
    let result = await axios.delete(`${API_URL}/${id}`);
    getPets();
  };

  const updatePet = async (id) => {
    let result = await axios.put(`${API_URL}/${id}`, {
      name,
      species,
      sex,
      age,
      imgurl,
      detail
    });
    console.log(result);
    getPets();
  };

  const showPets = () => {
    if (pets && pets.length) {
      return pets.map((item, index) => {
        return (
          <Col className="col-lg-6 col-12">
          <div className={styles.listItem} key={index}>
          <div><img src={item.imgurl } style={{ width: "90px", height: "90px" }} /> </div>
            <b>Name:</b> {item.name} <br />
            <b>Species:</b> {item.species} <br />
            <b>Sex:</b> {item.sex} <br />
            <b>Age:</b> {item.age}
            <b>Detail:</b> {item.detail}
            <div className={styles.edit_button}>
              <button
                className={styles.button_get}
                onClick={() => getpet(item.id)}
              >
                Get
              </button>
              <button
                className={styles.button_update}
                onClick={() => updatePet(item.id)}
              >
                Update
              </button>
              <button
                className={styles.button_delete}
                onClick={() => deletePet(item.id)}
              >
                Delete
              </button>
            </div>
          </div></Col>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <h1><ins>Cat review</ins></h1>
      <div className={styles.form_add}>
        <h2>Cat review </h2>
        ชื่อ :
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input> 
        <label >
          <img className='image' src={imgurl} />
          <input className='input-file' type='file' onChange={handleChangeImage} />
        </label>
        สายพันธ์ุ :
        <input
          type="text"
          name="species"
          onChange={(e) => setSpecies(e.target.value)}
        ></input>
        เพศ:
        <input
          type="text"
          name="sex"
          onChange={(e) => setSex(e.target.value)}
        ></input>
        อายุ:
        <input
          type="number"
          name="AGE"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        รายละเอียด:
        <input
          type="text"
          name="detail"
          onChange={(e) => setDetail(e.target.value)}
        ></input>
        <button
          className={styles.button_add}
          onClick={() => addPet(imgurl,name, species, sex, age, detail)}
        >
          Add
        </button>
      </div>

      <div className={styles.list}>{showPets()}</div>
      <div className={styles.list1}><b><i><ins>(selected pet)</ins></i></b> <b>  Name:</b>{pet.name}<b>  Species:</b>{pet.species} <b>  Sex:</b>{pet.sex}  <b>Age:</b>{pet.age} <b>Detail:</b>{pet.detail}</div>
      <Footer />
    </div>
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

