import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import './styles/index.css'

export const AboutMeSection = () => {
    return (
        <Flex
            className="container-section"
            justifyContent='center'
            bg='black'
            paddingY='5%'>
            <Flex
                w='90%'
                h='100%'
                justifyContent='center'>
                <VStack>
                    <Box
                        h='20%'>
                        <Heading
                            font-family='Radley'
                            fontStyle='italic'
                            fontSize='50px'
                            fontWeight='600'
                            color='#7DAEF6'>
                            Sobre Mim
                        </Heading>
                    </Box>
                    <Flex
                        h='80%'>
                        <Text
                            color='white'>
                            No final de 2022 iniciei minha jornada na área de tecnologia e programação, onde me encontrei e me encantei pela linguagem java. A programação não é somente hard skills.Os projetos que desenvolvi, fizeram de mim uma pessoa mais mais ágil, proativa, responsável e com ótima capacidade de trabalhar em grupo.
                        </Text>
                    </Flex>
                </VStack>
            </Flex>
        </Flex>
    )
}