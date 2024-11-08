import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import enauthn from '../public/enauthn.png';
import privacyVisaImage from '../public/privacyvisa.png';
import zk from '../public/zk.png';
import invisbleGarden from '../public/invisiblegarden.png';
import FinSwap from '../public/finswap.png';
import OrgBoard from '../public/orgboard.png';
import BlockBooksLab from '../public/blockbookslab.png';
import { Github, Linkedin, Mail } from 'lucide-react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="container">
//           <Portfolio />
//         </div>
//       </header>
//     </div>
//   );
// }


// <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
// <div className="max-w-6xl mx-auto space-y-8">
//     <Card>
//         <CardContent className="pt-6">
//             <div className="flex flex-col md:flex-row items-center gap-6">
//                 <Profile />

export default function Portfolio() {
    return (
        <div className=" min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <Card className="bg-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Profile />
                            <About />
                        </div>
                    </CardContent>
                </Card>
                <Education />
                <Experience />
                <Skills />
                <Accomplishments />
                <Development />
                <Presentation />
            </div>
        </div>
    );
}

function Profile() {
    return (
        <div className="flex justify-center">
            <Image
                className="rounded-full border-4 border-primary"
                src="https://media.licdn.com/dms/image/v2/D5603AQHSQ4RYXfAuzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712068010475?e=2147483647&v=beta&t=SigcoLPskYGjDitr0QCtOzJY7CmGXSjSYDNaSxsVew4"
                alt="Profile"
                width={180}
                height={180}
            />
        </div>
    );
}

function About() {
    return (
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">Kriskanin Hengniran</h1>
            <p className="text-gray-400 mt-2">Blockchain Developer & Computer Science Student</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <Button variant="outline" size="icon" asChild className="text-gray-300 border-gray-600">
                    <Link href="mailto:kriskanin.h@gmail.com">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="text-gray-300 border-gray-600">
                    <Link href="https://github.com/KritzHeng" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="text-gray-300 border-gray-600">
                    <Link href="https://www.linkedin.com/in/kriskanin/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

function Education() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold text-white">B.S. Computer Science</h3>
                    <p className="text-sm text-gray-400">Kasetsart University (2019 - 2024)</p>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Triamudom Suksa Pattanakarn Ratchada School</h3>
                    <p className="text-sm text-gray-400">2016 - 2018</p>
                </div>
            </CardContent>
        </Card>
    );
}

