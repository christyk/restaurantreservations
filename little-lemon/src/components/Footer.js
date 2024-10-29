import { Box, HStack, VStack } from "@chakra-ui/react";
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
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            backgroundColor="#18181b"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <a href="/"><img src=".../public/img/logo.svg" alt="Home"></img></a>
                    <VStack>
                        <p><b>Doormat Navigation</b></p>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/menu">Menu</a>
                        <a href="/reservations">Reservations</a>
                        <a href="/order">Order Online</a>
                        <a href="/login">Login</a>
                    </VStack>
                    <VStack>
                        <p><b>Contact</b></p>
                        <p>123 Sesame Street</p>
                        <p>Chicago, IL 12345</p>
                        <p>123-456-7890</p>
                        <a
                            key="mailto: hello@example.com"
                            href="mailto: hello@example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" key="mailto: hello@example.com" />
                        </a>
                    </VStack>
                    <VStack>
                        <p><b>Social Media Links</b></p>
                        {socials.map(({ icon, url }) => (
                            <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={icon} size="2x" key={url} />
                            </a>
                        ))}
                    </VStack>
                </HStack>
            </Box>
        </Box>
    );
};

export default Footer;