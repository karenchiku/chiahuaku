
import Link from 'next/link';
import footerStyles from './footer.module.css';


export default function Footer() {



    return (
        <div className={footerStyles.bgcontainer}>
            <div className={footerStyles.container}>
                <div className={footerStyles.socialicon}>
                    <Link href="/">
                        <img src='./icon/linkedin.png'></img>
                    </Link>
                    <Link href="/">
                        <img src='./icon/facebook.png'></img>
                    </Link>
                    <Link href="https://github.com/karenchiku">
                        <img src='./icon/github.png'></img>
                    </Link>
                    <Link href="/">
                        <img src='./icon/message.png'></img>
                    </Link>
                    </div>
                <div className={footerStyles.undertext}>
                    <p>© 2023 CHIA HUA KU. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}