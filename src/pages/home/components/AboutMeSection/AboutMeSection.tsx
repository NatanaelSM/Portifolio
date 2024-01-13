import { Flex, Grid, GridItem, Img, Text, VStack, forwardRef } from "@chakra-ui/react"
import '../styles/index.css'
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection"
import tecnology from '../../../../assets/tecnology.png'
import { ForwardedRef } from "react"

export const AboutMeSection = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Flex
            ref={ref}
            className="container-section flex-container"
            bg='black'
            h='80vh'
            paddingY='3%'>
            <Flex
                w='100%'
                h='100%'
                justifyContent='center'>
                <VStack>
                    <Flex
                        w='100%'
                        h='10%'
                        className="flex-centralizer">
                        <TitleSection titulo='Sobre Mim'/>
                    </Flex>
                    <Flex
                        h='90%'
                        w='100%'
                        justifyContent='center'
                        alignItems='center'
                        pt='3%'>
                        <Grid
                            w='100%'
                            h='100%'
                            templateColumns='60% 40%'>
                            <GridItem
                                colSpan={1}>
                                <Flex
                                    w='100%'
                                    h='100%'
                                    className="flex-centralizer"
                                    p='10%'>
                                    <Text
                                        color='white'
                                        w='100%'
                                        fontSize='25px'>
                                        No final de 2022 iniciei minha jornada na área de tecnologia e programação, onde me encontrei e me encantei pela linguagem java. A programação não é somente hard skills.Os projetos que desenvolvi, fizeram de mim uma pessoa mais mais ágil, proativa, responsável e com ótima capacidade de trabalhar em grupo.
                                        No final de 2022 iniciei minha jornada na área de tecnologia e programação, onde me encontrei e me encantei pela linguagem java. A programação não é somente hard skills.Os projetos que desenvolvi, fizeram de mim uma pessoa mais mais ágil, proativa, responsável e com ótima capacidade de trabalhar em grupo.
                                    </Text>
                                </Flex>
                            </GridItem>

                            <GridItem
                                colSpan={1}>
                                <Flex
                                    w='100%'
                                    h='100%'
                                    justifyContent='center'
                                    alignItems='center'>
                                    <Img src={tecnology} alt='tecnology' />
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Flex>
                </VStack>
            </Flex>
        </Flex>
    )
})