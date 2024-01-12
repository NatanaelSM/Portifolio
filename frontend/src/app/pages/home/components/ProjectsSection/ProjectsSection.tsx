import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import '../styles/index.css'
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiperProjectsSection.css';
import { Pagination } from 'swiper/modules';

export const ProjectsSection = () => {

    return (
        <Flex
            className="container-section"
            justifyContent='center'
            paddingY='5%'>
            <Box
                w='100%'>
                <Flex
                    h='20%'
                    justifyContent='center'>
                    <Heading
                        font-family='Radley'
                        fontStyle='italic'
                        fontSize='50px'
                        fontWeight='600'
                        color='#7DAEF6'>
                        Projetos
                    </Heading>
                </Flex>
                <Flex
                    justifyContent='center'
                    h='80%'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        <SwiperSlide>
                            <Box
                                h='15%'
                                w='100%'>
                                <Heading>
                                    Nome Projeto
                                </Heading>
                            </Box>
                            <Flex
                                bg='white'
                                w='80%'
                                h='50%'>
                                <Text>IMG</Text>
                            </Flex>
                            <Flex
                                w='100%'
                                h='35%'
                                mt='25px'>
                                <Text
                                    w='100%'
                                    textAlign='start'>
                                    Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projetoDescrição do projetoDescrição do projeto 
                                </Text>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </Flex>
            </Box>
        </Flex >
    )
}