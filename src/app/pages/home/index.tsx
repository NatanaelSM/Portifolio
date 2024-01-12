import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection"
import { InitialContentSection } from "./components/InitialContentSection/InitialContentSection"
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection"
import { HabilitsSection } from "./components/HabilitsSection/SkillsSection"

export const Home = () => {

    return(
        <>
            <InitialContentSection/>
            <AboutMeSection/>
            <ProjectsSection/>
            <HabilitsSection/>
        </>
    )
}