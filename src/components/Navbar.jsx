import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return (
        <Flex as={'nav'} alignItems={'center'}>

            <Heading as={'h2'}>Logo</Heading>
            <Spacer />

            <Box bg={'gray.200'} p={'5px'}>Jahid</Box>
            <Text>jahidhowlader@gmail.com</Text>
            <Button bg={'gray.200'} p={'5px'}>Logout</Button>

        </Flex>
    );
};

export default Navbar;