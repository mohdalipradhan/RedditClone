import React from 'react'
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack, useColorMode } from '@chakra-ui/react'

function PageLoader() {
    const { colorMode } = useColorMode();

    return (
        <Stack spacing={6}>
            <Box padding="10px 10px" boxShadow="lg"
                bg={colorMode === "dark" ? "black" : "white"}
                borderRadius={4}>
                <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
                <Skeleton mt="4" height="200px" />
            </Box>
            <Box padding="10px 10px"
                boxShadow="lg"
                bg={colorMode === "dark" ? "black" : "white"}
                borderRadius={4}>
                <SkeletonText mt="4" noOfLines={1} width="40%" spacing="4" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
                <Skeleton mt="4" height="200px" />
            </Box>
        </Stack>
    )
}

export default PageLoader
