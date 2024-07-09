import { Box, Flex, Heading, Img, Text, forwardRef } from "@chakra-ui/react"
import { TitleSection } from "../../../../shared/titleSection/TitleSection"
import { ForwardedRef } from "react"
import javaImg from '../../../../assets/java.png'

export const SkillsSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Flex
            ref={ref}
            justifyContent='center'
            alignItems='center'
            bg='black'
            paddingY='3%'
            flexDir='column'
            paddingInline='20rem'>
            <Flex
                w='100%'
                h='100%'
                flexDir='column'
            >
                <Flex
                    w='100%'
                    h='10%'
                    justifyContent='center'
                    alignItems='center'>
                    <TitleSection titulo='Habilidades' />
                </Flex>
                <Flex
                    w='100%'
                    h='80%'
                    flexDir='column'
                    alignItems='center'
                    pt='3%'>
                    <Flex
                        w='100%'
                        borderRadius='20px'
                        bg='black'
                        boxShadow='1px 1px 15px 0px white'
                        alignItems='start'
                        justifyContent='center'
                        mb='30px'
                        _hover={{
                            boxShadow: '1px 1px 15px 0px #7DAEF6'
                        }}>
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
                            </Box>
                        </Flex>
                        <Flex
                            w='40%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <svg width='311' height='142' viewBox='0 0 311 142' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(#clip0_20_345)'> <path d='M87.4107 -0.0800781L79.4457 89.1487L43.6425 99.0744L7.93793 89.1624L-0.0188446 -0.0800781H87.4107Z' fill='#7DAEF6' /> <path d='M43.6959 91.4871L72.6267 83.4666L79.433 7.21631H43.6959V91.4871Z' fill='#7DAEF6' /> <path d='M28.2121 29.1078H43.6959V18.1626H16.2504L16.5123 21.099L19.2026 51.2611H43.6959V40.3159H29.2125L28.2121 29.1078ZM30.679 56.7339H19.6916L21.2249 73.9196L43.6455 80.1433L43.6959 80.1296V68.7419L43.6479 68.7546L31.4583 65.4632L30.679 56.7339Z' fill='#0F0F0F' /> <path d='M43.6582 51.2611H57.1361L55.8653 65.4563L43.6579 68.7512V80.1382L66.0963 73.9196L66.2608 72.0703L68.8332 43.255L69.1002 40.3159H43.6582V51.2611ZM43.6582 29.0811V29.1078H70.0961L70.3155 26.6478L70.8145 21.099L71.0759 18.1626H43.6582V29.0814V29.0811Z' fill='#0F0F0F' /> </g> <g clip-path='url(#clip1_20_345)'> <path d='M119.521 131.262L111.563 41.8105H199.03L191.062 131.248L155.243 141.197L119.521 131.262Z' fill='#7DAEF6' /> <path d='M155.297 133.595L184.242 125.555L191.051 49.1265H155.297V133.595Z' fill='#7DAEF6' /> <path d='M155.297 81.534H169.787L170.786 70.2997H155.297V59.3281H155.336H182.754L182.492 62.2707L179.803 92.5056H155.297V81.534Z' fill='#0F0F0F' /> <path d='M155.364 110.025L155.314 110.039L143.12 106.738L142.34 97.9888H136.413H131.347L132.881 115.215L155.311 121.455L155.364 121.441V110.025Z' fill='#0F0F0F' /> <path d='M168.855 92.0396L167.537 106.731L155.325 110.032V121.447L177.773 115.214L177.939 113.362L179.842 92.0396H168.855Z' fill='#0F0F0F' /> <path d='M155.336 59.3281V66.1432V70.2713V70.2997H128.92H128.885L128.665 67.8328L128.165 62.2707L127.903 59.3281H155.336Z' fill='#0F0F0F' /> <path d='M155.297 81.5332V88.3483V92.4764V92.5048H143.29H143.255L143.035 90.0379L142.539 84.4758L142.277 81.5332H155.297Z' fill='#0F0F0F' /> </g> <g clip-path='url(#clip2_20_345)'> <path d='M230.706 88.976L223.388 0.166016L310.779 0.344484L303.042 88.976L267.414 99.2208L230.706 88.976Z' fill='#7DAEF6' /> <path d='M267.414 90.6438V8.62402L303.402 8.743L296.984 82.1256L267.414 90.6438Z' fill='#7DAEF6' /> <path d='M263.56 18.3628H254.046V72.9531L246.645 71.5533V64.2046L237.836 62.8049V79.252L263.56 85.9008V18.3628ZM270.697 18.3628H297.036L295.274 28.8259H280.752V45.996H295.274L293.512 80.6517L270.697 85.9008V75.0527L286.112 69.8036L287.003 55.4562L270.697 57.8008V18.3628Z' fill='#0F0F0F' /> </g> <defs> <clipPath id='clip0_20_345'> <rect width='87.3918' height='99.3868' fill='white' /> </clipPath> <clipPath id='clip1_20_345'> <rect width='87.3911' height='99.3868' fill='white' transform='translate(111.601 41.8105)' /> </clipPath> <clipPath id='clip2_20_345'> <rect width='87.3911' height='99.3868' fill='white' transform='translate(223.388)' /> </clipPath> </defs> </svg>
                        </Flex>
                    </Flex>
                    <Flex
                        w='100%'
                        borderRadius='20px'
                        bg='black'
                        boxShadow='1px 1px 15px 0px white'
                        alignItems='start'
                        justifyContent='center'
                        mb='30px'
                        _hover={{
                            boxShadow: '1px 1px 15px 0px #7DAEF6'
                        }}>
                        <Flex
                            w='60%'
                            h='100%'
                            flexDir="column"
                            padding='3%'>
                            <Box
                                mb='10px'>
                                <Heading
                                    color='#7DAEF6'>
                                    React JS
                                </Heading>
                            </Box>
                            <Box>
                                <Box
                                    mb='10px'>
                                    <Text>
                                        O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            w='40%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <svg width='149' height='133' viewBox='0 0 149 133' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(#clip0_26_389)'> <path d='M74.4547 79.515C81.7849 79.515 87.7271 73.5727 87.7271 66.2426C87.7271 58.9125 81.7849 52.9702 74.4547 52.9702C67.1246 52.9702 61.1824 58.9125 61.1824 66.2426C61.1824 73.5727 67.1246 79.515 74.4547 79.515Z' fill='#7DAEF6' /> <path d='M74.4548 93.4351C113.787 93.4351 145.672 81.2608 145.672 66.243C145.672 51.2251 113.787 39.0508 74.4548 39.0508C35.1224 39.0508 3.23718 51.2251 3.23718 66.243C3.23718 81.2608 35.1224 93.4351 74.4548 93.4351Z' stroke='#7DAEF6' stroke-width='6.47433' /> <path d='M50.9056 79.8396C70.5718 113.902 97.0577 135.429 110.064 127.92C123.069 120.411 117.67 86.7103 98.0038 52.6474C78.3376 18.5846 51.8517 -2.94163 38.8459 4.56728C25.8401 12.0762 31.2394 45.7768 50.9056 79.8396Z' stroke='#7DAEF6' stroke-width='6.47433' /> <path d='M50.9056 52.6486C31.2394 86.7115 25.8401 120.412 38.8459 127.921C51.8517 135.43 78.3376 113.904 98.0038 79.8408C117.67 45.7779 123.069 12.0774 110.064 4.56846C97.0577 -2.94045 70.5718 18.5858 50.9056 52.6486Z' stroke='#7DAEF6' stroke-width='6.47433' /> </g> <defs> <clipPath id='clip0_26_389'> <rect width='149' height='132.487' fill='white' /> </clipPath> </defs> </svg>
                        </Flex>
                    </Flex>
                    <Flex
                        w='100%'
                        borderRadius='20px'
                        bg='black'
                        boxShadow='1px 1px 15px 0px white'
                        alignItems='start'
                        justifyContent='center'
                        mb='30px'
                        _hover={{
                            boxShadow: '1px 1px 15px 0px #7DAEF6'
                        }}>
                        <Flex
                            w='60%'
                            h='100%'
                            flexDir="column"
                            padding='3%'>
                            <Box
                                mb='10px'>
                                <Heading
                                    color='#7DAEF6'>
                                    TypeScript
                                </Heading>
                            </Box>
                            <Box>
                                <Box
                                    mb='10px'>
                                    <Text>
                                        TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            w='40%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <svg width='98' height='98' viewBox='0 0 98 98' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(#clip0_31_454)'> <path d='M0 49V0H98V98H0' fill='#7DAEF6' /> <path d='M21.4865 49.1717V53.1652H34.2265V89.4252H43.267V53.1652H56.007V49.2452C56.007 47.0402 56.007 45.2517 55.909 45.2027C55.909 45.1292 48.1425 45.1047 38.71 45.1047L21.56 45.1782V49.1962L21.4865 49.1717V49.1717ZM78.743 45.0802C81.242 45.6682 83.153 46.7952 84.868 48.5837C85.7745 49.5637 87.122 51.2787 87.22 51.7197C87.22 51.8667 82.9815 54.7332 80.409 56.3257C80.311 56.3992 79.919 55.9827 79.527 55.3457C78.253 53.5327 76.9545 52.7487 74.921 52.6017C71.981 52.4057 70.021 53.9492 70.021 56.5217C70.021 57.3057 70.168 57.7467 70.462 58.3837C71.1235 59.7312 72.3485 60.5397 76.146 62.2057C83.153 65.2192 86.191 67.2037 88.0285 70.0457C90.111 73.2307 90.5765 78.2287 89.18 81.9772C87.612 86.0687 83.79 88.8372 78.3265 89.7437C76.6115 90.0377 72.6915 89.9887 70.854 89.6702C66.934 88.9352 63.1855 86.9752 60.8825 84.4517C59.976 83.4717 58.2365 80.8502 58.3345 80.6787L59.2655 80.0907L62.9405 77.9592L65.709 76.3422L66.346 77.1997C67.1545 78.4737 68.9675 80.1887 70.021 80.7767C73.206 82.4182 77.469 82.1977 79.576 80.2867C80.4825 79.4537 80.8745 78.5717 80.8745 77.3467C80.8745 76.2197 80.703 75.7052 80.1395 74.8477C79.3555 73.7697 77.7875 72.8877 73.3775 70.9277C68.306 68.7717 66.15 67.3997 64.141 65.2927C62.9895 64.0187 61.936 62.0342 61.446 60.3927C61.0785 58.9717 60.956 55.4927 61.299 54.0962C62.3525 49.1962 66.052 45.7662 71.344 44.7862C73.059 44.4432 77.1015 44.5902 78.792 45.0312L78.743 45.0802V45.0802Z' fill='#0F0F0F' /> </g> <defs> <clipPath id='clip0_31_454'> <rect width='98' height='98' fill='white' /> </clipPath> </defs> </svg>
                        </Flex>
                    </Flex>
                    <Flex
                        w='100%'
                        borderRadius='20px'
                        bg='black'
                        boxShadow='1px 1px 15px 0px white'
                        alignItems='start'
                        justifyContent='center'
                        mb='30px'
                        _hover={{
                            boxShadow: '1px 1px 15px 0px #7DAEF6'
                        }}>
                        <Flex
                            w='60%'
                            h='100%'
                            flexDir="column"
                            padding='3%'>
                            <Box
                                mb='10px'>
                                <Heading
                                    color='#7DAEF6'>
                                    MySQL
                                </Heading>
                            </Box>
                            <Box>
                                <Box
                                    mb='10px'>
                                    <Text>
                                        O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            w='40%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <svg width='138' height='130' viewBox='0 0 138 130' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M101.501 57.7129C81.627 57.7129 65.5541 73.7858 65.5541 93.6596C65.5541 113.533 81.627 129.691 101.501 129.691C121.375 129.691 137.448 113.533 137.448 93.6596C137.448 73.7858 121.375 57.7129 101.501 57.7129ZM78.822 71.7522H82.9314C82.9314 71.8504 82.8893 72.0748 82.9314 72.0888C84.8809 73.0705 86.3816 74.8237 88.808 74.9499C92.8052 75.1463 95.8066 77.3202 98.808 79.5642C103.745 83.2529 106.704 88.2599 108.976 93.7578C109.551 95.1603 110.253 96.5909 111.08 97.8672C111.571 98.6246 112.342 99.3679 113.184 99.7185C117.069 101.317 120.421 103.604 123.436 106.942C120.954 107.46 118.738 107.923 116.213 108.456C116.704 108.989 116.943 109.34 117.307 109.634C119.495 111.416 121.725 113.253 123.941 115.006C124.208 115.216 124.628 115.287 124.951 115.427V115.679C122.988 114.669 120.982 113.772 119.074 112.65C117.644 111.822 116.171 110.855 115.049 109.705C113.352 107.993 113.605 107.446 115.975 106.928C117.588 106.577 119.271 106.409 121.01 106.17C120.926 105.932 120.884 105.665 120.758 105.581C118.205 103.828 115.793 101.808 112.609 101.135C110.842 100.756 109.902 99.6204 109.159 98.1056C107.307 94.3048 105.596 90.4479 103.366 86.8574C100.463 82.187 96.1852 78.849 90.8556 76.8574C90.6172 76.7732 90.3367 76.5909 90.0983 76.6049C86.9286 76.8854 84.6425 74.9219 82.0338 73.7438C81.6551 73.5755 81.2483 73.323 80.8556 73.323C80.3648 73.323 79.6915 73.4352 79.4251 73.7438C79.1726 74.0383 79.2427 74.6835 79.4251 75.0902C79.7336 75.7774 80.3087 76.3525 80.6873 77.0257C81.7392 78.877 82.6929 80.7003 83.7168 82.5656C84.7547 84.4731 85.8767 86.4086 86.8304 88.3581C87.0828 88.863 87.1109 89.6905 86.9146 90.2094C85.8627 92.8882 85.5681 95.539 86.073 98.3581C86.3535 99.9009 86.8024 101.331 88.3451 102.552C89.3129 100.209 88.6677 97.6007 90.9538 96.086C92.6369 99.0874 94.362 102.103 96.073 105.16C95.9608 105.259 95.7645 105.329 95.6523 105.413C94.0955 103.491 92.6088 101.598 90.9538 99.5362C90.7995 100.42 90.7294 101.247 90.4489 101.977C90.1684 102.678 89.7757 103.618 89.1866 103.828C88.6116 104.024 87.5176 103.632 86.9987 103.155C85.2035 101.472 84.6144 99.1575 84.6425 96.8574C84.6705 94.8097 85.0352 92.734 85.484 90.7284C85.7084 89.7045 85.6523 89.0734 85.0632 88.1197C83.8991 86.2122 83.0857 84.0944 82.1179 82.0748C81.599 80.9808 81.1922 79.8027 80.4349 78.877C78.6957 76.7311 76.9566 74.6414 78.822 71.7522ZM87.8122 79.4661C88.289 79.6905 88.9061 79.7746 89.1586 80.1393C89.4531 80.5741 89.397 81.2473 89.4952 81.8223C89.3269 81.8363 89.1726 81.8924 88.9903 81.9065C88.5134 81.2192 88.0366 80.4899 87.5597 79.8027C87.6298 79.6905 87.742 79.5923 87.8122 79.4661Z' fill='#7DAEF6' /> <path d='M62.8612 0.0127396C26.9566 0.433497 -1.2202 10.4335 0.0420758 22.355C1.30435 34.2905 31.4867 43.6874 67.4054 43.2666C103.324 42.8459 131.403 32.8599 130.14 20.9244C128.878 8.98891 98.7799 -0.393993 62.8612 0.0127396ZM0.0420758 24.2905V47.895C-0.0140253 48.3999 -0.0140253 48.9749 0.0420758 49.4939C1.30435 61.4294 31.4867 70.7421 67.4054 70.3214C67.4896 70.3214 67.5737 70.3214 67.6579 70.3214C73.0436 63.1124 80.8276 57.5023 90.3367 54.7814C101.851 51.4995 113.675 53.0984 123.422 58.3157C127.405 55.6369 129.818 52.6355 130.14 49.4939H130.225V25.8052C129.032 37.0535 101.767 46.226 67.4054 46.6327C31.5007 47.0535 1.3885 37.7407 0.126227 25.8052C0.0701262 25.3003 0.0701262 24.7954 0.126227 24.2905H0.0420758ZM0.0420758 51.9202V75.6089C-0.0140253 76.1138 -0.0140253 76.6047 0.0420758 77.1236C1.20617 88.1755 27.223 96.9553 59.5933 97.867C58.9482 89.536 60.9678 81.3733 65.0492 74.3466C30.1964 74.3326 1.34642 65.104 0.126227 53.435C0.0701262 52.93 0.0701262 52.4251 0.126227 51.9202H0.0420758ZM130.225 53.5191C129.986 55.8193 128.612 58.0072 126.368 60.0689C127.686 60.9104 129.004 61.766 130.225 62.7618V53.5191ZM0.0420758 79.6341V103.239C-0.0140253 103.744 -0.0140253 104.234 0.0420758 104.753C1.30435 116.689 31.4867 126.086 67.4054 125.665C69.4952 125.637 71.5849 125.581 73.6186 125.497C67.9524 120.546 63.5064 114.108 61.1922 106.521C60.7294 105.006 60.3787 103.505 60.0982 101.99C27.5035 101.163 1.30435 92.2709 0.126227 81.1629C0.0701262 80.658 0.0701262 80.1531 0.126227 79.6482H0.0420758V79.6341Z' fill='#7DAEF6' /> </svg>
                        </Flex>
                    </Flex>
                    <Flex
                        w='100%'
                        borderRadius='20px'
                        bg='black'
                        boxShadow='1px 1px 15px 0px white'
                        alignItems='start'
                        justifyContent='center'
                        mb='30px'
                        _hover={{
                            boxShadow: '1px 1px 15px 0px #7DAEF6'
                        }}>
                        <Flex
                            w='60%'
                            h='100%'
                            flexDir="column"
                            padding='3%'>
                            <Box
                                mb='10px'>
                                <Heading
                                    color='#7DAEF6'>
                                    Java
                                </Heading>
                            </Box>
                            <Box>
                                <Box
                                    mb='10px'>
                                    <Text>
                                        A linguagem Java é uma linguagem de programação de propósito geral que foi desenvolvida pela Sun Microsystems na década de 1990. Ela é conhecida por ser portável, orientada a objetos, robusta, e ter uma sintaxe relativamente simples e segura.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            w='40%'
                            h='100%'
                            justifyContent='center'
                            alignItems='center'>
                            <Img src={javaImg} alt='java' />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
})