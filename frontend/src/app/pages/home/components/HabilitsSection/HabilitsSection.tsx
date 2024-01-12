import { Flex, Grid, GridItem } from "@chakra-ui/react"
import './styles/index.css'

export const HabilitsSection = () => {
    return (
        <Flex
            className="container-section"
            alignItems='center'
            justifyContent='center'
            bg='black'
            paddingY='5%'
            h='900px'>
            <Flex
                w='100%'
                h='100%'
                bg='linear-gradient(133deg, #80D8FF -16.16%, rgba(155, 121, 252, 0.61) 48.96%, rgba(76, 0, 125, 0.63) 112.26%)'
                borderRadius='20px'>
                <Grid
                    w='100%'
                    h='100%'
                    templateColumns='50% 50%'>
                    <GridItem
                        colSpan={1}>
                        <Flex
                            w='100%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            dfsfdfsdf
                        </Flex>
                    </GridItem>

                    <GridItem
                        colSpan={1}>
                        <Flex
                            w='100%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            dasds
                        </Flex>
                    </GridItem>
                </Grid>

            </Flex>

        </Flex>
    )
}