import { Flex, Heading, forwardRef } from "@chakra-ui/react"
import '../styles/index.css'
import sogapImg from "../../../../assets/sogap.png"
import portifolioImg from "../../../../assets/portifolio.png"
import formularioSimplesImg from "../../../../assets/formularioSimples.png"
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiperProjectsSection.css';
import { Navigation, Pagination } from 'swiper/modules';
import { TitleSection } from "../../../../shared/components/titleSection/TitleSection";
import { ForwardedRef } from "react";
import { SwiperContent } from "../../../../shared/components/swiperContent/SwiperContent";

export const ProjectsSection = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <Flex
            ref={ref}
            className="container-section"
            justifyContent='center'
            paddingY='3%'
            h='100vh'>
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
                    h='90%'
                    pt='3%'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                            type: "bullets"
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <SwiperContent nome="Formulário Simples" img={formularioSimplesImg} descricao="Neste projeto é possível cadastrar pessoas através de um formulário, visualizar as pessoas cadastradas através de uma tabela onde também é possível exclui-las. Para esse projeto utilizei React, Javascript e Chakra UI para o construção do frontend e para o backend utilizei Javascript para a parte lógia e o Localstorage para persistir os dados." linkRepositorio="https://github.com/NatanaelSM/formulario-react" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperContent nome="S.O.G.A.P" img={sogapImg} descricao="Plataforma web que permite criar, monitorar e registrar cada etapa dos processos regulatórios essenciais para uma organização. O foco é garantir que todos os processos necessários, conforme definido pelo time de regulatório, estejam sendo rigorosamente cumpridos. A plataforma será um recurso valioso para rastrear o progresso, assegurando a conformidade e gerando evidências para cada etapa." linkRepositorio="https://github.com/BuzzTech-API/API_ADS_3SEMESTRE_2023.2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperContent nome="Portifólio" img={portifolioImg} descricao="Projeto frontend visando me apresentar e mostrar minhas habilidades a quem estiver interessado, cada vez mais pretendo aperfeiçoá-lo para que assim possa representar minha experiência e habilidades técnicas. As tecnologias utilizadas foram: React, TypeScript e Chakra UI." linkRepositorio="https://github.com/NatanaelSM/NatanaelSM.github.io" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Heading>
                                EM BREVE ...
                            </Heading>
                        </SwiperSlide>
                    </Swiper>
                </Flex>
            </Flex>
        </Flex >
    )
})