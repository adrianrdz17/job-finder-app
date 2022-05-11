import React from 'react';
import { Icon } from '@iconify/react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="https://www.instagram.com/?hl=es-la">
                        <Icon icon="akar-icons:instagram-fill" inline={true} />
                    </a>
                    <a href="https://twitter.com/home">
                        <Icon icon="akar-icons:twitter-fill" inline={true} />
                    </a>
                    <a href="https://www.facebook.com/">
                        <Icon icon="brandico:facebook" inline={true} />
                    </a>
                </div>
                <p className="copyright">Job Finder App © 2022</p>
            </footer>
        </div>
    );
};

export default Footer;
