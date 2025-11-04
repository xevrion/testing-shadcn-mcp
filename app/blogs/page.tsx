import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogsPage() {
  const blogs = [
    {
      title: "Getting Started with Next.js 14",
      description: "Learn how to build modern web applications with the latest features in Next.js 14, including Server Components and Server Actions.",
      date: "2025-10-15",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"],
      slug: "getting-started-nextjs-14"
    },
    {
      title: "Mastering TypeScript: Advanced Types",
      description: "Dive deep into TypeScript's advanced type system and learn how to write more type-safe and maintainable code.",
      date: "2025-10-08",
      readTime: "8 min read",
      tags: ["TypeScript", "JavaScript", "Programming"],
      slug: "mastering-typescript-advanced-types"
    },
    {
      title: "Building Accessible React Components",
      description: "A comprehensive guide to creating accessible React components that work for everyone, including keyboard navigation and screen readers.",
      date: "2025-10-01",
      readTime: "6 min read",
      tags: ["React", "Accessibility", "UX"],
      slug: "building-accessible-react-components"
    },
    {
      title: "Tailwind CSS: Beyond the Basics",
      description: "Explore advanced Tailwind CSS techniques including custom plugins, dynamic classes, and building your own design system.",
      date: "2025-09-24",
      readTime: "7 min read",
      tags: ["Tailwind CSS", "CSS", "Design"],
      slug: "tailwind-css-beyond-basics"
    },
    {
      title: "State Management in React: A Complete Guide",
      description: "Compare different state management solutions in React including Context API, Redux, Zustand, and Jotai to choose the right one for your project.",
      date: "2025-09-17",
      readTime: "10 min read",
      tags: ["React", "State Management", "Architecture"],
      slug: "state-management-react-guide"
    },
    {
      title: "Optimizing Web Performance",
      description: "Learn essential techniques for improving web performance, from code splitting to image optimization and lazy loading.",
      date: "2025-09-10",
      readTime: "9 min read",
      tags: ["Performance", "Web Development", "Optimization"],
      slug: "optimizing-web-performance"
    },
    {
      title: "GraphQL vs REST: When to Use What",
      description: "An in-depth comparison of GraphQL and REST APIs, their pros and cons, and guidance on choosing the right approach for your project.",
      date: "2025-09-03",
      readTime: "6 min read",
      tags: ["GraphQL", "REST", "APIs"],
      slug: "graphql-vs-rest"
    },
    {
      title: "Docker for Frontend Developers",
      description: "A beginner-friendly introduction to Docker, containerization, and how to use Docker in your frontend development workflow.",
      date: "2025-08-27",
      readTime: "8 min read",
      tags: ["Docker", "DevOps", "Containerization"],
      slug: "docker-for-frontend-developers"
    },
    {
      title: "Building a Design System with Radix UI",
      description: "Step-by-step guide to creating a scalable and accessible design system using Radix UI primitives and Tailwind CSS.",
      date: "2025-08-20",
      readTime: "12 min read",
      tags: ["Design Systems", "Radix UI", "Components"],
      slug: "building-design-system-radix-ui"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="container py-16 md:py-24">
          <div className="space-y-4 text-center">
            <Badge className="mb-2">Blog</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Thoughts & Insights
            </h1>
            <p className="max-w-[700px] mx-auto text-lg text-muted-foreground">
              Articles about web development, design, and technology. Sharing knowledge and
              experiences from my journey as a developer.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="container pb-16 md:pb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={blog.date}>
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {blog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href={`/blogs/${blog.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container pb-16 md:pb-24">
          <Card className="bg-muted">
            <CardHeader className="text-center space-y-4 py-12">
              <CardTitle className="text-3xl font-bold">
                Stay Updated
              </CardTitle>
              <CardDescription className="text-lg max-w-[600px] mx-auto">
                Subscribe to my newsletter to get the latest articles and insights delivered
                straight to your inbox. No spam, unsubscribe at any time.
              </CardDescription>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="mailto:hello@example.com?subject=Newsletter Subscription">
                    Subscribe to Newsletter
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
