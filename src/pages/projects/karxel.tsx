import Head from "next/head";
import Image from "next/image";
import Highlight from "~/components/Utilities/highlight";
import ListItem from "~/components/Utilities/ListItem";

export default function Karxel() {
  return (
    <>
      <Head>
        <title>Karxel</title>
        <meta name="description" content="Karxel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className="mb-4 mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
          Karxel
        </h2>
        <h5 className="mb-12 text-2xl font-semibold max-md:mb-8 max-md:text-xl min-[2000px]:text-4xl">
          The Project
        </h5>
        <Highlight />
        <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <p>
            In this hybrid between a board and card game you take control over
            an army of combat-ready gummy bears with only one goal in mind:
            Defeat the enemy side and protect the king's honor. Fight friends
            and foes in team-based online battles with up to 8 players and show
            them who's the real tactician on the board!
          </p>
          <div className="flex items-center gap-4 max-md:flex-col">
            <p>
              As part of my studies in media informatics two colleagues and me
              were tasked with creating a competitive multiplayer game
              experience that can both be conceptualized and programmed over the
              span of just a single semester. Right from the very first
              brainstorm sessions we already had a clear vision in our head and
              following the positive feedback from our lecturers and fellow
              students we continued work way beyond the originally planned
              schedule and are now aiming for a public release on Steam and
              itch.io within the near future.
            </p>
            <div className="h-fit w-[33%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
              <Image
                src={"/assets/projects/KarxelBanner.png"}
                alt="Karxel_Banner"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <h5 className="my-12 text-2xl font-semibold max-md:my-8 max-md:text-xl min-[2000px]:text-4xl">
          My Role
        </h5>
        <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <p className="mb-4">
            As we work together in a team of merely three people I completed
            tasks in pretty much every aspect that's needed for game
            development. Right from the start I was directly involved in shaping
            the creative direction of the game and it's basic essence,
            postulating the feelings we want to target for our players as well
            as coming up with the basic gameplay loop and mechanics. With the
            basics all figured out our focus shifted more and more towards the
            actual development and asset creation. With my already pretty vast
            experiences regarding the Unity game engine I was mainly concerned
            with creating the game's mechanics until I additionally took on the
            task of writing our networking code.
          </p>
          <div className="mb-4 flex items-center gap-4 max-md:flex-col">
            <div className="h-fit w-[33%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%]">
              <Image
                src={"/assets/projects/Karxel_Cards.png"}
                alt="Karxel_Cards"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="mb-4">
                Thanks to my prior knowledge in using the unity engine the basic
                mechanics behind the game were no real problem and all part of
                my regular routine. However, as soon as networking came into
                play I found myself in a completely new domain that required me
                both to learn new basics but also change up the way I have been
                thinking about game features. Suddenly new concerns like
                security, anti-cheat and client secrets came into play that
                forced me to completely rethink how I design features both on
                paper but also in code. As such I was now spending large amounts
                of my time reading through package and API documentations while
                also trying to learn about potential ways to architecture a game
                around networking aspects.
              </p>
              <p>
                Syncing game states between players, working with server
                authority and making sure that no team-internal information
                accidentally leaks to the enemy are all parts of this new
                reality that never really played a role for my singleplayer game
                history but now became a daily routine.
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4 max-md:flex-col">
            <div>
              <p className="mb-4">
                All basic network functionalities are handled by the{" "}
                <a
                  href="https://mirror-networking.com/"
                  className="text-violet-500 hover:brightness-125"
                >
                  Mirror Networking
                </a>{" "}
                package, a high level interface compatible with a variety of low
                level transports. In our first iteration, we decided on
                FizzySteamworks, a third-party relay build on the official
                Steamworks.NET API which would've allowed for the usage of
                Steam's lobby and friend system. However, with an increasingly
                difficult testing environment and mandatory access to steam on
                any hardware running the game we ultimately made the switch to
                Epic Online Services, still running all our testing versions to
                this date.
              </p>
              <p>
                With most of the projects core functionalities already
                implemented I took this newly won freedom to further explore
                into different fields regarding both programming (Discord
                integration, server-based authentication and account systems...)
                but also completely different domains like refreshing my
                previously long dormant 3D-modelling skills using Blender.
              </p>
            </div>
            <div className="h-fit w-[33%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%]">
              <Image
                src={"/assets/projects/KarxelAttack.gif"}
                alt="Karxel_Attack"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Overall the project was - and still is to this day - a massive
              learning opportunity, allowing me to explore new areas and
              deep-dive into fields I previously thought I already had a good
              enough understanding of.
            </p>
          </div>
        </div>
        <h5 className="my-12 text-2xl font-semibold max-md:my-8 max-md:text-xl min-[2000px]:text-4xl">
          Learned Skills
        </h5>
        <div className="mx-8 max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <ul className="mb-8 ml-5 list-none">
            <ListItem style="mb-1">
              Conceptualizing a competitive multiplayer game from scratch
            </ListItem>
            <ListItem style="mb-1">
              Independent work and organization within a team
            </ListItem>
            <ListItem style="mb-1">
              Advanced coding paradgims within the Unity game engine
            </ListItem>
            <ListItem style="mb-1">
              Engaging in reasoned discussions of solution approaches within a
              team
            </ListItem>
            <ListItem style="mb-1">
              Basics of coding inside a networking environment
            </ListItem>
            <ListItem style="mb-1">
              Controlling the flow of data to ensure server authority and
              prevent leaks of client secrets
            </ListItem>
            <ListItem style="mb-1">
              Working with various third-party APIs and reading into
              documentation
            </ListItem>
          </ul>
        </div>
        <hr />
        <p className="mb-4 mt-2 min-[2000px]:text-[1.5rem]">
          <b>
            You can find a preview page of Karxel over on{" "}
            <a
              title="Karxel itch.io page"
              href="https://lu33max.itch.io/karxel?password=Jz8$yS3jUY5hXelt"
              className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
            >
              <u>itch.io</u>
            </a>{" "}
            as well as a link to the game files on{" "}
            <a
              title="Karxel on GitHub"
              href="https://github.com/Lu33Max/voxel-card-game"
              className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
            >
              <u>GitHub</u>.
            </a>
          </b>
        </p>
      </>
    </>
  );
}
