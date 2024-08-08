import { Flex,Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Flex
            w='100%'
            h='9rem'
            paddingX='18%'
            boxShadow='0px -10px 20px 0px rgba(61, 61, 61, 0.25)'
            bg='black'
            justifyContent='center'
            alignItems='center'
            gap='5px'>
                <Text>Desenvolvido por</Text>
                <Text color=' #9B79FC'>Natanael S. Machado</Text>
                <Text>| © 2024 todos os direitos reservados</Text>
        </Flex>
    )
}