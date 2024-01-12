import { Box, Flex, Heading } from "@chakra-ui/react"

interface TitleSectionProps {
    titulo: string,
}

export const TitleSection = ({ titulo }: TitleSectionProps) => {
    return (
        <Flex
            h='20%'
            w='100%'
            alignItems='center'
            justifyContent='center'>
            <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="26" viewBox="0 0 52 26" fill="none">
                    <rect x="6" width="45.5" height="5.2" rx="2.6" fill="#1960CB" />
                    <rect x="0.899902" y="10.3999" width="39" height="5.2" rx="2.6" fill="#13438C" />
                    <rect x="6" y="20.8" width="45.5" height="5.2" rx="2.6" fill="#142D52" />
                </svg>

            </Box>
            <Box
                marginInline='2%'>
                <Heading
                    font-family='Radley'
                    fontStyle='italic'
                    fontSize='50px'
                    fontWeight='600'
                    color='#7DAEF6'>
                    {titulo}
                </Heading>
            </Box>
            <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="26" viewBox="0 0 56 26" fill="none">
<rect width="45.5" height="5.2" rx="2.6" fill="#1960CB"/>
<rect x="16.8999" y="10.3999" width="39" height="5.2" rx="2.6" fill="#13438C"/>
<rect y="20.8" width="45.5" height="5.2" rx="2.6" fill="#142D52"/>
</svg>
            </Box>
        </Flex>
    )
}