import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import '../styles/index.css'


export const Skill = () => {
    return (
        <Flex
            w='100%'
            borderRadius='20px'
            bg='black'
            h='100%'
            boxShadow='1px 1px 15px 0px white'
            alignItems='start'
            justifyContent='center'
            mb='30px'
            cursor='pointer'>
            <Flex
                w='60%'
                h='100%'
                flexDir="column"
                padding='3%'>
                <Box
                    mb='10px'>
                    <Heading
                        color='#7DAEF6'>
                        HTML, CSS e JavaScript
                    </Heading>
                </Box>
                <Box>
                    <Box
                        mb='10px'>
                        <Text>
                            HTML, CSS e Javascript, também conhecidas como santíssima trindade da web, formam o principal conjunto de tecnologias para qualquer aplicação web. Já deu para ver que é de suma importância entender MUITO bem esses caras.
                        </Text>
                    </Box>
                    {/* <Box
                        mb='10px'>
                        <Heading
                            fontSize='20px'
                            color='#93CAF1'>
                            Nível De Conhecimento:
                        </Heading>
                    </Box>
                    <Flex
                        w='100%'
                        alignItems='center'>
                        <Progress value={80} hasStripe={true} w='90%'/>
                        <Text ml='10px'>80%</Text>
                    </Flex> */}
                </Box>
            </Flex>
            <Flex
                w='40%'
                h='100%'
                className="flex-centralizer">
                <svg width='311' height='142' viewBox='0 0 311 142' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(#clip0_20_345)'> <path d='M87.4107 -0.0800781L79.4457 89.1487L43.6425 99.0744L7.93793 89.1624L-0.0188446 -0.0800781H87.4107Z' fill='#00AD6F' /> <path d='M43.6959 91.4871L72.6267 83.4666L79.433 7.21631H43.6959V91.4871Z' fill='#07D58B' /> <path d='M28.2121 29.1078H43.6959V18.1626H16.2504L16.5123 21.099L19.2026 51.2611H43.6959V40.3159H29.2125L28.2121 29.1078ZM30.679 56.7339H19.6916L21.2249 73.9196L43.6455 80.1433L43.6959 80.1296V68.7419L43.6479 68.7546L31.4583 65.4632L30.679 56.7339Z' fill='#0F0F0F' /> <path d='M43.6582 51.2611H57.1361L55.8653 65.4563L43.6579 68.7512V80.1382L66.0963 73.9196L66.2608 72.0703L68.8332 43.255L69.1002 40.3159H43.6582V51.2611ZM43.6582 29.0811V29.1078H70.0961L70.3155 26.6478L70.8145 21.099L71.0759 18.1626H43.6582V29.0814V29.0811Z' fill='#0F0F0F' /> </g> <g clip-path='url(#clip1_20_345)'> <path d='M119.521 131.262L111.563 41.8105H199.03L191.062 131.248L155.243 141.197L119.521 131.262Z' fill='#00AD6F' /> <path d='M155.297 133.595L184.242 125.555L191.051 49.1265H155.297V133.595Z' fill='#07D48A' /> <path d='M155.297 81.534H169.787L170.786 70.2997H155.297V59.3281H155.336H182.754L182.492 62.2707L179.803 92.5056H155.297V81.534Z' fill='#0F0F0F' /> <path d='M155.364 110.025L155.314 110.039L143.12 106.738L142.34 97.9888H136.413H131.347L132.881 115.215L155.311 121.455L155.364 121.441V110.025Z' fill='#0F0F0F' /> <path d='M168.855 92.0396L167.537 106.731L155.325 110.032V121.447L177.773 115.214L177.939 113.362L179.842 92.0396H168.855Z' fill='#0F0F0F' /> <path d='M155.336 59.3281V66.1432V70.2713V70.2997H128.92H128.885L128.665 67.8328L128.165 62.2707L127.903 59.3281H155.336Z' fill='#0F0F0F' /> <path d='M155.297 81.5332V88.3483V92.4764V92.5048H143.29H143.255L143.035 90.0379L142.539 84.4758L142.277 81.5332H155.297Z' fill='#0F0F0F' /> </g> <g clip-path='url(#clip2_20_345)'> <path d='M230.706 88.976L223.388 0.166016L310.779 0.344484L303.042 88.976L267.414 99.2208L230.706 88.976Z' fill='#00AD6F' /> <path d='M267.414 90.6438V8.62402L303.402 8.743L296.984 82.1256L267.414 90.6438Z' fill='#07D48A' /> <path d='M263.56 18.3628H254.046V72.9531L246.645 71.5533V64.2046L237.836 62.8049V79.252L263.56 85.9008V18.3628ZM270.697 18.3628H297.036L295.274 28.8259H280.752V45.996H295.274L293.512 80.6517L270.697 85.9008V75.0527L286.112 69.8036L287.003 55.4562L270.697 57.8008V18.3628Z' fill='#0F0F0F' /> </g> <defs> <clipPath id='clip0_20_345'> <rect width='87.3918' height='99.3868' fill='white' /> </clipPath> <clipPath id='clip1_20_345'> <rect width='87.3911' height='99.3868' fill='white' transform='translate(111.601 41.8105)' /> </clipPath> <clipPath id='clip2_20_345'> <rect width='87.3911' height='99.3868' fill='white' transform='translate(223.388)' /> </clipPath> </defs> </svg>
            </Flex>
        </Flex>
    )
}