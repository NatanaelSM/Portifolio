import { StarIcon } from "@chakra-ui/icons";
import { Flex, Img } from "@chakra-ui/react";

interface NivelSkillProps {
    nivel: number;
}

export const NivelSkill = ({ nivel }: NivelSkillProps) => {

    const gerarNivelSkill = () => {
        const estrelas = [];

        for (let x = 0; x < nivel; x++) {
            estrelas.push(
                <StarIcon color='yellow' />
            );
        }

        if (estrelas.length < 5) {
            for (let x = 0; x < nivel; x++) {
                estrelas.push(
                    <StarIcon color='gray' />
                );
            }
        }


        return estrelas;
    };

    return (
        <Flex
            direction='row'
            gap='5px'
            w='100%'>
            {gerarNivelSkill()}
        </Flex>
    );
};
