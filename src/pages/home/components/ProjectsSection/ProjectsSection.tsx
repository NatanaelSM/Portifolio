import { Box, Flex, Heading, Text, forwardRef } from "@chakra-ui/react"
import '../styles/index.css'
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiperProjectsSection.css';
import { Pagination } from 'swiper/modules';
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection";
import { ForwardedRef } from "react";

export const ProjectsSection = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <Flex
            ref={ref}
            className="container-section"
            justifyContent='center'
            paddingY='3%'
            h='80vh'>
            <Flex
                flexDirection='column'
                w='100%'
                h='100%'>
                <Flex
                    w='100%'
                    h='10%'
                    className="flex-centralizer">
                    <TitleSection titulo='Projetos' />
                </Flex>
                <Flex
                    pt='3%'
                    h='90%'>
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
            </Flex>
        </Flex >
    )
})