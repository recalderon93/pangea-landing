"use client";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import Button from "../buttons/Button";

export default function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-header"
      className="flex flex-col gap-y-8 px-4 py-8 sm:px-6 md:px-10 lg:px-14">
      <div className="flex flex-col items-baseline justify-between pt-8 md:flex-row">
        <h2 className="h3 pb-8 text-teal-400" id="projects-header">
          Our Digital
          <br />
          Masterpieces
        </h2>
        <p className="h5 text-shade-400 max-w-[340px] md:max-w-[420px] md:text-right">
          Take a look at our work!
          <br />
          And discover how we develop successful digital solutions.
        </p>
      </div>
      <div className="flex flex-col items-center gap-12 py-4 md:gap-16 md:py-0">
        <div className="grid w-full grid-cols-1 place-items-center gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-10">
          <ProjectItem projectId="1" />
          <ProjectItem projectId="2" />
          <ProjectItem projectId="3" />
          <ProjectItem projectId="4" />
        </div>
        <Button title="LOAD MORE" />
      </div>
    </section>
  );
}
