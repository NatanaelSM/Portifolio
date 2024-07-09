import { Box, Flex, HStack, Img } from "@chakra-ui/react"
import { LinkHeader } from "./LinkHeader"
import logo from '../../assets/logo_transparent.png'

interface HeaderProps {
    onClickSection: (page: 'initial' | 'about' | 'projects' | 'skills') => void
}

export const Header = ({ onClickSection }: HeaderProps) => {

    return (
        <Flex
            w='100%'
            h='13rem'
            position='sticky'
            top='0rem'
            zIndex='999'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            paddingInline={{
                base: "2rem",
                sm: "2rem",
                md: "2rem",
                lg: "2rem",
                xl: "20rem",
            }}
            boxShadow='0px 4px 4px rgba(61, 61, 61, 0.25) '
            bg='black'>

            <Box>
                <Img src={logo} alt='logo' />
            </Box>
            <Flex
                alignItems='center'>
                <Flex
                    display={{
                        base: "none",
                        xl: "flex"}}>
                    <HStack
                        gap='25px'>
                        <LinkHeader onClick={() => onClickSection('initial')} conteudo="Início" />
                        <LinkHeader onClick={() => onClickSection('about')} conteudo="Sobre mim" />
                        <LinkHeader onClick={() => onClickSection('projects')} conteudo="Projetos" />
                        <LinkHeader onClick={() => onClickSection('skills')} conteudo="Habilidades" />
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    )
}