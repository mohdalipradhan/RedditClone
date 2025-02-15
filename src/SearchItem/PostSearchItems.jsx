import { Flex, Icon, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function PostSearchItems({ item, selected, setSelectedTab }) {
    const { colorMode } = useColorMode();

    return (
        <Flex
            justify="center"
            align="center"
            flexGrow={1}
            cursor="pointer"
            _hover={{ bg: colorMode === "dark" ? "gray.800" : "gray.50" }}
            color={selected ? "blue.500" : "gray.500"}
            borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
            borderBottomColor={selected ? "blue.500" : "gray.200"}
            borderRightColor="gray.200"
            onClick={() => setSelectedTab(item.title)}
        >
            <Flex
                align="center"
                height="20px"
                mr={2}
            >
                {/* <Icon as={item.icon} > */}

            </Flex>
            <Text fontSize="10pt">{item.title}</Text>

        </Flex>
    )
}

export default PostSearchItems
