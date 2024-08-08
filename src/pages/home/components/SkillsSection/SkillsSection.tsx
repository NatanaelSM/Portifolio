import { Center, Flex, forwardRef, Grid, Heading } from "@chakra-ui/react"
import { TitleSection } from "../../../../shared/titleSection/TitleSection"
import { ForwardedRef } from "react"
import { Skill } from "./components/Skill"

export const SkillsSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Flex
            ref={ref}
            justifyContent='center'
            paddingY='3%'
            w='100%'
            bg='black'
            paddingInline='20rem'>
            <Flex
                flexDirection='column'
                w='100%'
                h='100%'
                justifyContent='center'
                alignItems='center'>
                <Flex
                    w='100%'
                    justifyContent='center'
                    alignItems='center'>
                    <TitleSection titulo='Habilidades' />
                </Flex>
                <Grid
                    w='80%'
                    mt='3%'
                    borderRadius='20px'
                    templateColumns='repeat(3, 1fr)'
                    justifyContent='center'
                    alignItems='center'
                    boxShadow='1px 1px 3px 3px #7DAEF6'
                    bg=''>
                    <Center
                        display='flex'
                        flexDirection='column'
                        h='100%'
                        p='10%'>
                        <Heading color='#7DAEF6' mb='3%'>Frontend</Heading>
                        <Flex h='30px' w='100%' bg='#f0f0f0' borderRadius='20px' mb='3%' />
                        <Flex
                            justifyContent='center'
                            alignItems='center'
                            w='100%'
                            direction='column'>
                            <Skill tituloSkill="HTML" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} />
                            <Skill tituloSkill="CSS" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} />
                            <Skill tituloSkill="JavaScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                            <Skill tituloSkill="TypeScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                        </Flex>
                    </Center>
                    <Center
                        display='flex'
                        flexDirection='column'
                        h='100%'
                        p='10%'
                        borderLeft='2px solid  #7DAEF6'
                        borderRight='2px solid  #7DAEF6'>
                        <Heading color='#7DAEF6' mb='3%'>Backend</Heading>
                        <Flex h='30px' w='100%' bg='#f0f0f0' borderRadius='20px' mb='3%' />
                        <Flex
                            justifyContent='center'
                            alignItems='center'
                            w='100%'
                            direction='column'>
                            <Skill tituloSkill="TypeScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                            <Skill tituloSkill="Node.js " img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"} />
                            <Skill tituloSkill="MySql" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"} />
                        </Flex>
                    </Center>
                    <Center
                        display='flex'
                        flexDirection='column'
                        h='100%'
                        p='10%'>
                        <Heading color='#7DAEF6' mb='3%'>Frameworks</Heading>
                        <Flex h='30px' w='100%' bg='#f0f0f0' borderRadius='20px' mb='3%' />
                        <Flex
                            justifyContent='center'
                            alignItems='center'
                            w='100%'
                            direction='column'>
                            <Skill tituloSkill="React" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"} />

                        </Flex>
                    </Center>
                </Grid>

            </Flex>
        </Flex>
    )
})
