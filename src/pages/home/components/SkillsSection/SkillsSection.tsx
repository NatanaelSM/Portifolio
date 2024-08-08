import {  Flex, forwardRef, Heading } from "@chakra-ui/react"
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
            bg='#0B0B0B'
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

                <Flex
                    w='100%'
                    mt='3%'
                    gap='50px'
                    direction='column'
                    alignItems='center'>
                    <Flex
                        direction='row'
                        w='70%'>
                        <Flex
                            borderTopLeftRadius='20px'
                            borderBottomLeftRadius='20px'
                            h='500px'
                            w='7%'
                            alignItems='center'
                            justifyContent='center'
                            bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'>
                            <Flex
                                h='50px'
                                transform='rotate(-90deg)'>
                                <Heading>FRONTEND</Heading>
                            </Flex>
                        </Flex>
                        <Flex
                            w='86%'
                            wrap='wrap'
                            justifyContent='center'
                            alignItems='center'
                            bg='#212121'
                            gap='30px'>
                            <Skill nome="HTML"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} />
                            <Skill nome="CSS"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} />
                            <Skill nome="JavaScript"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                            <Skill nome="TypeScript"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                            <Skill nome="React"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" } />
                            
                        </Flex>
                        <Flex
                            borderTopRightRadius='20px'
                            borderBottomRightRadius='20px'
                            h='500px'
                            w='7%'
                            alignItems='center'
                            justifyContent='center'
                            bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'>
                        </Flex>
                    </Flex>
                    <Flex
                        direction='row'
                        w='70%'>
                        <Flex
                            borderTopLeftRadius='20px'
                            borderBottomLeftRadius='20px'
                            h='500px'
                            w='7%'
                            alignItems='center'
                            justifyContent='center'
                            bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'>
                            <Flex
                                h='50px'
                                transform='rotate(-90deg)'>
                                <Heading>BACKEND</Heading>
                            </Flex>
                        </Flex>
                        <Flex
                            w='86%'
                            wrap='wrap'
                            justifyContent='center'
                            alignItems='center'
                            bg='#212121'
                            gap='30px'>
                            <Skill nome="MySQL"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"} />
                            <Skill nome="NodeJS"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"} />
                            <Skill nome="JavaScript"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                            <Skill nome="TypeScript"img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                        </Flex>
                        <Flex
                            borderTopRightRadius='20px'
                            borderBottomRightRadius='20px'
                            h='500px'
                            w='7%'
                            alignItems='center'
                            justifyContent='center'
                            bg='linear-gradient(92deg, #9b79fc 2.07%, #ffffff40 160.82%);'>
                        </Flex>
                    </Flex>

                </Flex>
                {/* <Grid
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
                            <Skill nome=""tituloSkill="HTML" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} />
                            <Skill nome=""tituloSkill="CSS" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} />
                            <Skill nome=""tituloSkill="JavaScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                            <Skill nome=""tituloSkill="TypeScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
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
                            <Skill nome=""tituloSkill="TypeScript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                            <Skill nome=""tituloSkill="Node.js " img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"} />
                            <Skill nome=""tituloSkill="MySql" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"} />
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
                            <Skill nome=""tituloSkill="React" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"} />

                        </Flex>
                    </Center>
                </Grid> */}

            </Flex>
        </Flex>
    )
})
