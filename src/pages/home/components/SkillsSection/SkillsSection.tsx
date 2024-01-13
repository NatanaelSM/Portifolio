import { Flex, Text, forwardRef } from "@chakra-ui/react"
import '../styles/index.css'
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection/TitleSection"
import { Skill } from "./Skill"
import { ForwardedRef } from "react"

export const HabilitsSection = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Flex
            ref={ref}
            className="container-section flex-centralizer"
            bg='black'
            paddingY='5%'
            h='100vh'
            flexDir='column'>
            <Flex
                w='100%'
                h='100%'
                flexDir='column'
            >
                <Flex
                    w='100%'
                    h='10%'
                    className="flex-centralizer">
                    <TitleSection titulo='Habilidades' />
                </Flex>
                <Flex
                    w='100%'
                    h='80%'
                    flexDir='column'
                    alignItems='center'
                    pt='3%'>
                    <Skill />
                </Flex>
                <Flex
                    w='100%'
                    h='10%'
                    flexDir='column'
                    className="flex-centralizer">
                    <Flex
                        className="flex-centralizer"
                        boxShadow='1px 1px 15px 0px #7DAEF6'
                        w='150px'
                        h='50px'
                        borderRadius='10px'
                        cursor='pointer'>
                        <Text>
                            Ver mais
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
})