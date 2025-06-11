import { Card, CardContent } from "@/components/ui/card"
import { skillsData } from "@/data/skills-data"
import AnimateInView from "./animate-in-view"

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </AnimateInView>

        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 w-max">
            {skillsData.map((category, index) => (
              <AnimateInView key={index} animation="fade-up" delay={index * 100}>
                <Card className="w-80 h-full transition-all duration-300 hover:shadow-lg gradient-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{category.description}</p>
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-2 rounded-full transition-all duration-1000 ease-out gradient-bg"
                              style={{
                                width: `${skill.level}%`,
                                transform: "translateX(-100%)",
                                animation: "slideRight 1.5s forwards",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ← Scroll horizontally to see more skills →
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
