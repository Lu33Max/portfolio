import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

export default function Centralbiohub() {
  return (
    <ExperienceLayout
      pageTitle="Central BioHub"
      project={[
        <Paragraph>
          Central BioHub GmbH is a startup that has now become the world&apos;s
          largest provider of human biospecimen. The global demand for
          biospecimen in research has been rapidly increasing in recent years.
          Whether it&apos;s for testing new vaccines or potential cancer
          treatments, researchers worldwide require samples, yet procurement
          often poses challenges. Due to the decentralized storage of samples in
          locations where they are collected (hospitals, university clinics,
          medical practices, etc.), it is difficult to reliably connect
          suppliers and buyers. This is where Central BioHub steps in, offering
          a central platform for providers and seekers of biospecimen to offer
          and search for samples.
        </Paragraph>,
        <HorizontalContainer>
          <div>
            <Paragraph>
              As a team of 8 students, our task was to redesign and adapt the
              online services of Central BioHub to meet customer requirements.
              Specifically, there were three projects that were supervised over
              three semesters: firstly, the public sales website, secondly, the
              Harmonizer, a tool for uploading supplier data into the
              company&apos;s internal database, and finally, the Predictor Tool,
              which is intended to make predictions about future sales based on
              past user data.
            </Paragraph>
            <Paragraph>
              The focus in the first semester was primarily on the Predictor
              Tool. This tool should be able to read Excel datasets on sales or
              website views, graphically process them, and make predictions
              about future developments. This information should be available to
              employees at any time in the form of a web application. 800,000
              samples.
            </Paragraph>
          </div>
          <ContentImage source="CBHWebsite1.png" alt="CBH Main Website" />
        </HorizontalContainer>,
        <p>
          In the subsequent semesters, the focus shifted to the website and the
          Harmonizer. The website was to be completely rebuilt from scratch,
          independent of existing infrastructure, to test possible design
          concepts based on customer feedback. Additionally, a completely new
          filtering system for samples was added to allow users to make highly
          precise search settings among The Harmonizer, on the other hand, was
          an internal management tool that allowed the import of supplier
          datasets into the company&apos;s internal database as accurately and
          loss-free as possible. After an initial introduction with Central
          BioHub, customers received their own access, allowing them to easily
          add newly arriving datasets with just a few clicks.
        </p>,
      ]}
      role={[
        <HorizontalContainer>
          <ContentImage source="CBHHarmonizer.png" alt="CBH Harmonizer" />
          <Paragraph>
            At the beginning of the project, I initially assumed the role of
            Technical Lead. With the guidelines from our stakeholders, it was my
            responsibility to find a suitable tech stack for the project and to
            introduce and guide the other members of the programming team based
            on this stack. Due to the existing internal infrastructure, the
            choice of backend technologies fell on a .NET Core API in
            conjunction with a Microsoft SQL Server. The frontend, on the other
            hand, was created with React. I created the basic structure of the
            project, took over the scheduling for the completion of individual
            features, and distributed tasks within the programming team
            accordingly. By the end of the semester, in addition to my lead
            position, I also took on the role of group leader, representing the
            interests of the group in regular status meetings or other
            communications and informing the stakeholders about our current
            progress.
          </Paragraph>
        </HorizontalContainer>,
        <Paragraph>
          In the following semesters, we were given much more freedom. For work
          on the website and the Harmonizer, we were allowed to independently
          select our own tech stack without restrictions from existing
          technologies. Through my decision, we chose the T3-stack based on
          Next.js and TypeScript, which allowed us to work in a unified project
          without strict separation of front and backend. With previous
          experience with React, which forms the basis of the Next.js framework,
          the entire team was able to make progress without long transition
          times.
        </Paragraph>,
        <HorizontalContainer>
          <p>
            In addition to my organizational responsibilities, my main activity
            in these semesters was the creation of the new filtering logic for
            the website. As researchers sometimes have very specific
            requirements for their samples, the existing system, in which all
            set filters were simply logically concatenated one after the other,
            was no longer sufficient for some. With the new system found in the
            Expert Search, filters are now divided into groups. Any number of
            filters can belong to each group, which can be connected with
            logical AND or OR operations or even completely excluded. In
            addition to filters, subgroups can also belong to groups, which are
            linked in the same way and can themselves contain filters or further
            subgroups. This project presented me with the great challenge of
            recursive programming, which continued to occupy me throughout the
            remaining project due to ever-increasing stakeholder requirements.
          </p>
          <ContentImage source="CBHWebsite2.png" alt="Expert Product Search" />
        </HorizontalContainer>,
        <p>
          After completing the technical work, the last semester involved the
          scholarly preparation and writing of a scientific paper, in which I,
          as one of the two lead authors, wrote the technical implementation
          details. With this paper, we applied for the Junior Scientist
          Conference 2024, and if our submission is accepted, we plan to have a
          representative from our group present there.
        </p>,
      ]}
      skills={[
        "Leading a team",
        "Creating organizational plans, timelines, and task planning",
        "Programming with C#, JavaScript, and TypeScript",
        "Handling Java/TypeScript-based frameworks like React and Next.js",
        "Writing and working with requirements analyses",
        "Communicating with stakeholders and conveying work results",
      ]}
      footer={
        <>
          Access the source code for all three projects over on GitHub:&nbsp;
          <InTextLink
            content="Website"
            url="https://github.com/Lu33Max/cbh-website"
            linkTitle="CBH Website on GitHub"
          />
          ,&nbsp;
          <InTextLink
            content="Harmonizer"
            url="https://github.com/Lu33Max/cbh-harmonizer"
            linkTitle="CBH Harmonizer on GitHub"
          />
          ,&nbsp;
          <InTextLink
            content="Predictor"
            url="https://github.com/Lu33Max/cbh-predictor-new"
            linkTitle="CBH Predictor on GitHub"
          />
          .
        </>
      }
    />
  );
}
