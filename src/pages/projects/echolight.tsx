import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function Echolight() {
  return (
    <ExperienceLayout
      pageTitle="Echolight"
      project={[
        <HorizontalContainer>
          <p>
            Echolight is an action-based roguelike game where you play as Áine,
            a princess from an ancient clan, trying to restore the power of the
            fallen gods of day and night, whose forces have spread to the local
            flora and fauna. Developed entirely independently over two
            semesters, this project involved over 60 students from the Media
            Informatics and Interactive Entertainment program at Mittweida
            University. From the initial ideas and concepts to the final assets,
            everything was planned, discussed, and implemented by the students
            themselves in a self-organized manner.
          </p>
          <ContentImage source="Echolight1.jpg" alt="Echolight in game" />
        </HorizontalContainer>,
      ]}
      role={[
        <Paragraph>
          As part of the six-person game design team, my main responsibilities
          included developing concepts for the basic gameplay experience and
          specific mechanics, regularly documenting new decisions within the
          game design document, and especially conveying our vision to other
          teams. The latter quickly proved to be the most significant task.
          Working initially in isolation from the other teams and being able to
          provide clear content only based on our own slow progress, we
          encountered early challenges in aligning our ideas with those of
          others.
        </Paragraph>,
        <Paragraph>
          To facilitate better connection and communication between the
          different departments (Art, Engine, Event Management, Game Design,
          Tech), feature teams were introduced in the second half of the
          project, each responsible for overseeing a single aspect of the game
          from start to finish across departments. At this time, I took on the
          role of Lead Combat Designer, which I would carry until the end of the
          project. With the combat system as the central element of the game, my
          primary goal was to achieve a smooth and fluid feeling for the
          players. Extensive testing and tweaks to the individual mechanics,
          previously existing in isolation, were crucial to achieving a unified
          game flow where all components work together seamlessly. This required
          a high level of communication not only within my own team but also
          across features, with regular discussions about introducing, changing,
          or removing elements.
        </Paragraph>,
        <HorizontalContainer>
          <ContentImage source="EcholightGIF.gif" alt="Echolight Combat" />
          <p>
            After completing the game concept and the subsequent decrease in
            required game design decisions, we transitioned to other
            departments. Drawing on my past experience in programming and with
            the Unity engine in general, I began working as part of the Tech
            department, where I would contribute to the tasks of my feature
            team. In this role, I also served as a point of contact for others
            on the game design team, facilitating the quick and
            resource-efficient implementation of new ideas into the game for
            testing purposes. Additionally, this position between both
            departments allowed me to quickly and easily test received feedback
            from beta tests in the game environment and develop solutions.
          </p>
        </HorizontalContainer>,
      ]}
      skills={[
        "Making and justifying decisions based on the essence of the game",
        "Structured documentation and dissemination of work results",
        "Recognizing, understanding, and considering requirements from other areas of work",
        "Engaging in reasoned discussions of ideas and subsequently revising and finding compromises",
        "Guiding a team with prioritization and distribution of open tasks",
        "Advanced Game development within the Unity engine",
      ]}
      footer={
        <>
          Visit the released project over on&nbsp;
          <InTextLink
            content="Steam"
            url="https://store.steampowered.com/app/2679520/Echolight/"
            linkTitle="Echolight on Steam"
          />
          .
        </>
      }
    />
  );
}
