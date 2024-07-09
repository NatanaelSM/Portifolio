import { Link, Text, Img } from "@chakra-ui/react"

interface BtnInitialProps{
    siteRedirecionamento: string,
    texto: string,
    img: string
};

export const BtnInitial = ({siteRedirecionamento, texto, img}: BtnInitialProps) => {
    return (
        <Link
            w='245px'
            h='50px'
            borderRadius='10px'
            bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'
            alignItems='center'
            justifyContent={'center'}
            display='flex'
            href={siteRedirecionamento}
            target="_blank">
            <Text
                fontWeight='600'
                fontSize='20px'
                marginRight='5px'>
                {texto}
            </Text>
            <Img boxSize='35px' src={img} alt="LinkedIn" />
        </Link>
    )
}