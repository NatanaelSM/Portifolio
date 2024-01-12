import { Flex, Grid, GridItem, HStack, Img } from "@chakra-ui/react"
import { LinkHeader } from "./LinkHeader"
import logo from '../../../assets/logo_transparent.png'

export const Header = () => {

    return (
        <Flex
            w='100vw'
            h='130px'
            position='fixed'
            zIndex='999'>
            <Grid
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
                    <Img src={logo} alt='logo'/>
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
                        <LinkHeader conteudo="Início" />
                        <LinkHeader conteudo="Sobre mim" />
                        <LinkHeader conteudo="Projetos" />
                        <LinkHeader conteudo="Habilidades" />
                    </HStack>
                </GridItem>
            </Grid>
        </Flex>

    )
}