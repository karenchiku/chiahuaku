import Head from 'next/head';
import styles from '../styles/Home.module.css';
import chiahuakustyle from '../styles/chiahuaku.module.css'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link';

export default function Home() {
  return (

    <Layout home>

      <div className={chiahuakustyle.main}>
        <div className={chiahuakustyle.title}>
          <h1>HELLO!</h1>
          <h1 className={styles.title}>I'm Chia-Hua Ku 顧佳樺</h1>
          <p>Cloud Solution Architect / Data Analytics Engineer</p>
        </div>

        <div className={chiahuakustyle.intro}>
          <div className={chiahuakustyle.introcontainer}>
            <img className={chiahuakustyle.profileimage} src="./image/cKarenKu.png"></img>
          </div>

          <div className={chiahuakustyle.introdesc}>
            <h3>About Me</h3>
            <p>10+ years Cloud Data Services and Data Analytics Experience, recently focusing on Advanced Analytics. I have development experience in a different field including manufacturing industry, internet industry, retailer. Moreover, I have problem solving, strong knowledge on Cloud Platform, Business Intelligence, Machine Learning. Please feel free to connect with me. </p>
            
            <Link href="/work">
              <div className={chiahuakustyle.learnmorebutton}>Read More</div>
            </Link>

          </div>
          <div className={chiahuakustyle.introdesc}>
            <h3>Contract with me</h3>
            <div className={chiahuakustyle.detail}>
              <p>○  a93701011@gmail.com</p>
              <p>○  (+886)919523111</p>
            </div>
            <h3>specialized Skills</h3>
            <div className={chiahuakustyle.detail}>
              <p>○  Business Intengence and Advanced Analytics </p>
              <p>○  Big Data Platform and Data Engineering</p>
            </div>

          </div>

        </div>



      </div>


    </Layout>
  )
}
