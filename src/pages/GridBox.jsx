import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const GridBox = () => {
    return (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }} gap="20px" my="80px" alignItems="center">

            <GridItem w="100%" colSpan={2} >

                <span>SINCE 2006</span>
                <Heading fontSize={{ base: "20px", md: "40px", lg: "56px" }}>The Hotel</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus lacus. Aliquam porttitor sit amet diam non placerat. Curabitur convallis, risus ac aliquam imperdiet, tellus ante finibus libero...
                </Text>
            </GridItem>

            <GridItem w="100%" colSpan={3}>

                <Flex gap="20px" alignItems="center" direction={{ base: "column", md: "row" }}>
                    <Box h="470px" border="1px" w="100%"></Box>
                    <Box h="540px" border="1px" w="100%"></Box>
                </Flex>
            </GridItem>
        </Grid>
        
    );
};

export default GridBox;