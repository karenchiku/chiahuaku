import hambugerStyles from './hambuger.module.css';
import Link from 'next/link';
import { useState } from "react";


export default function () {
    const [issearch, setIsSearch] = useState(1)
    return (

        <div className={hambugerStyles.header}>
            <div className={hambugerStyles.nav}>
                <span className={hambugerStyles.logoicon}>
                    <Link key="canonical" href="/">CHIA HUA KU</Link>
                </span>


                <input id="hamburger-toggle" className={hambugerStyles.hamburgertoggle} type="checkbox" />
                <label className={hambugerStyles.hamburger} for="hamburger-toggle">
                    <div className={hambugerStyles.bar}></div>
                </label>

                <ul className={hambugerStyles.menubar}>
                    <li> <Link href="/">About</Link></li>
                    <li> <Link href="/work">Work</Link></li>
           
                </ul>
         


            </div>
        </div>
    )
}