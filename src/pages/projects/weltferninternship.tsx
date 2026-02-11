import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function Weltfern() {
  return (
    <>
      <ExperienceLayout
        pageTitle="weltfern Internship"
        project={[
          <HorizontalContainer>
            <Paragraph>
              As part of my studies in media informatics i participated in a
              three-month long remote internship for weltfern in Hamburg,
              Germany. In the past they've focused on creating 3D and VR
              applications for businesses and organizations. With the knowledge
              gathered from these projects they started expanding into the
              gaming industry, creating VR experiences to be enjoyed by a
              multitude of users. To further support them on this new journey,
              they' actively been looking for engaged students to fill in
              positions in development and game design departments.
            </Paragraph>
            <ContentImage
              source="weltfern.jpg"
              alt="weltfern logo"
              width={150}
              height={150}
            />
          </HorizontalContainer>,
        ]}
        role={[
          <Paragraph>
            As part of a team consisting of about 10 students I worked in a
            multitude of roles across various simultaneous projects. The
            conception of new game ideas and mechanics, creating prototypes
            inside the Godot game engine, testing existing funtionalities and
            reviewing the playability and fun of the final products were all
            part of my position depending on the current project status. For the
            sake of this introduction I will be focusing on the two main
            projects I worked on during my internship.
          </Paragraph>,
          <HorizontalContainer>
            <ContentImage source="assemble.png" alt="Assemble Banner" />
            <div>
              <Paragraph>
                Assemble! transforms the fascination of three-dimensional model
                building into a virtual reality experience. Players are shown
                individual parts of a 3D model, arranged on a virtual shelf.
                These pieces can be freely selected and held to be viewed from
                every angle. 20 unique models each with different difficulty
                options to choose from can be experienced casually or against
                the clock.
              </Paragraph>
              <p>
                The moment I joined the team this project was already mostly
                done and within the final production cycle. As an outsider I was
                tasked with repeatedly testing and reviewing the current state
                of the game and I was able to achieve major improvements for the
                overall interaction experieence users have with the world and
                its building blocks. I played through all available stages on a
                multitude of difficulty levels and searched both for errors
                within the models themselves as well as problematic moments
                within the assembly stage like hard to reach or barely visible
                places.
              </p>
            </div>
          </HorizontalContainer>,
          <Paragraph>
            With the release of Assemble! being completed and most of the team
            moving on to post-release fixes two newly joined members and me were
            assigned to work on the follow-up VR project codenamed "Build,
            Fight, Survive". Players get presented a completely randomly
            generated terrain before them in which they are tasked to build a
            base and defense structures to fend off never ending waves of
            enemies. Jump into the action, fight monsters, collected resources
            and further upgrade your base to survive even longer.
          </Paragraph>,
          <Paragraph>
            As the project was still in very early development I had the chance
            to directly influence the direction of the game's overall design and
            mechanics. I was tasked with setting up a new VR project inside
            Godot and prototyping the first gameplay ideas especially focusing
            on the building and world generation aspects. Working in this small
            group we each had the possibility to give and receive direct
            feedback as well as quickly test out ideas and review them within
            meetings. With Godot being a community-driven open source engine, a
            huge chunk of my daily routine was spent with reading documentations
            and trying to understand the different systems offered by the
            inofficial XR Tools implementation, documenting my newly aacquired
            knowledge for future work on the project and guiding my other less
            experienced colleagues.
          </Paragraph>,
          <p>
            The project is currently still inside its funding stage with no
            aimed release date given to the public yet.
          </p>,
        ]}
        skills={[
          "Identifying and addressing issues in existing game concepts",
          "Independent work and organization within a team",
          "Structured documentation and dissemination of work results",
          "Engaging in reasoned discussions of solution approaches within a team",
          "Game development in the Godot Engine",
          "Development of procedural generation algorithms",
          "Creating a VR experience and working with Godots XR Tools",
        ]}
        footer={
          <>
            You can find the published version of Assemble! over on{" "}
            <InTextLink
              content="Steam"
              url="https://store.steampowered.com/app/2791890/Assemble/"
              linkTitle="Assemble! store page"
            />
            .
          </>
        }
      />
    </>
  );
}
