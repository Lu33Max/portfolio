import Head from "next/head";
import Image from "next/image";
import React from "react";
import ListItem from "~/components/Utilities/ListItem";
import Highlight from "~/components/Utilities/highlight";

export default function SuperPong() {
  return (
    <>
      <Head>
        <title>SuperPong</title>
        <meta name="description" content="Super Pong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className="mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mb-[1rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
          Super Pong
        </h2>
        <h5 className="mb-12 text-2xl font-semibold max-md:mb-8 max-md:text-xl min-[2000px]:text-4xl">
          The Project
        </h5>
        <Highlight />
        <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
          <p className="mb-4">
            The original Pong game is now over 50 years old and has remained
            ingrained in people&apos;s minds through its simple concept up to
            the present day. The goal was to revive this design ideology by
            adding some simple enhancements to bring the game concept into the
            modern era. Thus, Super Pong was born, which challenges players not
            only in their reaction time but also with its strategic components.
            Collect different balls during a match and try to knock out your
            opponent through tactical deployment. Each ball comes with its own
            unique behavior pattern and values, providing the right solution for
            every situation.
          </p>
          <p className="mb-4">
            This concept was designed and implemented during the fourth semester
            at Mittweida University in the Game Programming module. The aim here
            was the individual creation of a simple game concept within the
            Unity Game Engine.
          </p>
          <div className="flex items-center justify-center gap-4 max-md:flex-col lg:mx-12 lg:gap-12">
            <div className="h-fit w-[50%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
              <Image
                priority
                src={"/assets/projects/SuperPong3.png"}
                alt="SuperPong Menu"
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div className="h-fit w-[50%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
              <Image
                priority
                src={"/assets/projects/SuperPong2.png"}
                alt="SuperPong Gameplay"
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
              Basics of 2D game development in Unity
            </ListItem>
            <ListItem style="mb-1">
              Advanced development paradigms in C#&nbsp;/&nbsp;Unity
            </ListItem>
            <ListItem style="mb-1">
              Independent organization and structured work
            </ListItem>
            <ListItem style="mb-1">
              Creation of time and task schedules
            </ListItem>
          </ul>
        </div>
        <hr />
        <p className="mb-4 mt-2 min-[2000px]:text-[1.5rem]">
          <b>
            Access the source code over on{" "}
            <a
              href="https://github.com/Lu33Max/super-pong"
              title="Super Pong on GitHub"
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
