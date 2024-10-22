import ExperienceComponent from "../components/experience/experience.component";

const Experience = () => {
    return(
        <div className="min-h-screen w-full flex flex-col  items-center justify-start bg-dark px-8 py-8">
            <h2 className=" font-syne font-extrabold text-white text-[6.667vw] bottom-0">Experience</h2>
            <ExperienceComponent />
        </div>
    );
};

export default Experience;