import { Flex, forwardRef, Heading, Link } from "@chakra-ui/react"
import '../styles/index.css'
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiperProjectsSection.css';
import { Pagination } from 'swiper/modules';
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection/TitleSection";
import { ForwardedRef } from "react";

export const ProjectsSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {

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
                            <Heading>S.O.G.A.P</Heading>
                            <Link
                                className="btn"
                                href="https://github.com/BuzzTech-API/API_ADS_3SEMESTRE_2023.2"
                            >
                                Clique aqui
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Heading>Formulário Simples</Heading>
                            <Link
                                className="btn"
                                href="https://github.com/NatanaelSM/formulario-react"
                            >
                                Clique aqui
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </Flex>
            </Flex>
        </Flex >
    )
})