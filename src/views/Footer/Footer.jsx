import React from 'react';
import style from './Footer.module.css'
function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerSection}>
                <h2>
                    The Pokemon Company
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur atque deleniti dolorum
                    eaque, est explicabo fuga harum hic impedit incidunt ipsam iusto, laudantium magnam magni
                    molestiae natus nihil nisi nostrum officia perspiciatis quae quaerat quia quibusdam quisquam
                    recusandae repellendus repudiandae rerum saepe sequi sint soluta tempora tempore tenetur totam
                    ullam unde ut velit voluptatem.
                </p>

            </div>
            <div className={style.footerSection}>
                <h4>
                    Our Social Media
                </h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className={style.footerSection}>
                <ul>

                    <li>
                        <a>Terms of Use</a>
                    </li>

                    <li>
                        <a>Privacy Notice</a>
                    </li>

                    <li>
                        <a>Cookie Page</a>
                    </li>

                    <li>
                        <a>Legal Info</a>
                    </li>

                    <li>
                        <a>Security</a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Footer;
