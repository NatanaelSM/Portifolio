import { Flex, Heading, Img, Link, Text } from "@chakra-ui/react"
import '../../../pages/home/components/styles/index.css'

interface SwiperPropriedades {
    nome: string,
    img: string,
    descricao: string,
    linkRepositorio: string
}

export const SwiperContent = ({ nome, img, descricao, linkRepositorio }: SwiperPropriedades) => {
    return (
        <Flex
            w='100%'
            h='100%'
            className="flex-centralizer"
            flexDirection='column'
            gap='1%'
            p='3%'>
            <Flex
                w='100%'
                h='10%'
                className="flex-centralizer">
                <Heading
                    color='#7DAEF6'>
                    {nome}
                </Heading>
            </Flex>
            <Flex
                w='100%'
                h='50%'
                className="flex-centralizer">
                <Flex
                    boxShadow='1px 1px 15px 0px white'
                    borderRadius='10px'>
                    <Img src={img} alt='img-projeto' borderRadius='10px' />
                </Flex>
            </Flex>
            <Flex
                w='100%'
                h='30%'
                alignItems='center'>
                <Text
                    textAlign='start'>
                    {descricao}
                </Text>
            </Flex>
            <Flex
                w='100%'
                h='10%'
                className="flex-centralizer">
                <Link
                    target="_blank"
                    href={linkRepositorio}
                    className="btn">
                    Repositório
                </Link>
            </Flex>
        </Flex >
    )
}