import { Card, CardContent } from "@/components/ui/card"
import { educationData } from "@/data/education-data"
import AnimateInView from "./animate-in-view"

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Education</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((education, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 150}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary gradient-border">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
                      <p className="text-primary font-medium mt-1">{education.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{education.period}</p>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
                      {education.achievements && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Achievements:</h4>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {education.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
