import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import './mostSearchProduct.css'

const MostSearchProduct = () => {
    return (
        <Box id="productDetails" border="1px" borderColor="#efefef" borderRadius="12px" maxW="350px" mx="auto" px="12px" py="8px">

            <Heading as="h5" fontSize="13px" pb="8px">Most searched products</Heading>

            <Flex className="productDetailsDesign" py="8px" alignItems="center" gap="12px" _hover={{ bg: "#f8f8f8", borderColor: "#fff", borderRadius: "8px" }} p="8px">
                <Image
                    src="/image 27.png"
                    border="1px"
                    borderColor="#EBEBEB"
                    objectFit="cover"
                    borderRadius="8px"
                    w="36px"
                    h="36px"
                />
                <Heading as="h6" fontSize="14px" fontWeight="normal" cursor="pointer">Product name</Heading>
                <Spacer />

                <Text fontSize="13px" fontWeight="medium" color="#00507C">500 times</Text>
            </Flex>
            <Flex className="productDetailsDesign" py="8px" alignItems="center" gap="12px" _hover={{ bg: "#f8f8f8", borderColor: "#fff", borderRadius: "8px" }} p="8px">
                <Image
                    src="/image 27.png"
                    border="1px"
                    borderColor="#EBEBEB"
                    objectFit="cover"
                    borderRadius="8px"
                    w="36px"
                    h="36px"
                />
                <Heading as="h6" fontSize="14px" fontWeight="normal" cursor="pointer">Product name</Heading>
                <Spacer />

                <Text fontSize="13px" fontWeight="medium" color="#00507C">500 times</Text>
            </Flex>
            <Flex className="productDetailsDesign" py="8px" alignItems="center" gap="12px" _hover={{ bg: "#f8f8f8", borderColor: "#fff", borderRadius: "8px" }} p="8px">
                <Image
                    src="/image 27.png"
                    border="1px"
                    borderColor="#EBEBEB"
                    objectFit="cover"
                    borderRadius="8px"
                    w="36px"
                    h="36px"
                />
                <Heading as="h6" fontSize="14px" fontWeight="normal" cursor="pointer">Product name</Heading>
                <Spacer />

                <Text fontSize="13px" fontWeight="medium" color="#00507C">500 times</Text>
            </Flex>
        </Box>
    );
};

export default MostSearchProduct;