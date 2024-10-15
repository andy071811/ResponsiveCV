import styled from "styled-components";
import { DiCss3, DiDocker, DiHtml5, DiMongodb, DiNodejsSmall, DiPython, DiReact } from "react-icons/di";
import { SiRedux, SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const StyledList = styled.ul`
        line-height: 30px;
        list-style: none;
    `;

function ListOfSkillsCard({ skills }) {

    const skill = skills.map((skill) => {

        let icon;

        switch(skill) {
            case 'HTML':
                icon = <DiHtml5 color="orange" />
                break;
            case 'CSS':
                icon = <DiCss3 color="#264de4" />
                break;
            case 'Tailwind CSS':
                icon = <RiTailwindCssFill color="#4c1d95"/>
                break;
            case 'Styled Components':
                icon = <SiStyledcomponents color="pink"/>
                break;
            case 'React':
                icon = <DiReact color="#61dbfb"/>
                break;
            case 'JavaScript':
                icon = <IoLogoJavascript color="#f0db4f" />
                break;
            case 'Python':
                icon = <DiPython color="#4B8BBE" />
                break;
            case 'Node.js':
                icon = <DiNodejsSmall color="#68a063" />
                break;
            case 'Redux':
                icon = <SiRedux color="#a3c1ad" />
                break;
            case 'Redux Toolkit':
                icon = <SiRedux color="#764abc"/>
                break;
            case 'MongoDB':
                icon = <DiMongodb color="#4db33d" />
                break;
            case 'Docker':
                icon = <DiDocker color="#4B8BBE" />
                break;
            default:
                icon = ''

        }
        
        return (
            <li key={uuidv4()}><span>{icon} {skill}</span></li>
        );
    });
    
    return (
        <>
            <h4>Example skills:</h4>
            <br/>
            <StyledList>{skill}</StyledList>
        </>
    )
}

export default ListOfSkillsCard