import { Grid, GridItem, HStack } from "@chakra-ui/react"
import { LinkHeader } from "./LinkHeader"

export const Header = () => {

    return (
        <Grid
            w='100vw'
            h='80px'
            paddingX='150px'
            borderBottom='1px solid #ececec'
            templateColumns='30% 70%'>
            <GridItem
                w='100%'
                h='100%'
                display='flex'
                alignItems='center'
                justifyContent='start'
                colSpan={1}>
                logo
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
                    <LinkHeader conteudo="Início"/>
                    <LinkHeader conteudo="Sobre mim"/>
                    <LinkHeader conteudo="Projetos"/>
                    <LinkHeader conteudo="Habilidades"/>
                </HStack>
            </GridItem>
        </Grid>
    )
}