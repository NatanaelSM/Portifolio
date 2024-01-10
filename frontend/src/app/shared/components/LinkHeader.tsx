import { Link } from "@chakra-ui/react"

interface LinkHeaderProps {
    conteudo: string;
  }

export const LinkHeader = ({conteudo} : LinkHeaderProps) => {
    return (
        <Link
            fontWeight='600'
            opacity='0.8'
            borderBottom='2px solid white'
            _hover={{
                textDecor: 'none',
                borderBottom: '2px',
                opacity: 1
            }}>{conteudo}
        </Link>
    )
}