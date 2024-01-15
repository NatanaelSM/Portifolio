import { Flex, Grid, GridItem, HStack, Heading, Img, Text, VStack } from "@chakra-ui/react"
import linkedinImage from "../../../../assets/linkedin.png";
import githubImage from "../../../../assets/github.png";
import '../styles/index.css'
import foto from '../../../../assets/foto.png'
import { ForwardedRef, forwardRef } from "react";

export const InitialContentSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <Flex
            ref={ref}
            className="container-section"
            h='100vh'>
            <Grid
                w='100%'
                templateColumns='50% 50%'>
                <GridItem
                    colSpan={1}>
                    <Flex
                        marginBottom='30%'
                        w='100%'
                        h='100%'
                        justifyContent='center'
                        alignItems='center'
                        paddingBottom='10%'>
                        <Flex
                            flexDir='column'>
                            <VStack
                                align='start'
                                spacing='15px'>
                                <Text
                                    fontSize='30px'
                                    fontWeight='bold'>
                                    Olá, me chamo
                                </Text>
                                <Heading
                                    font-family='Radley'
                                    fontStyle='italic'
                                    fontSize='55px'
                                    fontWeight='bold'
                                    color='#9B79FC'>
                                    Natanael S. Machado
                                </Heading>
                                <Text
                                    fontSize='30px'
                                    fontWeight='600'>
                                    e seja bem-vindo ao meu portifólio!
                                </Text>
                            </VStack>
                            <HStack
                                spacing='15px'
                                marginTop='15px'>
                                <Flex className="btn" >
                                    <Text
                                        className="text-content"
                                        marginRight='5px'>
                                        Linkedin
                                    </Text>
                                    <Img boxSize='35px' src={linkedinImage} alt="LinkedIn" />
                                </Flex>
                                <Flex className="btn" >
                                    <Text
                                        className="text-content"
                                        marginRight='5px'>
                                        GitHub
                                    </Text>
                                    <Img boxSize='35px' src={githubImage} alt="LinkedIn" />
                                </Flex>
                            </HStack>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                    <Flex
                        className="flex-centralizer"
                        h='100%'>
                        <Img src={foto} alt='foto' />
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>

    )
})