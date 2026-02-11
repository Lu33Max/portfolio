import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function SuperPong() {
  return (
    <ExperienceLayout
      pageTitle="SuperPong"
      project={[
        <Paragraph>
          The original Pong game is now over 50 years old and has remained
          ingrained in people&apos;s minds through its simple concept up to the
          present day. The goal was to revive this design ideology by adding
          some simple enhancements to bring the game concept into the modern
          era. Thus, Super Pong was born, which challenges players not only in
          their reaction time but also with its strategic components. Collect
          different balls during a match and try to knock out your opponent
          through tactical deployment. Each ball comes with its own unique
          behavior pattern and values, providing the right solution for every
          situation.
        </Paragraph>,
        <Paragraph>
          This concept was designed and implemented during the fourth semester
          at Mittweida University in the Game Programming module. The aim here
          was the individual creation of a simple game concept within the Unity
          Game Engine.
        </Paragraph>,
        <div className="flex items-center justify-center gap-4 max-md:flex-col lg:mx-12 lg:gap-12">
          <ContentImage source="SuperPong3.png" alt="SuperPong Menu" />
          <ContentImage source="SuperPong2.png" alt="SuperPong Gameplay" />
        </div>,
      ]}
      role={[]}
      skills={[
        "Basics of 2D game development in Unity",
        "Advanced development paradigms in C# / Unity",
        "Independent organization and structured work",
        "Creation of time and task schedules",
      ]}
      footer={
        <>
          Access the source code over on{" "}
          <InTextLink
            content="GitHub"
            url="https://github.com/Lu33Max/super-pong"
            linkTitle="SuperPong on GitHub"
          />
          .
        </>
      }
    />
  );
}
