import { Flex, Img, Text, forwardRef } from "@chakra-ui/react"
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection"
import { ForwardedRef } from "react"
import imgAboutMe from '../../../../assets/tecnology.png'

export const AboutMeSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Flex
            ref={ref}
            bg='black'
            paddingY='3%'
            h='90vh'
            w='100%'
            paddingInline='20rem'
            flexDirection='column'>
            <Flex
                justifyContent='center'
                alignItems='center'
                w='100%'>
                <TitleSection titulo='Sobre Mim' />
            </Flex>
            <Flex
                w='100%'
                justifyContent='center'
                pt='3%'>
                <Flex
                    flexDirection='column'
                    w='60%'
                    justifyContent='center'
                    alignItems='center'>
                    <Text
                        fontWeight='700'
                        fontSize='25px'>
                        Olá, me chamo Natanael, tenho 21 anos e estou em busca de uma primeira oportunidade de emprego na área da tecnologia!
                    </Text>
                    <Text
                        fontWeight='700'
                        fontSize='25px'>
                        Trabalhei dois anos como auxiliar de loja em um supermercado, essa experiência me ensinou a ser uma pessoa mais responsável, além de gostar de receber feedbacks para entender no que posso melhorar, assim como resolver problemas, pois, para mim, é uma forma de estimular o crescimento.
                    </Text>
                    <Text
                        fontWeight='700'
                        fontSize='25px'>
                        Atualmente curso o 4º semestre de Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos, onde encontrei novos desafios a serem superados, estou gostando bastante e cada vez mais estou evoluindo profissional e intelectualmente, não somente pelas aulas mas também por meio de projetos para empresas reais sendo esses realizados em equipe para simular uma situação de trabalho real.
                    </Text>
                </Flex>
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    w='40%'>
                    <Img src={imgAboutMe} alt='img-AboutMe' />
                </Flex>
            </Flex>

        </Flex>
    )
})