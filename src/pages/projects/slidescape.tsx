import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function Slidescape() {
  return (
    <ExperienceLayout
      pageTitle="Slidescape"
      project={[
        <Paragraph>
          Slidescape is a puzzle labyrinth like no other. Trapped in a sliding
          puzzle, you must cleverly arrange the various rooms to find your way
          to the exit. But there&apos;s a twist: each area also represents a
          different video game genre. Now it&apos;s up to you to skillfully
          combine the nuances of these games to break out of the labyrinth.
        </Paragraph>,
        <p>
          The game concept originated from a Game Jam during the third semester
          at Mittweida University. Students were tasked with individually
          creating a concept over a two-week period with the theme &quot;Push
          and Pull&quot;, which theoretically could be implemented by a small
          group of developers within a year. The results of the Game Jam were
          later used as admission criteria for the Game Design Team of the
          &quot;Echolight&quot; project, of which I became a part.
        </p>,
      ]}
      role={[
        <Paragraph>
          Since the entire project was to be done individually, I handled the
          entire conception from ideation to final elaboration myself. Due to
          the theme &quot;Push and Pull&quot;, the options for a concept were
          already limited, so I followed through with my initial idea of a
          sliding puzzle.
        </Paragraph>,
        <Paragraph>
          A special focus during this task was on the analysis of reference
          games or mechanics. Simplifying and abstracting complex systems,
          breaking them down to their essential components, understanding,
          evaluating, and ultimately developing my own mechanics based on the
          acquired knowledge from the references was a relatively new way of
          working for me. Analysing other systems and understanding why they
          work well, but also identifying potential weaknesses, made developing
          my own mechanics much more enjoyable, as it allowed me not to develop
          my ideas in a vacuum, but to observe an existing and functioning
          example within a complete system.
        </Paragraph>,
        <HorizontalContainer>
          <p>
            Creating a high level of replayability was also a goal of the
            project. Therefore, I first had to consider what aspects of a game
            lead players to repeatedly engage with it. Through observations of
            myself, I realized that giving players a variety of freedoms can
            lead to constantly new experiences and make each playthrough unique
            based on the players&apos; decisions. Thus, the idea of a labyrinth
            that players can freely manipulate was born. While there is one
            intended path to the goal, all the tools are there for players to
            create their own route. Rooms can be entered and mostly completed in
            any order, and the existing puzzles offer opportunities for
            completion with different abilities.
          </p>
          <ContentImage source="Slidescape1.png" alt="Slidescape Concept" />
        </HorizontalContainer>,
      ]}
      skills={[
        "Creating a Game Design Document",
        "Developing game mechanics and justifying decisions based on the essence of games",
        "Analysing reference materials and drawing lessons for one&apos;s own concept from similar concepts",
        "Breaking down complex mechanics to their essentials and explaining them simply",
        "Choosing setting and aesthetics based on essence and mechanics",
      ]}
      footer={
        <>
          Download the Game Design Document{" "}
          <a
            title="Game Design Document"
            download
            href="\assets\documents\Slidescape_GDD.pdf"
            className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
          >
            <u>here</u>
          </a>
          .
        </>
      }
    />
  );
}
