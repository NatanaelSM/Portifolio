import { Box, Flex, Text, Img } from "@chakra-ui/react"

interface SkillProps {
    tituloSkill: string,
    img: string,
}

export const Skill = ({ tituloSkill, img }: SkillProps) => {
    return (
        <Flex
            w='300px'
            justifyContent='center'
            alignItems='center'
            mt='3%'
            p='20px'
            _hover={{
                boxShadow: '1px 1px 15px 0px #7DAEF6'
            }}>
            <Flex
                pr='5px'
                justifyContent='center'
                alignItems='center'>
                <Img src={img} h='50px'/>
            </Flex>
            <Box>
                <Text
                    color='#ababab'>
                    {tituloSkill}
                </Text>
            </Box>
        </Flex>
    )
}
