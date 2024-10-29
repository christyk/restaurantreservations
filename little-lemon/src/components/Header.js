import { Box, HStack } from "@chakra-ui/react";
import Nav from './Nav';

const Header = () => {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
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
                    <Nav/>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;