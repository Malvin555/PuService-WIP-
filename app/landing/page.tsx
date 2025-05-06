import Layout from "./layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Bell,
  BarChart2,
  Shield,
  ArrowRight,
  Play,
} from "lucide-react";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url(/placeholder.svg?height=500&width=1920)] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                  Introducing PuService
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  <span className="block">Modern Reporting</span>
                  <span className="block mt-1 text-emerald-600">
                    for a Better Country
                  </span>
                </h1>
                <p className="text-lg text-gray-600 sm:text-xl max-w-xl">
                  PuService provides comprehensive reporting solutions that help
                  government agencies and citizens track, analyze, and improve
                  public services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300"
                  >
                    <Play className="mr-2 h-4 w-4" /> Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-200"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">500+</span>{" "}
                    agencies already using our platform
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard preview"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 mb-4">
                Features
              </h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better way to report and track services
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our platform provides comprehensive tools for citizens and
                government agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <FileText className="h-5 w-5" />,
                  title: "Easy Reporting",
                  description:
                    "Submit reports quickly through our intuitive interface on web and mobile.",
                },
                {
                  icon: <Bell className="h-5 w-5" />,
                  title: "Real-time Updates",
                  description:
                    "Get instant notifications and track report status in real-time.",
                },
                {
                  icon: <BarChart2 className="h-5 w-5" />,
                  title: "Data Analytics",
                  description:
                    "Access analytics and visualizations to understand service performance.",
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "Secure Platform",
                  description:
                    "Your data is protected with enterprise-grade security and compliance.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 sm:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                  About Us
                </h2>
                <p className="text-3xl font-bold tracking-tight text-gray-900">
                  Dedicated to improving public services
                </p>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Founded in 2023, PuService has quickly become the leading
                    platform for public service reporting and analytics in our
                    country.
                  </p>
                  <p>
                    Our team combines expertise in technology, public
                    administration, and data science to create innovative
                    solutions that empower citizens and government agencies
                    alike.
                  </p>
                  <p>
                    We believe that transparent, efficient public services are
                    the foundation of a thriving society. By providing tools
                    that facilitate communication, tracking, and analysis, we
                    help create a more responsive and accountable government.
                  </p>
                </div>
                <Button variant="outline" className="mt-4">
                  Learn more about our mission
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Our team"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-xl shadow-lg border-4 border-white">
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="Office"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-emerald-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform public service reporting?
              </h2>
              <p className="mt-4 text-lg text-emerald-100">
                Join hundreds of government agencies and thousands of citizens
                already using PuService.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-emerald-700"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
