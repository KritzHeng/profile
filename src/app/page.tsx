'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kriskanin Hengniran</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Image
                    src="/profile.png?height=200&width=200"
                    alt="Kriskanin Hengniran"
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">Kriskanin Hengniran</h2>
                  <p className="text-gray-600 mb-4">Blockchain Developer & Computer Science Student</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:kriskanin.h@gmail.com">
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com/KritzHeng" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://www.linkedin.com/in/kriskanin/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="md:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="presentations">Presentations</TabsTrigger>

              </TabsList>
              <TabsContent value="about">
                <About />
              </TabsContent>
              <TabsContent value="experience">
                <Experience />
              </TabsContent>
              <TabsContent value="projects">
                <Projects />
              </TabsContent>
              <TabsContent value="skills">
                <Skills />
              </TabsContent>
              <TabsContent value="presentations">
                <Presentation />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Kriskanin Hengniran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate blockchain developer and computer science student, 
          dedicated to creating innovative solutions that leverage the power of decentralized systems. 
          With a strong foundation in computer science and hands-on experience in blockchain development, 
          I strive to contribute to the evolution of this transformative technology.
          My work is particularly focused on the identity space, where I aim to enhance security and privacy through decentralized solutions.
        </p>
        <h3 className="font-semibold mt-6 mb-2">Education</h3>
        <ul className="space-y-2">
          <li>
            <p className="font-medium">B.S. Computer Science</p>
            <p className="text-sm text-gray-600">Kasetsart University, 2019 - 2024</p>
          </li>
          <li>
            <p className="font-medium">Triamudom Suksa Pattanakarn Ratchada School</p>
            <p className="text-sm text-gray-600">2016 - 2018</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

function Experience() {
  const experiences = [
    { title: "Web 5 Developer", company: "Finema", period: "JUL 2023 - Present" },
    { title: "Full-Stack Developer (Builder)", company: "Invisible Garden", period: "30 SEP 2024 - 10 NOV 2024" },
    { title: "Blockchain Developer", company: "Finstable", period: "Dec 2022 - May 2023" },
    { title: "Co-Founder & Dev Team Lead", company: "KU Blockchain Society", period: "Mar 2022 - Dec 2022" },
    { title: "Tutor", company: "", period: "2020 - Dec 2022" },
    { title: "Student Internship", company: "Finstable", period: "May 2022 - Oct 2022" },
    { title: "Blockchain Software Engineer @ BlockCamp 2022", company: "SCB 10X", period: "Aug 2022" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {experiences.map((exp, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function Projects() {
  const projects = [
    {
      title: "KUBCS Genesis Pass (NFT)",
      description: "An art-focused community pass for private mints of KUBCS Lab projects.",
      link: "https://opensea.io/collection/kubcs-genesis-pass",
      image: "/KUBCS_NFT.webp"
    },
    {
      title: "Finswap",
      description: "A DeFi project built on Rinkeby network using Next.js.",
      image: "/finswap.png"
    },
    {
      title: "Org Board",
      description: "Analytics dashboard for Gnosis Safe, built during SCB10X BlockCamp.",
      link: "https://github.com/panda3141592/BlockCamp2",
      image: "/orgboard.png"
    },
    {
      title: "BlockBooks Lab",
      description: "Web 3.0 accounting solution, winner at ETHONLINE 2022.",
      link: "https://ethglobal.com/showcase/blockbooks-lab-q6z84",
      image: "/blockbookslab.png"
    },
    {
      title: "Enauthn",
      description: "Decentralized identity solution using decentralized identifiers.",
      link: "https://enauthn.id",
      image: "/service-banner.png"
    },
    {
      title: "PrivacyVisa",
      description: "Secure payment solution using zero-knowledge proofs.",
      link: "https://github.com/invisible-garden/cm24-projects/tree/main/PrivacyVisa",
      image: "/privacyvisa.png"
    },
    {
      title: "ZK-Debit",
      description: "Decentralized payment platform with ZKPs, built at ETH GLOBAL BANGKOK 2024.",
      link: "https://github.com/zkNua/zkDebit",
      image: "/zk-debit-app2.png"
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  {project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C/C++", "Solidity", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Next.js", "NestJS", "NodeJS", "Express", "Spring Framework", "TypeORM", "Django", "Flask", "Bootstrap", "TailwindCSS", "Material UI", "Ethers.js", "SnarkJS", "Circomlib"],
    },
    {
      title: "Tools",
      skills: ["Git", "MySQL Workbench", "Docker", "Kubernetes", "MiniKube", "Postman", "Xampp", "IntelliJ IDEA", "VS Code", "Gitlab", "Jira", "AWS EC2", "AWS SES", "AWS IAM", "AWS S3", "Cloudflare", "Bash", "Shell Script"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


function Presentation() {
  const presentations = [
    { title: "Develop Application Using Non-Fungible Token", link: "https://drive.google.com/file/d/10sqdese2VdQ2698rdmWxEPPqCmXIptNZ/view?usp=sharing", image: "/NFT_pres.png" },
    { title: "Decentralized Application System", link: "https://drive.google.com/file/d/1sKJCd3Omptt0ztJ2RGrddHN9P4IvqV-O/view?usp=sharing", image: "/DAPP_pres.png" },
    { title: "Privacy Visa", link: "https://docs.google.com/presentation/d/13TtfFw_pdiMYni6JHb6lezTXBXhNLc3-ws0bn2EkkA0/edit?usp=sharing", image: "/PivacyVisa_pres.png" },
    { title: "KERI", link: "https://medium.com/finema/keri-tutorial-sign-and-verify-with-signify-keria-833dabfd356b", image: "/keriaCloud.png" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Presentations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {presentations.map((presentation, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <Image
                    src={presentation.image}
                    alt={presentation.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-semibold text-lg">{presentation.title}</h3>
                  <Button variant="outline" size="sm" asChild className="mt-2">
                    <Link href={presentation.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      See Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}