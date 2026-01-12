import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Smartphone,
  GraduationCap,
  Network,
  Server,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br mt-12 from-blue-950 via-blue-800 to-blue-950 text-white px-6 py-16">
      {/* Page Header */}
      <div
        // initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Jama Tech Software House provides professional education and
          real-world technology solutions for individuals and businesses.
        </p>
      </div>

      {/* Education & Training Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-10 flex  gap-2">
          <GraduationCap className="text-blue-400 size-10 " /> Education &
          Training
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Code className="text-blue-400" /> Programming & Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Bootcamp-style training in JavaScript, Java, C++, Python, and
              modern web development (Frontend & Backend).
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Smartphone className="text-blue-400" /> Mobile Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Practical mobile application development for Android and
              cross-platform solutions.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Network className="text-blue-400" /> Networking Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Professional networking education including CIT courses, CCNA,
              CCNP, with hands-on practical labs.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Software & Business Services Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-200">
          <Server className="text-blue-400" /> Software & Business Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-blue-950/60 border-blue-800 ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Database className="text-blue-400" /> Database Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Design and development of secure databases for shops, bazaars,
              companies, and enterprise systems.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Code className="text-blue-400" /> E-commerce & Web Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Complete e-commerce websites, business management systems, and
              online platforms tailored to your needs.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-200">
                <Server className="text-blue-400" /> Desktop Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Desktop-based software solutions for offices, schools, shops, and
              organizations.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center bg-blue-950/60 border border-blue-800 rounded-2xl p-12">
        <h3 className="text-2xl font-bold mb-4">
          Build Your Future with Jama Tech
        </h3>
        <p className="text-blue-200 mb-6">
          Whether you want to learn technology or build powerful software for
          your business, Jama Tech is your trusted partner.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <a href="/Contact"> Contact Us</a>
        </Button>
      </section>
    </div>
  );
}
