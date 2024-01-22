import { Header } from "../../layout/header"
import { useRef } from "react"

export const Home = () => {

    const initialContentRef = useRef <HTMLDivElement>(null)
    const aboutMeRef = useRef<HTMLDivElement>(null)
    const skillsRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    const scrollPage = (page:'initial'|'about'|'projects'|'skills') => {
        switch (page) {
            case 'initial':
                initialContentRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case 'about':
                aboutMeRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case 'projects':
                projectsRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
            case 'skills':
                skillsRef.current?.scrollIntoView({behavior: 'smooth'});
                break;
        }
    }
    
    return (
        <>
            <Header onClickSection={scrollPage}/>
            {/* <Header onClickSection={scrollPage}/>
            <InitialContentSection ref={initialContentRef}/>
            <AboutMeSection ref={aboutMeRef} />
            <ProjectsSection ref={projectsRef} />
            <SkillsSection ref={skillsRef}/>
            <Footer/> */}
        </>
    )
}