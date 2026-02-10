import Head from "next/head";
import Image from "next/image";
import React from "react";
import ListItem from "~/components/Utilities/ListItem";
import Highlight from "~/components/Utilities/highlight";

export default function Avalken() {
  return (
    <>
      <Head>
        <title>Avalken</title>
        <meta name="description" content="Avalken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className="mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mb-[1rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
          Avalken
        </h2>
        <h5 className="mb-12 text-2xl font-semibold max-md:mb-8 max-md:text-xl min-[2000px]:text-4xl">
          The Project
        </h5>
        <Highlight />
        <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <p className="mb-4">
            The game is a 2D action-adventure in a top-down perspective with
            real-time combat system like the older 2D &quot;The Legend of
            Zelda&quot; games, with additional role-playing elements such as a
            levelling system and stats. The world is set in a medieval fantasy
            era and designed in a pixel art style.
          </p>
          <p className="mb-4">
            In the game world, players encounter NPCs who assist them on their
            journey, monsters that must be defeated, and discover new items
            (such as a shield, bombs, a bow, a lamp, etc.) to interact with
            their environment. Players primarily use a sword for combat, but the
            use of items is also possible. By defeating monsters, players can
            level up their character and increase their own stats (health,
            attack, defence, etc.). With the newly acquired items and increased
            stats, players can attempt the temples scattered throughout the
            world. These temples contain puzzles that can only be solved through
            the correct use of items, as well as battles against difficult
            enemies. The game is considered completed when all dungeons have
            been cleared.
          </p>
          <p className="mb-4">
            In the two-player mode, players can choose from a selection of
            temples specifically created for this mode. These temples include
            new puzzles that can only be solved through cooperation between both
            players. The levelling system is disabled for this mode. The time
            taken to complete a temple is saved and is intended to encourage
            players to continually surpass their best time.
          </p>
          <div className="flex items-center justify-center gap-4 max-md:flex-col lg:mx-12 lg:gap-12">
            <div className="h-fit w-[50%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
              <Image
                priority
                src={"/assets/projects/Avalken1.png"}
                alt="Avalken Gameplay"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div className="h-fit w-[50%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
              <Image
                priority
                src={"/assets/projects/Avalken2.png"}
                alt="Avalken Shop"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <h5 className="my-12 text-2xl font-semibold max-md:my-8 max-md:text-xl min-[2000px]:text-4xl">
          Learned Skills
        </h5>
        <div className="mx-8 max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <ul className="mb-8 ml-5 list-none">
            <ListItem style="mb-1">
              General fundamentals of programming with Java
            </ListItem>
            <ListItem style="mb-1">
              Basics of game development with Java
            </ListItem>
            <ListItem style="mb-1">
              Expansion of knowledge on basic programming paradigms
              (inheritance, polymorphism, streams, etc.)
            </ListItem>
          </ul>
        </div>
        <hr />
        <p className="mb-4 mt-2 min-[2000px]:text-[1.5rem]">
          <b>
            Access the source code over on{" "}
            <a
              href="https://github.com/Lu33Max/avalken"
              title="Avalken on GitHub"
              target="_blank"
              className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
            >
              <u>GitHub</u>
            </a>
            .
          </b>
        </p>
      </>
    </>
  );
}
