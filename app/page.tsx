import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Code, Palette, Smartphone, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1">
              Available for opportunities
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              A passionate full-stack developer creating beautiful, functional web experiences.
              I specialize in modern web technologies and love building products that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:hello@example.com">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <Badge>About Me</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Crafting Digital Experiences
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 5 years of experience in web development, I&apos;ve worked on a diverse range
                of projects from startups to enterprise applications. I&apos;m passionate about clean code,
                user experience, and staying up-to-date with the latest technologies.
              </p>
              <p className="text-muted-foreground text-lg">
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical
                blog posts, or exploring new frameworks and tools.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Clean Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, scalable code that stands the test of time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Palette className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Design Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creating beautiful interfaces with attention to detail.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Smartphone className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Responsive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Building apps that work seamlessly across all devices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ArrowRight className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimizing for speed and exceptional user experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container py-16 md:py-24 bg-muted/50">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Badge>Skills</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Technologies I Work With
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                A selection of the tools and technologies I use to bring ideas to life.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Building interactive user interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Creating robust server solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Others</CardTitle>
                  <CardDescription>Development and deployment tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16 md:py-24">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Badge>Projects</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Work
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Here are some of my recent projects that showcase my skills and experience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
                  tags: ["Next.js", "Stripe", "PostgreSQL"],
                  github: "https://github.com",
                  demo: "https://example.com"
                },
                {
                  title: "Task Management App",
                  description: "Collaborative task management tool with real-time updates, teams, and project tracking.",
                  tags: ["React", "Node.js", "Socket.io"],
                  github: "https://github.com",
                  demo: "https://example.com"
                },
                {
                  title: "Portfolio Generator",
                  description: "SaaS platform that helps developers create beautiful portfolios in minutes.",
                  tags: ["Next.js", "Tailwind", "MDX"],
                  github: "https://github.com",
                  demo: "https://example.com"
                },
                {
                  title: "Weather Dashboard",
                  description: "Real-time weather application with forecasts, maps, and location-based alerts.",
                  tags: ["React", "OpenWeather API", "Charts"],
                  github: "https://github.com",
                  demo: "https://example.com"
                },
                {
                  title: "Blog CMS",
                  description: "Headless CMS for managing blog content with markdown support and SEO optimization.",
                  tags: ["Next.js", "MongoDB", "AWS S3"],
                  github: "https://github.com",
                  demo: "https://example.com"
                },
                {
                  title: "Social Media Dashboard",
                  description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
                  tags: ["Vue.js", "Express", "Chart.js"],
                  github: "https://github.com",
                  demo: "https://example.com"
                }
              ].map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-16 md:py-24 bg-muted/50">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What People Say
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Feedback from colleagues, clients, and collaborators I&apos;ve worked with.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Product Manager at TechCorp",
                  content: "Working with this developer was an absolute pleasure. They delivered high-quality code on time and were always open to feedback and iterations.",
                  avatar: "/avatars/01.png"
                },
                {
                  name: "Michael Chen",
                  role: "CTO at StartupXYZ",
                  content: "Exceptional technical skills combined with great communication. They helped us scale our platform and mentored our junior developers.",
                  avatar: "/avatars/02.png"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Designer at CreativeStudio",
                  content: "A rare developer who truly understands design. They brought my designs to life with pixel-perfect precision and smooth animations.",
                  avatar: "/avatars/03.png"
                },
                {
                  name: "David Kim",
                  role: "Founder at InnovateLabs",
                  content: "Their expertise in modern web technologies helped us build a robust and scalable application. Highly recommended!",
                  avatar: "/avatars/04.png"
                },
                {
                  name: "Lisa Thompson",
                  role: "Engineering Lead at DataFlow",
                  content: "Professional, reliable, and incredibly talented. They tackled complex challenges with creative solutions and clean code.",
                  avatar: "/avatars/05.png"
                },
                {
                  name: "James Wilson",
                  role: "CEO at WebSolutions",
                  content: "A true professional who goes above and beyond. Their attention to detail and commitment to quality is outstanding.",
                  avatar: "/avatars/06.png"
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="text-center space-y-4 py-12">
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg max-w-[600px] mx-auto">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </CardDescription>
              <div className="pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="mailto:hello@example.com">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
