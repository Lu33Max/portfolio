import ExperienceLayout, {
  ContentImage,
  HorizontalContainer,
  InTextLink,
  Paragraph,
} from "~/components/WorkExperience/ExperienceLayout";

function Domeba() {
  return (
    <ExperienceLayout
      pageTitle="domeba"
      project={[
        <HorizontalContainer>
          <div>
            <Paragraph>
              Based in the german city of Chemnitz, domeba focuses on providing
              their customers with software solutions on the fields of legal
              compliance, human resources and safety regulations. Starting out
              with a tiny team their solutions have stood the test of time and
              by now their services are used by companies like Coca Cola,
              Unilever or AEG. Their flagship software iManSys allows partners
              to keep track of regular examinations or changes in laws and
              regulations but also offers them a direct connection to legal
              consulting partners.
            </Paragraph>
          </div>
          <ContentImage source="DomebaLogo.png" alt="Domeba Logo" />
        </HorizontalContainer>,
        <Paragraph>
          domeba itself is only the developer of said tools and still requires
          external legal consulting partners to work together with each
          potential customer to figure out relevant regulations and first set up
          their individual version of the iManSys software. To become more
          independent from such partners and also potentially offer a more
          broadly available version of their software they now want to expand
          into the branch of legal consulting. By building a massive database of
          international laws and regulations neatly organized and categorized,
          the goal is for future partners not to be required to take part in an
          extensive legal consulting but instead just take a basic survey about
          their company's situation. This new enhanced version of iManSys then
          takes said input to search the entire database for every legal
          document that would concern the company and offer them a simple
          guideline on all regulations that are required of them.
        </Paragraph>,
      ]}
      role={[
        <HorizontalContainer>
          <ContentImage source="DomebaFlow.png" alt="Program FlowChart" />
          <Paragraph>
            With the first weeks spent on coming up with an overall goal for our
            collaboration and transferring the rough idea of data collection and
            processing into an actual programmatic flow, we decided to split the
            entire workflow into four different parts that would each be worked
            on by a smaller subgroup of our student team: acquisition,
            extraction, homogenization and visualization. As our results are
            directly taken over by domeba after project completion we had to
            follow their already used internal tech stack consisting of
            AngularJS, .NET Core with Entity Framework and the Azure DevOps
            Tools for organization and code tracking.
          </Paragraph>
        </HorizontalContainer>,
        <Paragraph>
          With my previous experience with .NET and C# in general I became team
          lead of the extraction step and was tasked with creating a way to
          extract programmatically usable data from legal texts offered by
          different providers in various formattings and data formats. While
          structured formats like HTML, XML or JSON could be worked with
          comparably easy because of existing libraries, the complex challenge
          lied in retrieving structured data from PDF files. Recognizing
          headings, deciding which blocks of text were part of the same
          structural unit and even extracting text from embedded images in an
          ordered manner were all just a few parts of what made working with the
          PDF format so difficult.
        </Paragraph>,
        <HorizontalContainer>
          <Paragraph>
            In regards to the user experience of the persons tasked with
            overseeing the collection process from within domeba we designed a
            system of reusable patterns so that extraction settings can be
            shared across multiple documents from the same source following a
            similar structure. To make the creation process behind these
            patterns as easily accessible as possible I also helped out in the
            visualization department to create the entire frontend interface for
            the pattern editor, giving users a visual depiction of what each
            rule will do on the given example document and allowing for
            test-parses to inspect the output for potential errors and making
            adjustments within the patterns.
          </Paragraph>
          <ContentImage source="DomebaSite.png" alt="Pattern Editor" />
        </HorizontalContainer>,
        <Paragraph>
          With the extraction logic for structured data formats done, I split
          off from the rest of team that continued work on the parsing of PDF
          files went over to the next phase - data enrichment. With the goal of
          a fully automated recommendation system in mind all of the legal
          documents stored inside the database would need some sort of
          categorization as just a basic fulltext search would always leave room
          for missing documents without an exact word for word match. After
          consulting with one of domeba's lawyers about what they would desire
          from the software solution we were designing, we settled on a basic
          labeling system to categorize texts by their type, origin, legal field
          and topic. To keep this labeling process fully automated, I was tasked
          with conceptualizing and implementing a Machine Learning approach with
          ML.NET that would analyze each document on a multitude of parameters
          &#40;keywords, sentence structure, word frequency...&#41;. Those
          analyzation results are then fed into a multiclass prediction
          algorithm calculating a probability for each label and automatically
          assigning it if a threshold is crossed.
        </Paragraph>,
        <HorizontalContainer>
          <ContentImage
            source="DomebaPressImage.webp"
            alt="Final Presentation"
          />
          <Paragraph>
            We presented our results in front of multiple company
            representatives including domeba's CEO Matthias Domes,. Closing our
            collaboration off with discussions about potentials for future
            development directions we received strongly positive feedback for
            our achievements with Mr. Domes even saying "What has been created
            here has real potential".
          </Paragraph>
        </HorizontalContainer>,
      ]}
      skills={[
        "Structured planning of a software solution based on stakeholder and user requirements",
        "Organization within a team of over 10 people",
        "Leading a team, organizing tasks and reviewing results from different members",
        "Advanced coding paradigms within the .NET Framework and in API design",
        "First experiences with Machine Learning using ML.NET",
        "Working inside a production-grade code management cycle with task creation, review cycles and security measurements",
        "Regularly presenting the current state of production and defending design decisions in front of stakeholders",
        "Working with a multitude of third-party libraries and acquiring knowledge about their implementation and use",
      ]}
      footer={
        <>
          The official press release about this collaboration can be found on{" "}
          <InTextLink
            content="domeba's homepage"
            url="https://www.domeba.com/pressemitteilung-hochschule-mittweida/"
            linkTitle="Press Release from domeba"
          />
          .
        </>
      }
    />
  );
}

export default Domeba;
