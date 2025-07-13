import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { projectsData } from "@/data/projects-data"
import { ExternalLink, Github } from "lucide-react"
import AnimateInView from "./animate-in-view"

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Projects</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work and research projects
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] gradient-border">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-transform duration-500 group-hover:scale-110">
                    {project.image ? (
                      <img
                        src={project.image || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                        <span className="text-lg font-medium">{project.title.split(" ")[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary/20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 gradient-border"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild size="sm" className="transition-all duration-300 hover:scale-105 gradient-bg">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
