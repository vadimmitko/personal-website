import { Metadata } from "next";
import ProjectLadder from "./(components)/ProjectLadder";

export const metadata: Metadata = {
  description: "Home page",
};

export default function Home() {
  return (
    <div id="projects">
      <ProjectLadder className="mx-auto mt-48 max-w-[500px] overflow-hidden font-mono md:max-w-[650px]">
        <ProjectLadder.Project projectId="redis-clone" className="ml-[52%]">
          Redis Clone
        </ProjectLadder.Project>
        <ProjectLadder.Project
          projectId="real-time-fraud-detection"
          className="ml-[26%]"
        >
          Real-time Fraud Detection
        </ProjectLadder.Project>
        <ProjectLadder.Project projectId="personal-website">
          Personal website
        </ProjectLadder.Project>
      </ProjectLadder>
    </div>
  );
}
