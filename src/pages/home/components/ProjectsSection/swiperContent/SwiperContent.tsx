import { Flex, Heading, Img, Link, Text } from "@chakra-ui/react"

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
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            gap='1%'
            p='3%'>
            <Flex
                w='100%'
                h='10%'
                justifyContent='center'
                alignItems='center'>
                <Heading
                    color='#7DAEF6'>
                    {nome}
                </Heading>
            </Flex>
            <Flex
                w='100%'
                h='50%'
                justifyContent='center'
                alignItems='center'>
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
                justifyContent='center'
                alignItems='center'>
                <Link
                    target="_blank"
                    href={linkRepositorio}
                    w='245px'
                    h='50px'
                    borderRadius='10px'
                    bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'
                    alignItems='center'
                    justifyContent={'center'}
                    display='flex'>
                    Repositório
                </Link>
            </Flex>
        </Flex >
    )
}