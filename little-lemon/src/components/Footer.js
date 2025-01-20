import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        url: "https://www.github.com/sureskills",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/sureskills/",
    },
    {
        icon: faMedium,
        url: "https://medium.com/@sureskills",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/sureskills",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <a href="/"><img src="/img/logo.svg" alt="Home"></img></a>
            <ul className="footerNav">
                <li><b><u>Doormat Navigation</u></b></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul className="footerNav">
                <li><b><u>Contact</u></b></li>
                <li>123 Sesame Street</li>
                <li>Chicago, IL 12345</li>
                <li>123-456-7890</li>
                <li><a
                    key="mailto: hello@example.com"
                    href="mailto: hello@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" key="mailto: hello@example.com" />
                </a></li>
            </ul>
            <ul className="footerNav">
                <li><b><u>Social Media Links</u></b></li>
                {socials.map(({ icon, url }) => (
                    <li>
                        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={icon} size="2x" key={url} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;