function Experience() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {[
                    { title: "Web 5 Developer", company: "Finema", period: "JUL 2023 - Present" },
                    { title: "Full-Stack Developer ( Builder )", company: "Invisible Gargen", period: "30 SEP 2024 - 10 NOV 2024" },
                    { title: "Blockchain Developer", company: "Finstable", period: "Dec 2022 - May 2023" },
                    { title: "Co-Founder & Dev Team Lead", company: "KU Blockchain Society", period: "Mar 2022 - Dec 2022" },
                    { title: "Tutor", company: "", period: "2020 - Dec 2022" },
                    { title: "Student Internship", company: "Finstable", period: "May 2022 - Oct 2022" },
                    { title: "Blockchain Software Engineer @ BlockCamp 2022", company: "SCB 10X", period: "Aug 2022" },
                ].map((job, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-white">{job.title}</h3>
                        <p className="text-sm text-gray-400">{job.company}</p>
                        <p className="text-sm text-gray-400">{job.period}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

function Skills() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2 text-white">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Java", "C/C++", "Solidity", "HTML", "CSS", "JavaScript", "SQL"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-200">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-white">Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "NestJS", "NodeJS", "Express", "Spring Framework", "TypeORM", "Django", "Flask", "Bootstrap", "TailwindCSS", "Material UI", "Ethers.js", "SnarkJS", "Circomlib"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-200">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-white">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Git", "MySQL Workbench", "Docker", "Kubernetes", "MiniKube", "Postman", "Xampp", "IntelliJ IDEA", "VS Code", "Gitlab", "Jira", "AWS EC2", "AWS SES", "AWS IAM", "AWS S3", "Cloudflare", "Bash", "Shell Script"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-200">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function Accomplishments() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Accomplishments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {[
                    { title: "WHH2021-Certificate of Completion", link: "https://drive.google.com/file/d/1VMSGg8Ui0BNsToPBNGU8Jmwb9_VwnGWn/view?usp=sharing" },
                    { title: "IBM Blockchain Foundation Developer", link: "https://drive.google.com/file/d/1RyZyAhSX4e_knkyq5SLXzHltvGcpSxKg/view?usp=sharing" },
                    { title: "React (Basic) Certificate", link: "https://www.hackerrank.com/certificates/02a103ca04f9" },
                ].map((accomplishment, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-white">{accomplishment.title}</h3>
                        <Link href={accomplishment.link} className="text-sm text-primary text-white hover:underline" target="_blank" rel="noopener noreferrer">
                            See Credential
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

function Development() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src="https://i.seadn.io/gae/eg_RQx59ufhM4cHHWg1vZ5JTgYFjwUzgETY0q8IgaFNsosu_Q60173lEBAiDL6lsmoLVoIuwAfg2BtXPf4RGU2Dfd85LojlQjyNXFw?w=500&auto=format"
                            alt="NFT Project"
                            width={500}
                            height={300}
                            className="rounded-lg w-80 h-auto bn"
                        />
                    </div>
                </div>
                <h4 className="font-semibold text-xl text-white">KUBCS Genesis Pass (NFT)</h4>
                <h3 className="text-gray-400">KUBCS Genesis Pass is an art-focused community pass that allows you to enter the private mint for one NFT of all projects KUBCS Lab will release.</h3>
                <Link href="https://opensea.io/collection/kubcs-genesis-pass" className="text-sm text-primary text-white hover:underline" target="_blank" rel="noopener noreferrer">
                    See on OpenSea
                </Link>
            </CardContent>


            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src={FinSwap}
                            alt="Finswap Project"
                            width={800}
                            height={500}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
                <h4 className="font-semibold text-xl text-white">KUBCS Genesis Pass (NFT)</h4>
                <h3 className="text-gray-400 text-center">
                    <i>September 2022</i><br />
                    <strong>Built: Finswap (Defi Project // Testnet)</strong><br />
                    <i>Blockchain Developer (Intern) at Finstable Co., Ltd.</i><br /><br />
                    Built Finswap with Next.js on the Rinkeby network (now deprecated). The project was for learning about smart contracts and their integration with Next.js.<br /><br />
                </h3>
                {/* <Link href="" className="text-sm text-primary text-white hover:underline" target="_blank" rel="noopener noreferrer">
                        See the project on GitHub
                </Link> */}
            </CardContent>


            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src={OrgBoard}
                            alt="Org Board Project"
                            width={800}
                            height={500}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
                <h4 className="font-semibold text-xl text-white">KUBCS Genesis Pass (NFT)</h4>
                <h3 className="text-gray-400 text-center">
                    <i>August 2022</i><br />
                    <strong>Built: Org Board (Project)</strong><br />
                    <i>SCB10X BlockCamp – Blockchain Software Engineer (Technical Track)</i><br /><br />
                    Built Org Board using Next.js in just 3 days. It serves as an analytics dashboard for Gnosis Safe, providing insights into Treasury activities for DAO projects.<br /><br />
                    <Link href="https://github.com/panda3141592/BlockCamp2" target="_blank" className="text-primary text-white hover:underline" rel="noopener noreferrer">See the project on GitHub</Link>
                </h3>
            </CardContent>

            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src={BlockBooksLab}
                            alt="BlockBooks Lab Project"
                            width={800}
                            height={500}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
                <h3 className="text-gray-400 text-center">
                    <i>September 2022</i><br />
                    <strong>Built: BlockBooks Lab (Project)</strong><br />
                    <i>ETHONLINE 2022 – WINNER OF 🥈 Covalent — Best Use</i><br /><br />
                    BlockBooks Lab simplifies accounting in Web 3.0, enabling builders to focus on creating by minimizing administrative burdens. Built with research-backed strategies to assist builders in better managing their finances.<br /><br />
                    <Link href="https://ethglobal.com/showcase/blockbooks-lab-q6z84" target="_blank" className="text-primary text-white hover:underline" rel="noopener noreferrer">See more details on Ethglobal</Link><br />
                    <Link href="https://github.com/greymatter2201/Blockbooks_BE" target="_blank" className="text-primary text-white hover:underline" rel="noopener noreferrer">See the project on GitHub</Link>
                </h3>
            </CardContent>



            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src="https://enauthn.id/img/service-banner.png"
                            alt="enauthn.id"
                            width={500}
                            height={300}
                            className="rounded-lg w-full h-auto bn"
                        />
                        <Image
                            src={enauthn}
                            alt="enauthn.id"
                            width={500}
                            height={300}
                            className="rounded-lg w-80 h-auto bn"

                        />
                        <div className="flex flex-col items-center space-y-2">
                            <h4 className="text-gray-400">Flagship managed service provider by Finema Co., Ltd., stands as a testament to our unwavering dedication to “enabling authenticity” within the realm of organizational digital identities.</h4>
                            <Link href="https://enauthn.id/" className="text-sm text-primary text-white hover:underline " target="_blank" rel="noopener noreferrer">
                                See on Enauthn.id
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardContent className="space-y-8 flex flex-col items-center justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:flex-row sm:flex-col">
                        <Image
                            src={zk}
                            alt="zk"
                            width={500}
                            height={300}
                            className="rounded-lg w-full max-w-md h-auto bn"
                        />
                        <Image
                            src={privacyVisaImage}
                            alt="Privacy Visa"
                            width={550}
                            height={350}
                            className="rounded-lg w-full max-w-lg h-auto bn"
                        />
                    </div>
                </div>
                <h3 className="font-semibold text-xl text-white">PrivacyVisa</h3>
                <h4 className="text-base text-gray-400">Secure payment solution that utilizes zero-knowledge proofs (ZKPs) to protect cardholder privacy. By enabling transactions without exposing sensitive information like card numbers and CVV codes, PrivacyVisa ensures that merchants can process payments without accessing or storing critical cardholder details. This innovative approach minimizes fraud risk and enhances privacy, offering a safer alternative for secure transactions.</h4>
                <div className="flex flex-col items-center space-y-2">
                    <h4 className="font-semibold text-white">Built in</h4>
                    <Image
                        src={invisbleGarden}
                        alt="invisbleGarden"
                        width={200}
                        height={200}
                        className="rounded-lg w-auto h-auto bn"
                    />
                    <Link href="https://github.com/invisible-garden/cm24-projects/tree/main/PrivacyVisa" className="text-sm text-primary text-white hover:underline" target="_blank" rel="noopener noreferrer">
                        See on PrivacyVisa
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

function Presentation() {
    return (
        <Card className="bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {[
                    { title: "Develop Application Using Non-Fungible Token", link: "https://drive.google.com/file/d/10sqdese2VdQ2698rdmWxEPPqCmXIptNZ/view?usp=sharing" },
                    { title: "Decentralized Application System", link: "https://drive.google.com/file/d/1sKJCd3Omptt0ztJ2RGrddHN9P4IvqV-O/view?usp=sharing" },
                    { title: "Privacy Visa", link: "https://docs.google.com/presentation/d/13TtfFw_pdiMYni6JHb6lezTXBXhNLc3-ws0bn2EkkA0/edit?usp=sharing" },
                ].map((presentation, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-white">{presentation.title}</h3>
                        <Link href={presentation.link} className="text-sm  text-primary text-white hover:underline" target="_blank" rel="noopener noreferrer">
                            See Detail
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

Portfolio;
