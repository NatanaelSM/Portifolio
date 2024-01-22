import { Box, Flex, HStack, Img } from "@chakra-ui/react"
import { LinkHeader } from "./LinkHeader"
import logo from '../../assets/logo_transparent.png'
import { DrawerNav } from "./DrawerHeader"

interface HeaderProps {
    onClickSection: (page: 'initial' | 'about' | 'projects' | 'skills') => void
}

export const Header = ({ onClickSection }: HeaderProps) => {

    return (
        <Flex
            w='100vw'
            h='8rem'
            position='fixed'
            zIndex='999'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            paddingInline='11rem'
            boxShadow='0px 4px 4px rgba(61, 61, 61, 0.25) '
            bg='black'>

            <Box>
                <Img src={logo} alt='logo' />
            </Box>
            <Flex
                alignItems='center'>
                <Box
                    visibility={{
                        base: "visible",
                        sm: "visible",
                        md: "visible",
                        lg: "visible",
                        xl: "hidden",
                    }}>
                    <DrawerNav />
                </Box>
                <Flex
                    display={{
                        base: "none",
                        sm: "none",
                        md: "none",
                        lg: "none",
                        xl: "flex",
                    }}>
                    <HStack
                        gap='25px'>
                        <LinkHeader onClick={() => onClickSection('initial')} conteudo="Início" />
                        <LinkHeader onClick={() => onClickSection('about')} conteudo="Sobre mim" />
                        <LinkHeader onClick={() => onClickSection('projects')} conteudo="Projetos" />
                        <LinkHeader onClick={() => onClickSection('skills')} conteudo="Habilidades" />
                    </HStack>
                </Flex>
            </Flex>


            {/* <Grid
                w='100%'
                h='100%'
                paddingX='18%'
                boxShadow='0px 4px 4px rgba(61, 61, 61, 0.25) '
                templateColumns='50% 50%'
                bg='black'>
                <GridItem
                    w='100%'
                    h='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='start'
                    colSpan={1}>
                    
                </GridItem>
                <GridItem
                    w='100%'
                    h='100%'
                    display='flex'
                    justifyContent='end'
                    alignItems='center'
                    colSpan={1}>
                    <HStack
                        gap='25px'>
                        <LinkHeader onClick={() => onClickSection('initial')} conteudo="Início" />
                        <LinkHeader onClick={() => onClickSection('about')} conteudo="Sobre mim" />
                        <LinkHeader onClick={() => onClickSection('projects')} conteudo="Projetos" />
                        <LinkHeader onClick={() => onClickSection('skills')} conteudo="Habilidades" />
                    </HStack>
                </GridItem>
            </Grid> */}
        </Flex>

    )
}