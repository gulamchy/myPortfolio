import ExperienceComponent from "../components/experience/experience.component";

const Experience = () => {
    return(
        <div className="min-h-screen w-full flex flex-col  items-center justify-start bg-dark px-8 py-[20vw] sm:py-[10vw]">
            <h2 className=" font-syne font-extrabold text-white text-[10vw] sm:text-[6.667vw] bottom-0">Experience</h2>
            <ExperienceComponent />
        </div>
    );
};

export default Experience;