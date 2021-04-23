import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import styles from  "../styles/Home.module.css";

    const Footer = () => (

    <div className={styles.footer} >
         
         <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Birendranagar, Surkhet</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+089-765432100</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abc@example.com</span>
            </div>
          </div>
        </div>
    </div>
)


export default Footer