import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { certificatesData } from "@/data/certificates-data"
import AnimateInView from "./animate-in-view"

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Certificates & Awards</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <AnimateInView key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary gradient-border">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <Badge className="self-start mb-3" variant="outline">
                      {certificate.date}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{certificate.title}</h3>
                    <p className="text-primary font-medium mb-3">{certificate.issuer}</p>
                    <p className="text-gray-700 dark:text-gray-300 flex-grow">{certificate.description}</p>
                    {certificate.url && (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-4 inline-block transition-colors duration-300 hover:text-primary/80"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}

          {/* Certificate Images */}
          <AnimateInView animation="fade-up" delay={certificatesData.length * 100}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary gradient-border flex flex-col items-center justify-center">
              <CardContent className="p-4 flex flex-col items-center">
                <img src="/Module 1.png" alt="Module 1 Certificate" className="rounded-lg shadow-md object-contain w-full h-64 mb-4 border border-primary" />
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Module 1 Training Certificate</h3>
              </CardContent>
            </Card>
          </AnimateInView>
          <AnimateInView animation="fade-up" delay={(certificatesData.length + 1) * 100}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary gradient-border flex flex-col items-center justify-center">
              <CardContent className="p-4 flex flex-col items-center">
                <img src="/Module 2.png" alt="Module 2 Certificate" className="rounded-lg shadow-md object-contain w-full h-64 mb-4 border border-primary" />
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Module 2 (2023) Certificate</h3>
              </CardContent>
            </Card>
          </AnimateInView>
          <AnimateInView animation="fade-up" delay={(certificatesData.length + 2) * 100}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary gradient-border flex flex-col items-center justify-center">
              <CardContent className="p-4 flex flex-col items-center">
                <img src="/Module 3.png" alt="Module 3 Certificate" className="rounded-lg shadow-md object-contain w-full h-64 mb-4 border border-primary" />
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Module 3 (2023) Certificate</h3>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

export default Certificates
