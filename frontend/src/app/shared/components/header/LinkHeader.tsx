import { Link } from "@chakra-ui/react"

interface LinkHeaderProps {
    conteudo: string;
  }

export const LinkHeader = ({conteudo} : LinkHeaderProps) => {
    return (
        <Link
            fontWeight='600'
            opacity='0.7'
            borderBottom='2px solid black'
            _hover={{
                textDecor: 'none',
                borderBottom:'2px solid #9B79FC',
                opacity: 1
            }}>{conteudo}
        </Link>
    )
}