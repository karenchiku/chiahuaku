import Head from 'next/head';
import styles from '../styles/Home.module.css';
import chiahuakustyle from '../styles/chiahuaku.module.css'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link';
export default function Home() {
  return (

    <Layout home>

      {/* <div className={styles.container}> */}

      <div className={chiahuakustyle.main}>

        <div className={chiahuakustyle.intro}>
          <div className={chiahuakustyle.left}>
            <img className={chiahuakustyle.profileimage} src="./image/cartoon.jpg"></img>
          </div>
          <div className={chiahuakustyle.right}>
            <h1>Chia-Hua Ku 顧佳樺</h1>
            <p>Cloud Solution Architect / Data Analytics Engineer</p>

            <p>10+ years Cloud Data Services and Data Analytics Experience, recently focusing on Advanced Analytics. I have development experience in a different field including manufacturing industry, internet industry, retailer. Moreover, I have problem solving, strong knowledge on Cloud Platform, Business Intelligence, Machine Learning. Please feel free to connect with me.  </p>
            <p>My specialized skills on Data and AI<br/>
               1. Business Intelligence, Data Visualization, Power BI,..etc <br/>
               2. Machine Leaning Modeling, Advance Analytics, Azure Machine Leaning, Python<br/>
               3. Data Engineering, Data Manipulation,PySark, Azure Data Factory <br/>
               4. SQL Server Data warehouse, Performance Tuning on big data.
            </p>
          
          </div>
          
        </div>




        <div>

          <h3>Education</h3>
          <div className={chiahuakustyle.readmoreline}></div>
          <p>B.S.,Applied Mathematic, National Chengchi University ( 政治大學 ) 2004 - 2008 </p>
          <p>M.S.,Industrial Engineering,  National Chiao Tung University ( 交通大學 ) 2008 - 2010 </p>


        </div>

        <div>
          <h3>Work Experience</h3>
          <div className={chiahuakustyle.readmoreline}></div>
          <h3>● Data & AI Customer Engineer / Cloud Solution Architect, Microsoft,Taipei, Taiwan <span className={chiahuakustyle.smalltext}>Sep  2018 - Present</span></h3>
          <p className={chiahuakustyle.focusskill}>Power BI / Machine Learning / Databricks / Synapse / pySpark / Python </p>
          <div className={chiahuakustyle.detail}>
            <p> ●	Design and implement BI platforms for customers, including Power BI reports, Data Models and Data Flow Architecture ( ETL Pipeline ) Improve Pre-existing BI platform architecture, including  DAX teaching and tuning, RLS designs, Report Retrieval Performance.</p>
            <p> ●	Utilize  Advanced Analytics (Databricks: Machine Learning + Big Data ETL--Pyspark , Scala, Spark Sql) and (MLOps: Machine Learning)</p>
            <p> ●	Execute Data migration On-premise SQL server for reporting to Synapse.</p>
            <p> ●	Host/Speaker for Open & Close Power BI & DAX Workshop  for customers, conventions, and conferences</p>
            <p> ●	Host/Speaker for Open & Close Azure Machine Learning & Databricks & MLOps for customers, conventions, and conferences</p>
            <p> ●	Received FY19 Q4 Champion Award</p>
          </div>
          <h3>●	Data & AI Consultant, Microsoft, Taipei, Taiwan  <span className={chiahuakustyle.smalltext}>July  2017 - Aug 2018</span></h3>
          <p className={chiahuakustyle.focusskill}>Power BI / Machine Learning / SQL Server / Python</p>
          <div className={chiahuakustyle.detail}>
            <p> ●	Shin Kong  Hospital, HIS system transformation mainframe to web interface, designed database schema and  data migration from DB2 to SQL Server ETL pipeline</p>
            <p> ●	FETC, Big Data Platform on-premise, designed dataware schema, and data ELT pipeline from OLTP database to HDFS, transform to dataware </p>
            <p> ●	Host/Speaker for Open & Close  workspace for Power BI Desktop and Azure Machine Learning</p>
          </div>

          <h3>●	Senior BI Engineer, Tutor ABC, Taipei, Taiwan   <span className={chiahuakustyle.smalltext}>Dec 2016 - June 2017</span></h3>
          <p className={chiahuakustyle.focusskill}>SSRS / SQL Server / Javascript / Python</p>
          <div className={chiahuakustyle.detail}>
            <p>●	Created Reports and Data Model for the self-service BI platform, Focus on the finance and marketing segment advance analysis</p>
          </div>

          <h3>●	BI Engineer, Foxconn, Shenzhen, China  <span className={chiahuakustyle.smalltext}>Nov 2015 - Nov 2016</span></h3>
          <p className={chiahuakustyle.focusskill}>SSRS / SSIS  / SQL Server / C# / Javascript</p>
          <div className={chiahuakustyle.detail}>
            <p>●	Developed and Launched Website Project: Tax Refund Service for the Foxconn taxes service partner. By using  the system,  users charged 30% of total taxes refunded,  helping Foxconn IT group to profit  from the cost dept</p>
          </div>

          <h3>●	SAP BI Engineer, WT Group, Taipei, Taiwan  <span className={chiahuakustyle.smalltext}>June 2015 - Nov 2015</span></h3>
          <p className={chiahuakustyle.focusskill}>SAP BO / SSAS / SSIS / Oracle</p>
          <div className={chiahuakustyle.detail}>
            <p>●	Developed and Launched  SAP BO report platform, Created ETL pipelines for SAP data to the Oracle Data Ware,  Created SSAS  model for the self-service BO report</p>
          </div>

          <h3>●	CIM Engineer, Neo Solar Power, Hsinchu, Taiwan  <span className={chiahuakustyle.smalltext}>Sep 2010 - May 2015</span></h3>
          <p className={chiahuakustyle.focusskill}>SSS / SSIS / SSAS / SQL Server/ Data Warehouse/ C#</p>
          <div className={chiahuakustyle.detail}>
            <p>●	Team-Launched  BI platform and Designed Data Warehouse to support manufacturing factory’s Daily Production Summary and Data Analytics for Defect Trace System  (Hsinchu Location)</p>
            <p>●	Solo-Launched  BI platform and Designed Data Warehouse to support manufacturing factory’s Daily Production Summary and Data Analytics for Defect Trace System  (Miaoli Location)</p>

          </div>

        </div>

        <div>
          <h3>Contract with me</h3>
          <div className={chiahuakustyle.readmoreline}></div>
          <p>a93701011@gmail.com</p>
          <p>+886 919523111</p>
        </div>




        <div>
          <h3>Projects</h3>
          <div className={chiahuakustyle.readmoreline}></div>
          <p>● Generative Art</p>  
          <p>●	Generative art SUM on the Tezos <Link href="https://www.fxhash.xyz/generative/slug/sum"> ( Link Here) </Link> </p>
          <p>Website Project</p>
          <p>●蒔心私廚 A private resturant's blog and booknow website. Build on NextJS<Link href="https://murmurur.com"> ( Link Here) </Link></p>
          <p>●AccentCoach A privae american accent tutor's online booknow website. Build on NextJs<Link href="https://accentcoach.com"> ( Link Here) </Link></p>
        </div>

        {/* <div className={styles.container}>
          <div className={styles.grid}>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </div> */}


      </div>


      {/* </div> */}
    </Layout>
  )
}
