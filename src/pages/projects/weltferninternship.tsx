import Head from "next/head";
import Highlight from "~/components/Utilities/highlight";
import ListItem from "~/components/Utilities/ListItem";
import Image from "next/image";

export default function Weltfern() {
  return (
    <>
      <Head>
        <title>weltfern</title>
        <meta name="description" content="Weltfern Internship" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className="mb-4 mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
          weltfern Internship
        </h2>
        <h5 className="mb-12 text-2xl font-semibold max-md:mb-8 max-md:text-xl min-[2000px]:text-4xl">
          The Project
        </h5>
        <Highlight />
        <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <div className="flex items-center gap-4 max-md:flex-col">
            <div>
              <p className="mb-4">
                As part of my studies in media informatics i participated in a
                three-month long remote internship for weltfern in Hamburg,
                Germany. In the past they've focused on creating 3D and VR
                applications for businesses and organizations. With the
                knowledge gathered from these projects they started expanding
                into the gaming industry, creating VR experiences to be enjoyed
                by a multitude of users. To further support them on this new
                journey, they' actively been looking for engaged students to
                fill in positions in development and game design departments.
              </p>
            </div>
            <div className="h-fit w-[33%] flex-row justify-center rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%]">
              <Image
                src={"/assets/projects/weltfern.jpg"}
                alt="weltfern_logo"
                width={250}
                height={250}
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
            As part of a team consisting of about 10 students I worked in a
            multitude of roles across various simultaneous projects. The
            conception of new game ideas and mechanics, creating prototypes
            inside the Godot game engine, testing existing funtionalities and
            reviewing the playability and fun of the final products were all
            part of my position depending on the current project status. For the
            sake of this introduction I will be focusing on the two main
            projects I worked on during my internship.
          </p>
          <div className="mb-4 flex items-center gap-4 max-md:flex-col">
            <div className="h-fit w-[33%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%]">
              <Image
                src={"/assets/projects/assemble.png"}
                alt="assemble"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="mb-4">
                Assemble! transforms the fascination of three-dimensional model
                building into a virtual reality experience. Players are shown
                individual parts of a 3D model, arranged on a virtual shelf.
                These pieces can be freely selected and held to be viewed from
                every angle. 20 unique models each with different difficulty
                options to choose from can be experienced casually or against
                the clock.
              </p>
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
          </div>
          <div className="flex flex-col gap-4">
            <p className="^mb-4">
              With the release of Assemble! being completed and most of the team
              moving on to post-release fixes two newly joined members and me
              were assigned to work on the follow-up VR project codenamed
              "Build, Fight, Survive". Players get presented a completely
              randomly generated terrain before them in which they are tasked to
              build a base and defense structures to fend off never ending waves
              of enemies. Jump into the action, fight monsters, collected
              resources and further upgrade your base to survive even longer.
            </p>
            <p>
              As the project was still in very early development I had the
              chance to directly influence the direction of the game's overall
              design and mechanics. I was tasked with setting up a new VR
              project inside Godot and prototyping the first gameplay ideas
              especially focusing on the building and world generation aspects.
              Working in this small group we each had the possibility to give
              and receive direct feedback as well as quickly test out ideas and
              review them within meetings. With Godot being a community-driven
              open source engine, a huge chunk of my daily routine was spent
              with reading documentations and trying to understand the different
              systems offered by the inofficial XR Tools implementation,
              documenting my newly aacquired knowledge for future work on the
              project and guiding my other less experienced colleagues.
            </p>
            <p>
              The project is currently still inside its funding stage with no
              aimed release date given to the public yet.
            </p>
          </div>
        </div>
        <h5 className="my-12 text-2xl font-semibold max-md:my-8 max-md:text-xl min-[2000px]:text-4xl">
          Learned Skills
        </h5>
        <div className="mx-8 max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <ul className="mb-8 ml-5 list-none">
            <ListItem style="mb-1">
              Identifying and addressing issues in existing game concepts
            </ListItem>
            <ListItem style="mb-1">
              Independent work and organization within a team
            </ListItem>
            <ListItem style="mb-1">
              Structured documentation and dissemination of work results
            </ListItem>
            <ListItem style="mb-1">
              Engaging in reasoned discussions of solution approaches within a
              team
            </ListItem>
            <ListItem style="mb-1">
              Game development in the Godot Engine
            </ListItem>
            <ListItem style="mb-1">
              Development of procedural generation algorithms
            </ListItem>
            <ListItem style="mb-1">
              Creating a VR experience and working with Godots XR Tools
            </ListItem>
          </ul>
        </div>
        <hr />
        <p className="mb-4 mt-2 min-[2000px]:text-[1.5rem]">
          <b>
            You can find the published version of Assemble! over on{" "}
            <a
              title="Assemble! store page"
              href="https://store.steampowered.com/app/2791890/Assemble/"
              className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
            >
              <u>Steam</u>
            </a>
            .
          </b>
        </p>
      </>
    </>
  );
}
