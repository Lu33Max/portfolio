import Head from "next/head";
import Highlight from "../Utilities/highlight";
import ListItem from "../Utilities/ListItem";
import { ReactNode } from "react";
import Image from "next/image";
import { FcUndo } from "react-icons/fc";

type ExperienceLayoutProps = {
  pageTitle: string;
  project: JSX.Element[];
  role: JSX.Element[];
  skills: string[];
  footer?: JSX.Element;
};

export default function ExperienceLayout({
  pageTitle,
  project,
  role,
  skills,
  footer,
}: ExperienceLayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mb-[1rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
        {pageTitle}
      </h1>
      <Highlight />

      {project.length > 0 && (
        <>
          <SubHeading heading="The project" />
          <Section>{project}</Section>
        </>
      )}

      {role.length > 0 && (
        <>
          <SubHeading heading="My role" />
          <Section>{role}</Section>
        </>
      )}

      {skills.length > 0 && (
        <>
          <SubHeading heading="Learned Skills" />
          <Section>
            <ul className="mb-8 ml-5 flex list-none flex-col gap-1">
              {skills.map((skill) => (
                <ListItem>{skill}</ListItem>
              ))}
            </ul>
          </Section>
        </>
      )}

      {footer && (
        <>
          <hr />
          <p className="mb-4 mt-2 min-[2000px]:text-[1.5rem]">
            <b>{footer}</b>
          </p>
        </>
      )}
    </>
  );
}

function SubHeading({ heading }: { heading: string }) {
  return (
    <h2 className="my-12 text-2xl font-semibold max-md:my-8 max-md:text-xl min-[2000px]:text-4xl">
      {heading}
    </h2>
  );
}

function Section({ children }: { children: ReactNode }) {
  return (
    <div className="mx-8 text-justify max-sm:mx-0 min-[2000px]:text-[1.5rem]">
      {children}
    </div>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function ContentImage({
  source,
  alt,
  width,
  height,
}: {
  source: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="h-auto max-w-[33%] flex-none rounded-2xl border-2 border-[#6751b9] p-2 max-md:w-[90%] max-sm:w-full">
      <Image
        src={`/assets/projects/${source}`}
        alt={alt}
        width={width ?? 600}
        height={height ?? 350}
        className="rounded-lg"
      />
    </div>
  );
}

export function InTextLink({
  content,
  url,
  linkTitle,
}: {
  content: string;
  url: string;
  linkTitle: string;
}) {
  return (
    <a
      href={url}
      title={linkTitle}
      target="_blank"
      className="text-[#9678ff] transition-colors duration-300 hover:text-[#b7a3ff]"
    >
      <u>{content}</u>
    </a>
  );
}

export function HorizontalContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-4 max-md:flex-col">
      {children}
    </div>
  );
}
