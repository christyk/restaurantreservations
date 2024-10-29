import { HStack } from "@chakra-ui/react";

const Nav = () => {
    return (
        <nav>
            <HStack spacing={8}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/order">Order Online</a>
                <a href="/login">Login</a>
            </HStack>
        </nav>
    );
};

export default Nav;

