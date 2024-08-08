import { Flex, HStack, Heading, Img, Text, VStack } from "@chakra-ui/react"
import linkedinImage from "../../../../assets/linkedin.png";
import githubImage from "../../../../assets/github.png";
import foto from '../../../../assets/foto.png'
import { ForwardedRef, forwardRef } from "react";
import { BtnInitial } from "./components/BtnInitial";

export const InitialContentSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <Flex
            bg='#0B0B0B'
            ref={ref}
            id="initialContent-container"
            paddingInline='10%'
            justifyContent='space-between'
            h='83vh'>
            <Flex
                justifyContent='center'
                alignItems='center'>
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

                        <BtnInitial siteRedirecionamento={"https://www.linkedin.com/in/natanaelsm/"} texto="Linkedin" img={linkedinImage} />

                        <BtnInitial siteRedirecionamento={'https://github.com/NatanaelSM'} texto="GitHub" img={githubImage} />

                    </HStack>
                </Flex>
            </Flex>

            <Flex
                w='50%'
                justifyContent='center'
                alignItems='center'>
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    h='100%'>
                    <Img src={foto} alt='foto' />
                </Flex>
            </Flex>

        </Flex>

    )
})