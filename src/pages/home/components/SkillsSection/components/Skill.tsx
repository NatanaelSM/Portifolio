import { Flex, Image, Text } from "@chakra-ui/react"

interface SkillProps {
    img: string,
    nome: string
}

export const Skill = ({ img, nome }: SkillProps) => {
    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            p='20px'
            direction='column'
            gap='15px'>
                <Image src={img} boxSize='150px' />
                <Text>{nome}</Text>
        </Flex>
    )
}
