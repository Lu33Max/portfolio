import Image from "next/image"
import { type ReactNode } from "react"
import { BiChat, BiCodeBlock, BiCog, BiDownload, BiLogoGithub, BiLogoSteam, BiPencil } from "react-icons/bi"

type Skill = {
    title: string,
    icon: ReactNode,
    skills: {
        skill: string,
        percentage: string
    }[]
}

export const SKILLS: Skill[] = [
    {
        title: "Engines",
        icon: <BiCog className='w-10 h-auto max-lg:w-8 object-contain text-[#7c5fe6]'/>,
        skills: [
            { skill: "Unity", percentage: "90%" },
            { skill: "Unreal Engine", percentage: "70%" },
            { skill: "Godot", percentage: "50%" }
        ]
    },
    {
        title: "Languages",
        icon: <BiCodeBlock className='w-10 h-auto max-lg:w-8 object-contain text-[#7c5fe6]'/>,
        skills: [
            { skill: "C#", percentage: "90%" },
            { skill: "TypeScript", percentage: "90%" },
            { skill: "HTML", percentage: "80%" },
            { skill: "Java", percentage: "60%" }
        ]
    },
    {
        title: "Tools",
        icon: <BiPencil className='w-10 h-auto max-lg:w-8 object-contain text-[#7c5fe6]'/>,
        skills: [
            { skill: "Git", percentage: "90%" },
            { skill: "Blender", percentage: "75%" },
            { skill: "Photoshop", percentage: "60%" },
            { skill: "Office", percentage: "70%"}
        ]
    },
    {
        title: "Soft Skills",
        icon: <BiChat className='w-10 h-auto max-lg:w-8 object-contain text-[#7c5fe6]'/>,
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to detail", percentage: "75%" }
        ]
    },
]

type Experience = {
    title: string,
    date: string,
    responsibilities: string[],
    picture: string,
    skills:string[],
    imgLinks: string[]
    link: ReactNode,
    hideLearnMore?: boolean
}

export const EXPERIENCE: Experience[] = [
    {
        title: "Twisted Realms",
        date: "Nov 2023 - today",
        responsibilities: [
            "Competitive Multiplayer Board Game focused on PvPvE combat",
            "Slay enemies, collect items, level up and build your character to banish the evil from the world",
            "Take control over one of six different hunters, offering different playstyles and strategies",
            "Hinder your competitors and be the first player to defeat the omen and receive all the fame and honor for yourself"
        ],
        picture: "/assets/projects/TwistedRealms1.png",
        skills: ["Documentation","Conception","Combat Design","Unreal Engine","Asset Creation"],
        imgLinks: ["/assets/images/writing.png","/assets/images/idea.png","/assets/images/combat.png","/assets/images/unreal_engine_logo.png","/assets/images/painting.png"],
        link: <a title="Game Design Document (German)" download href="\assets\documents\Twisted_Realms_GDD.pdf"><BiDownload className="text-5xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a>
    },
    {
        title: "Echolight",
        date: "Feb 2023 - Feb 2024",
        responsibilities: [
            "Actionbased Rogue-like with heavy fast-paced combat focus",
            "Take control of Áine, princess of an ancient clan, and use the powers of day and night to banish the evil monsters from the forest",
            "Master all the different weapons with their unique playstyles and skills to reach the source of all evil",
            "A Procedurally generated world makes each run feel refreshing, offering new routes to take and items to collect"
        ],
        picture: "/assets/projects/Echolight1.jpg",
        skills: ["Documentation","Conception","Combat Design","Unity","C# Programming"],
        imgLinks: ["/assets/images/writing.png","/assets/images/idea.png","/assets/images/combat.png","/assets/images/unity_logo.png","/assets/images/CSharp_logo.png"],
        link: <a href="https://store.steampowered.com/app/2679520/Echolight/" title="Echolight on Steam" target="_blank"><BiLogoSteam className="text-6xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a>
    },
    {
        title: "Slidescape",
        date: "Sep 2022 - Feb 2023",
        responsibilities: [
            "Action Plattformer with puzzle elements where you build your own path",
            "Run, Jump and Fight through various rooms, each representing a different genre of video game history",
            "Gather skills from a number of genres and combine them cleverly to open new paths and escape this labyrinth",
            "Rearrange the room layout and switch between 2D and 3D view to gather a new perspective on your surroundings and discover secrets"
        ],
        picture: "/assets/projects/Slidescape1.png",
        skills: ["Documentation","Conception","Asset Creation"],
        imgLinks: ["/assets/images/writing.png","/assets/images/idea.png","/assets/images/painting.png"],
        link: <a title="Game Design Document (German)" download href="\assets\documents\Slidescape_GDD.pdf"><BiDownload className="text-5xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a>
    },
    {
        title: "Super Pong",
        date: "Mar 2023 - Aug 2023",
        responsibilities: [
            "A new twist on the classic pong gameplay to make a jump into the current decade",
            "Battle against friends or the AI on a number different stages, each with unique properties",
            "Collect various balls and use them in strategic situations or to surprise your opponent and gain the overhand in battle",
            "The first player to deplete their opponents HP emerges victorious",
            "Lots of customization options to design your perfect battle conditions"
        ],
        picture: "/assets/projects/SuperPong1.png",
        skills: ["Documentation","Conception","Unity","C# Programming"],
        imgLinks: ["/assets/images/writing.png","/assets/images/idea.png","/assets/images/unity_logo.png","/assets/images/CSharp_logo.png"],
        link: <a href="https://github.com/Lu33Max/super-pong" title="Project Files on GitHub" target="_blank"><BiLogoGithub className="text-6xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a>
    },
    {
        title: "Avalken",
        date: "Mar 2022 - Aug 2022",
        responsibilities: [
            "Classical 2D-Zelda-like Action-Adventure",
            "Defeat enemies, collect items and slowly progress through the world before you",
            "Explore and fight to gather experience and enhance your character for an advantage in battle",
            "Cleverly use and combine all your collected items in dungeons to solve puzzles and defeat tricky bosses"
        ],
        picture: "/assets/projects/Avalken1.png",
        skills: ["Documentation","Conception","Java Programming","IntelliJ"],
        imgLinks: ["/assets/images/writing.png","/assets/images/idea.png","/assets/images/java_logo.png","/assets/images/intellij_logo.png"],
        link: <a href="https://github.com/Lu33Max/avalken" title="Project Files on GitHub" target="_blank"><BiLogoGithub className="text-6xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a>
    },
]

