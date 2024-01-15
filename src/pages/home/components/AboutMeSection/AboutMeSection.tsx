import { Flex, Text, forwardRef } from "@chakra-ui/react"
import '../styles/index.css'
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection/TitleSection"
import { ForwardedRef } from "react"

export const AboutMeSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
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
                justifyContent='center'
                alignItems='center'
                flexDirection='column'>
                <Flex
                    w='100%'
                    h='10%'
                    className="flex-centralizer">
                    <TitleSection titulo='Sobre Mim' />
                </Flex>
                <Flex
                    w='100%'
                    h='100%'
                    className="flex-centralizer"
                    gap='3%'
                    flexDirection='column'>
                    <Text
                        className="text-content"
                        w='100%'>
                        , me chamo Natanael, tenho 21 anos e estou em busca de uma primeira oportunidade de emprego na área da tecnologia!
                    </Text>
                    <Text
                        className="text-content"
                        w='100%'>
                        Trabalhei dois anos como auxiliar de loja em um supermercado, essa experiência me ensinou a ser uma pessoa mais responsável, além de gostar de receber feedbacks para entender no que posso melhorar, assim como resolver problemas, pois, para mim, é uma forma de estimular o crescimento.
                    </Text>
                    <Text
                        className="text-content"
                        w='100%'>
                        Atualmente curso o 4º semestre de Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos, onde encontrei novos desafios a serem superados, estou gostando bastante e cada vez mais estou evoluindo profissional e intelectualmente, não somente pelas aulas mas também por meio de projetos para empresas reais sendo esses realizados em equipe para simular uma situação de trabalho real.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
})