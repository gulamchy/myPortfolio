import Button from "../components/header/button.component";
import {skillModel} from "../models/skillModel";

const Skill = () => {
    return (
        <div className="min-h-screen w-full flex flex-col bg-gray items-center">
            <h1 className="font-syne font-extrabold text-white text-[25.6vw] sm:text-[6.667vw] flex items-start justify-center leading-none m-6 sticky top-0">Skill</h1>
            <div className="">
            {skillModel.map((skill, index) => (
                <div key={index} className="mb-8 bg-white flex flex-col sm:flex-row p-[4.444vw] w-[80vw] gap-[2.222vw] sm:gap-0 sticky top-[11.389vw]">

                    <div className="flex flex-col items-start justify-end pr-[2.222vw]">
                        <h2 className="text-dark uppercase text-[5vw] leading-none font-anton">{skill.title}</h2>
                        <h2 className="text-gray uppercase text-[5vw] leading-none font-anton mb-[2.222vw]">{skill.category}</h2>
                        <ul>
                            {skill.language.map((point, i) => (
                                <div key={i} className="flex items-center gap-[1.111vw]">
                                    <div className="w-[1.111vw] h-[1.111vw] bg-gray"></div>
                                    <li key={i} className="text-dark text-[1.667vw] uppercase font-anton ">{point}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-start items-center object-cover"> 
                        <img src={skill.img} alt={skill.title} className="w-full sm:w-[20.833vw] h-auto sm:h-[27.778vw]" />
                    </div>

                    <div className="flex flex-col items-start justify-start mt-[2.222vw]">
                        <h3 className="font-bold font-syne text-[1.667vw] pl-0 sm:pl-[2.778vw] ">{skill.projectTitle}</h3>
                        <div className="flex gap-4 font-syne font-bold text-gray pl-0 sm:pl-[2.778vw] mb-[1.667vw]">
                            <p>{skill.projectRole}</p>
                            <span>|</span>
                            <p>{skill.projectDate}</p>
                        </div>
                        <ul>
                            {skill.keyPoints.map((point, i) => (
                                <div key={i} className="flex items-center gap-[1.111vw] mb-[1.667vw]">
                                    <div className="w-[1.667vw] h-[0.139vw] bg-gray"></div>
                                    <li key={i} className="text-dark text-[0.972vw] font-syne w-[22.222vw]">{point}</li>
                                </div>
                            ))}
                        </ul>
                        <Button href="${skill.link}" className="border border-dark border-opacity-25 opacity-70 hover:opacity-100 transition-all ease-in-out">Check out</Button>
                    </div>
                    

                    {/* <img src={skill.img} alt={skill.title} className="w-[10vw] h-[20vw] mb-4" />
                    <h3 className="font-bold">{skill.projectTitle}</h3>
                    <ul>
                        {skill.keyPoints.map((point, i) => (
                            <li key={i} className="text-gray-500">{point}</li>
                        ))}
                    </ul>
                    <a href={skill.link} className="text-blue-500 underline">Project Link</a> */}
                </div>
            ))}
            </div>
        </div>
    );
};

export default Skill;