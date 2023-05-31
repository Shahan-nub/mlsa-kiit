import DomainCard from "../DomainCard";

const ProjectCommuntiy = () => {
  return (
    <div className="mx-auto flex  w-[80%] cursor-default flex-col items-center justify-between  md:w-auto  lg:ml-24 lg:flex-row">
      <h1 className="w-[240px] text-center text-[15px] font-semibold sm:text-3xl ">
        We Are Proud Of Our <span className="text-[#286FD9]"> Community Members </span>
      </h1>

      <div className="mt-8 flex flex-col sm:mx-5 sm:gap-12 md:mt-0  md:flex-row lg:gap-7">
        <DomainCard
          isHome={false}
          logo={20}
          heading="Finished Projects"
          about={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble"
          }
        ></DomainCard>
        <DomainCard
          isHome={false}
          logo={27}
          heading="Sponsors"
          about={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble"
          }
        />
      </div>
    </div>
  );
};

export default ProjectCommuntiy;