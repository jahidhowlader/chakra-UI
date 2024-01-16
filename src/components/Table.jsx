import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, ButtonGroup, Flex } from '@chakra-ui/react'

const tableRow = () => {
    return (
        <>
            <Td borderRight="1px" borderColor="#efefef"></Td>
            <Td borderRight="1px" borderColor="#efefef">Notification’s heading</Td>
            <Td borderRight="1px" borderColor="#efefef" >Notification’s descriptions</Td>
            <Td borderRight="1px" borderColor="#efefef" >521</Td>
            <Td borderRight="1px" borderColor="#efefef" >521</Td>
            <Td borderRight="1px" borderColor="#efefef" >$101.00</Td>
            <Td borderRight="1px" borderColor="#efefef" >320</Td>
            <Td borderRight="1px" borderColor="#efefef" >5%</Td>
            <Td borderRight="1px" borderColor="#efefef" >Nov 14, 03:40 PM</Td>
        </>
    )
}
const TableComponent = () => {
    return (
        <>
            <TableContainer maxW={'1000px'} mx={'auto'} mt={'80px'} mb="12px" border="1px" borderRadius="8px" borderColor="#efefef">
                <Table variant='simple' size={'sm'}>
                    <Thead bg="#f9f9f9">
                        <Tr>
                            <Th borderRight="1px" borderColor="#efefef"></Th>
                            <Th borderRight="1px" borderColor="#efefef" py="8px" textTransform="capitalize">Name</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Notification’s descriptions</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Sent</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Sessions</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Sales</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Orders</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Conversion</Th>
                            <Th borderRight="1px" borderColor="#efefef" textTransform="capitalize">Date Sent</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                        <Tr>
                            {tableRow()}
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <Flex justify="center" alignItems="center">
                <Button bg="#e9e9e9" borderRightRadius="0px" p="0px" m="0px">
                    <ChevronLeftIcon w="20px" h="20px" />
                </Button>
                <Button bg="#e9e9e9" borderLeftRadius="0px" p="0px" m="0px">
                    <ChevronRightIcon w="20px" h="20px" />
                </Button>
            </Flex>
        </>
    );
};

export default TableComponent;