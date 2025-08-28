import Image from "next/image"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail} from "lucide-react"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#445964] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">MS</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#445964]">Matheus Santana</h1>
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          <li>
              <div className="w-20 h-13 bg-[#445964] rounded-3xl flex items-center justify-center">
                <Link href="#about" className="text-[#445964] font-medium">
                  <span className="text-white font-bold">About</span>
                </Link>
              </div>
          </li>
          <li>
              <div className="w-24 h-13 bg-[#445964] rounded-3xl flex items-center justify-center">
                <Link href="#about" className="text-[#445964] font-medium">
                  <span className="text-white font-bold">Portfolio</span>
                </Link>
              </div>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="text-xl text-[#445964] font-medium">Hello people,</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#445964] leading-tight">
            I AM A
            <br />
            PROGRAMMER
          </h2>
          <p className="text-xl text-[#445964] font-medium">Welcome to my portfolio website</p>
          <button className="bg-[#263138] text-white font-bold px-8 py-4 rounded-2xl">
            <Link rel="stylesheet" href="#about">
              Learn more about me
            </Link>
          </button>
          <div className="flex items-center gap-6 pt-8">
            <Link href="https://github.com/maatheusantanadev" aria-label="Github">
              <Github className="w-8 h-8 text-[#445964]" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mssantana@ecomp.uefs.br" aria-label="Email">
              <Mail className="w-8 h-8 text-[#445964]" />
            </Link>
            <Link href="https://www.linkedin.com/in/matheus-santana-37a760198/" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8 text-[#445964]" />
            </Link>
            <Link href="https://www.instagram.com/maatheusantana/" aria-label="Instagram">
              <Instagram className="w-8 h-8 text-[#445964]" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
               src="/imagens/Frame.svg"
              alt="Developer illustration"
              width={500}
              height={800}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#FBFBFB] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/imagens/minha_foto.svg"
              alt="Matheus Santana"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#445964] mb-4">Matheus Santana</h2>
          <p className="text-xl text-[#445964] max-w-4xl mx-auto mb-16">
            Hi, I'm Matheus Santana 👋 <br />
About Me:<br />
🧑‍🎓 I'm a student of Computer Engineering at Universidade Estadual de Feira de Santana - UEFS and a student of Systems Development at SENAI. <br />
💻 I'm passionate about software development and constantly expanding my knowledge and skills. <br />
🌱 I'm currently learning and gaining more experience in technologies like Node.js, React, PHP, Laravel and Next.js.
          </p>

          <h3 className="text-4xl md:text-6xl font-black text-[#263138] mb-12">Hard Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SkillCard name="Python" rating={4} />
            <SkillCard name="HTML" rating={3} />
            <SkillCard name="React.js" rating={3} />
            <SkillCard name="JavaScript" rating={4} />
            <SkillCard name="CSS" rating={3} />
            <SkillCard name="MySQL" rating={3} />
            <SkillCard name="Postgree" rating={3} />
            <SkillCard name="Node.js" rating={3} />
            <SkillCard name="Next.js" rating={3} />
            <SkillCard name="Tailwind.js" rating={3} />
            <SkillCard name="JAVA" rating={4} />
            <SkillCard name="C" rating={4} />
            <SkillCard name="Android" rating={4} />
            <SkillCard name="PHP" rating={4} />
            <SkillCard name="Laravel" rating={4} />
            <SkillCard name="Angular" rating={3} />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[#FBFBFB] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-4xl md:text-6xl font-black text-[#263138]">My</h3>
            <h2 className="text-4xl md:text-6xl font-black text-[#445964] mb-4">Portfolio</h2>
            <p className="text-xl text-[#445964]">These are some of the jobs and projects I have already completed.</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-[#263138] text-white font-bold px-6 py-4 rounded-2xl">Demonstrations</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      
         

            <div className="bg-[#445964] h-100 rounded-2xl">
              <a href="https://maatheusantanadev.github.io/projeto-gta/" target="_blank">
                      <img src="/imagens/projeto-gta 1.svg" alt="Imagem 1" className="w-full h-full object-cover" />
                      <h3>Project GTA</h3>
              </a>
            </div>

            <div className="bg-[#DFDFDF] h-100 rounded-2xl">
              <a href="https://maatheusantanadev.github.io/House-of-Dragons/" target="_blank">
                        <img src="/imagens/site 1.svg" alt="Imagem 2" className="w-full h-full object-cover" />
                        <h3>House of Dragons</h3>
              </a>
            </div>

            <div className="bg-[#552828] h-100 rounded-2xl">
              <a href="https://github.com/vitoriatanan/BibliotecaRegia" target="_blank">
                        <video
                            src="/videos/javaPBL.mp4"
                            className="w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                              <h3>Projeto Biblioteca integrado com JAVA </h3>
              </a>
            </div>
            <div className="bg-[#1d4a20] h-64 w-[1245px] rounded-2xl">
              <a href="https://github.com/maatheusantanadev/FlappyBird_IA" target="_blank">
                      <video
                            src="/videos/pythonIA.mp4"
                            className="w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                              <h3>Projeto Flappy Bird integrado com IA </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="bg-[#FBFBFB] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="inline-block text-4xl md:text-6xl font-black">
            <span className="text-[#263138]">My</span>
            <span className="text-[#445964]"> Techs</span>
          </h2>

          <div className="mt-24 mb-16">
            <p className="text-xl text-[#445964]">Technologies</p>
            <h3 className="text-3xl font-black text-[#445964] mb-8">Already used</h3>

            <div className="flex justify-center gap-8 flex-wrap">
              <TechIcon name="HTML" />
              <TechIcon name="CSS" />
              <TechIcon name="JavaScript" />
              <TechIcon name="React" />
              <TechIcon name="Python" />
              <TechIcon name="Node.js" />
              <TechIcon name="Next.js" />
              <TechIcon name="PHP" />
              <TechIcon name="Laravel" />
              <TechIcon name="Angular" />
              <TechIcon name="Quartus" />
              <TechIcon name="C" />
              <TechIcon name="JAVA" />
              <TechIcon name="MySQL" />
              <TechIcon name="Postgree" />
              <TechIcon name="Tailwind.js" />

              
            </div>
          </div>

          <div className="mt-24">
            <p className="text-xl text-[#445964]">Technologies</p>
            <h3 className="text-3xl font-black text-[#445964] mb-8">Currently Developing</h3>

            <div className="flex justify-center gap-8 flex-wrap">
              <TechIcon name="React Native" />
              <TechIcon name="TypeScript" />
              <TechIcon name="Next.js" />
              <TechIcon name="PHP" />
              <TechIcon name="Laravel" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#FBFBFB] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#445964]">Experiences</h2>
            </div>
            <p className="text-xl text-[#445964] md:text-right max-w-md mt-4 md:mt-0">
               My journey is just beginning, always learning...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#263138] rounded-2xl p-6 text-white">
              <h4 className="text-2xl font-black text-[#445964] mb-4">Cargo</h4>
              <p className="text-center">
                🚀 Looking for my first opportunity as a developer.
With dedication, constant learning, and a passion for technology, I'm ready to contribute real solutions and grow alongside your team.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 40.5H18V18H40.5V40.5ZM72 40.5H49.5V18H72V40.5Z" fill="#445964" />
              </svg>
            </div>
            <p className="text-xl text-[#445964] mb-4">
              "Learning is the only thing that the mind never tires of, is never afraid of, and never regrets."
            </p>
            <p className="text-2xl font-black text-[#263138]">~Leonardo da Vinci</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#263138] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Matheus Santana. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function SkillCard({ name, rating }: { name: string; rating: number }) {
  return (
    <div className="mb-8">
      <h4 className="text-2xl font-black text-[#445964] mb-4">{name}</h4>
      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-10 h-2 mx-1 rounded-full ${i < rating ? "bg-[#445964]" : "bg-[#445964]/20"}`} />
        ))}
      </div>
    </div>
  )
}

function TechIcon({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-[#445964] rounded-full flex items-center justify-center mb-2">
        <span className="text-white text-2xl font-bold">{name.charAt(0)}</span>
      </div>
      <span className="text-[#445964] font-medium">{name}</span>
    </div>
  )
}