export const OTHER_EXPERIENCE = [
    {
        title: "Central BioHub",
        date: "Sep 2022 - Feb 2024",
        responsibilities: [
            "Central BioHub GmbH is the largest supplier for human biospecimen worldwide",
            "The project involves a rework of the online presence as well as other internally used tools",
            "Overhaul of the website with design adjustments and implementation of a new recursive filtering system",
            "Development of a tool for graphical presentation and analysis of past datasets, enabling predictions about future trends based on this analysis",
            "Development of the Harmonizer to standardize diverse supplier data into a unified internal data format"
        ],
        picture: "/assets/projects/CBHWebsite1.png",
        skills: ["Team-Lead","Documentation","TypeScript Programming","Next.js Framework","C# Programming"],
        imgLinks: ["/assets/images/people.png","/assets/images/writing.png","/assets/images/TypeScript_logo.png","/assets/images/nextjs_logo.png","/assets/images/CSharp_logo.png"],
        link:  <a href="https://cbh-website.vercel.app" title="Live demo Website" target="_blank"><Image src={"/assets/images/CBH_Logo.png"} alt="CBH Logo" className="transition-all ease-in-out hover:translate-y-[-0.5rem]" width={50} height={50}/></a>
    },
    {
        title: "Portfolio",
        date: "Mar 2024 - today",
        responsibilities: [
            "Build using the Next.js and TypeScript based T3-Stack with Tailwind CSS styling",
            "Includes Features like page routing or caousels using the react-slick library",
            "Fully mobile compatible",
            "Complete source code available over on GitHub"
        ],
        picture: "/assets/projects/Portfolio.png",
        skills: ["Next.js Framework","TypeScript Development"],
        imgLinks: ["/assets/images/nextjs_logo.png","/assets/images/TypeScript_logo.png"],
        hideLearnMore: true,
        link: <a href="https://github.com/Lu33Max/portfolio" title="Project Files on GitHub" target="_blank"><BiLogoGithub className="text-6xl transition-all ease-in-out hover:translate-y-[-0.5rem]"/></a> 
    },
]
