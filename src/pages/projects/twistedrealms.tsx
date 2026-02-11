import Head from "next/head";
import Image from "next/image";
import React from "react";
import ListItem from "~/components/Utilities/ListItem";
import Highlight from "~/components/Utilities/highlight";
import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function TwistedRealms() {
  return (
    <ExperienceLayout
      pageTitle="Twisted Tealms"
      project={[
        <HorizontalContainer>
          <div>
            <Paragraph>
              Defeat monsters, collect items, and strengthen your characters to
              prevail in a battle for the future of the world against the Omen
              and its followers. Each player takes on the role of a hunter to
              infiltrate the castle at the centre of the game and defeat the
              Omen once and for all. Fight your way through procedurally
              generated battlegrounds against both evil forces and your
              competitors, claiming all the glory (and gold) for yourself. But
              beware: if your internal power struggle lasts too long, it could
              mean the end for this world.
            </Paragraph>
            <Paragraph>
              Originally developed as a classic board game during the first
              semester of the Media Informatics program, three of the original
              members have now come together to digitize the project, adding
              revisions and previously unimplemented mechanics to the original
              concept with their newly acquired skills. Development and
              conceptualization have been ongoing for four months now, with a
              planned release on Steam and other platforms.
            </Paragraph>
          </div>
          <ContentImage source="TwistedRealms1.png" alt="Twisted Realms" />
        </HorizontalContainer>,
      ]}
      role={[
        <Paragraph>
          My roles within the team primarily consist of game design and the role
          of Technical Lead. As a game designer, my initial task was to update
          the outdated game design document to our current knowledge in the game
          development process. Even in the original version of the game concept,
          some weaknesses were identified through playtests and feedback from
          our supervisors, but due to time constraints or lack of know-how, they
          were never addressed until completion. Using old notes and records,
          numerous mechanics, particularly related to the combat system, were
          overhauled to create a much more cohesive overall picture.
        </Paragraph>,
        <HorizontalContainer>
          <ContentImage source="TwistedRealmsGif.gif" alt="Unit Movement" />
          <div>
            <Paragraph>
              In the second step, as Technical Lead, it is now my responsibility
              to implement previously defined game mechanics in the engine.
              Since this project is an opportunity for all of us on the team to
              learn and expand our skills, we chose the Unreal Engine for
              implementation, with which I personally had limited experience
              until then.
            </Paragraph>
            <p>
              The majority of my technical work involves grid-based character
              movements and procedural generation of the game field. While
              square game fields are much more intuitive in their handling,
              hexagons bring a new depth with a variety of mathematical
              peculiarities, all of which add a new layer of complexity. A new
              coordinate system, distance calculations across diagonals, or
              conversions between field coordinates and room coordinates are
              just a few key points. Additionally, field generation serves as
              both an adoption of the modular structure of the original concept
              and a personal challenge for myself, as procedural generation in
              games has interested me for some time.
            </p>
          </div>
        </HorizontalContainer>,
      ]}
      skills={[
        "Identifying and addressing issues in existing game concepts",
        "Independent work and organization within a team",
        "Structured documentation and dissemination of work results",
        "Engaging in reasoned discussions of solution approaches within a team",
        "Game development in the Unreal Engine",
        "Development of procedural generation algorithms and balancing them",
      ]}
      footer={
        <>
          Download the Game Design Document{" "}
          <a
            title="Game Design Document"
            download
            href="\assets\documents\Twisted_Realms_GDD.pdf"
            className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
          >
            <u>here</u>
          </a>{" "}
          &#40;German only&#41;.
        </>
      }
    />
  );
}
