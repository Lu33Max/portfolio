import ExperienceLayout, {
  ContentImage,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function Avalken() {
  return (
    <ExperienceLayout
      pageTitle="Avalken"
      project={[
        <Paragraph>
          The game is a 2D action-adventure in a top-down perspective with
          real-time combat system like the older 2D &quot;The Legend of
          Zelda&quot; games, with additional role-playing elements such as a
          levelling system and stats. The world is set in a medieval fantasy era
          and designed in a pixel art style.
        </Paragraph>,
        <Paragraph>
          In the game world, players encounter NPCs who assist them on their
          journey, monsters that must be defeated, and discover new items (such
          as a shield, bombs, a bow, a lamp, etc.) to interact with their
          environment. Players primarily use a sword for combat, but the use of
          items is also possible. By defeating monsters, players can level up
          their character and increase their own stats (health, attack, defence,
          etc.). With the newly acquired items and increased stats, players can
          attempt the temples scattered throughout the world. These temples
          contain puzzles that can only be solved through the correct use of
          items, as well as battles against difficult enemies. The game is
          considered completed when all dungeons have been cleared.
        </Paragraph>,
        <Paragraph>
          In the two-player mode, players can choose from a selection of temples
          specifically created for this mode. These temples include new puzzles
          that can only be solved through cooperation between both players. The
          levelling system is disabled for this mode. The time taken to complete
          a temple is saved and is intended to encourage players to continually
          surpass their best time.
        </Paragraph>,
        <div className="flex items-center justify-center gap-4 max-md:flex-col lg:mx-12 lg:gap-12">
          <ContentImage source="Avalken1.png" alt="Avalken Gameplay" />
          <ContentImage source="Avalken2.png" alt="Avalken Shop" />
        </div>,
      ]}
      role={[]}
      skills={[
        "General fundamentals of programming with Java",
        "Basics of game development with Java",
        "Expansion of knowledge on basic programming paradigms(inheritance, polymorphism, streams, etc.)",
      ]}
      footer={
        <>
          Access the source code over on&nbsp;
          <InTextLink
            content="GitHub"
            url="https://github.com/Lu33Max/avalken"
            linkTitle="Avalken on GitHub"
          />
          .
        </>
      }
    />
  );
}
