import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experienceData } from "@/data/experience-data"
import AnimateInView from "./animate-in-view"

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Professional Experience</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </AnimateInView>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 100}>
              <Card className="overflow-hidden border-l-4 border-primary transition-all duration-300 hover:shadow-lg gradient-border">
                <div className="md:grid md:grid-cols-4 md:gap-4">
                  <CardHeader className="md:col-span-1 pb-0 md:pb-6">
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-sm font-normal">
                        {experience.period}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{experience.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="md:col-span-3 pt-4 md:pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">{experience.title}</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{experience.description}</p>
                      </div>
                      {experience.achievements && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white">Key Achievements:</h5>
                          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {experience.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="transition-all duration-300 hover:bg-primary/20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-gray-800 dark:text-gray-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
