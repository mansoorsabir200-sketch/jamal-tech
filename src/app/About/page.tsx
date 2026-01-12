import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white px-6 py-16">
      {/* Header */}
      <div
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Jama Tech
        </h1>
        <p className="text-blue-200 text-lg">
          Jama Tech Software House is a new center for technology, education,
          and professional software solutions.
        </p>
      </div>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
        <Card className="bg-blue-950/60 border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="text-blue-400" /> Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200">
            Our vision is to become a leading technology center that empowers
            students, professionals, and businesses with modern IT skills and
            innovative software solutions.
          </CardContent>
        </Card>

        <Card className="bg-blue-950/60 border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-blue-400" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200">
            Our mission is to provide high-quality education, practical
            training, and reliable software services that meet real-world market
            needs.
          </CardContent>
        </Card>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-10">Who We Are</h2>
        <div className="bg-blue-950/60 border border-blue-800 rounded-2xl p-8 text-blue-200 leading-relaxed">
          Jama Tech Software House is built to bridge the gap between education
          and industry. We focus on teaching modern technologies such as
          programming, web development, databases, and networking while also
          delivering professional software solutions for businesses, shops, and
          organizations.
          <br />
          <br />
          We believe in practical learning, real projects, and hands-on
          experience to prepare our students and clients for success in today’s
          digital world.
        </div>
      </section>

      {/* Team & Values */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-10">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-blue-400" /> Practical Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              We focus on hands-on training and real-world projects, not just
              theory.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-blue-400" /> Professional Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              We deliver reliable, secure, and scalable software solutions.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-blue-400" /> Community Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              We aim to grow the local tech community through education and
              innovation.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto text-center bg-blue-950/60 border border-blue-800 rounded-2xl p-12">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-blue-200 mb-6">
          Want to learn technology or build software for your business? Contact
          us today.
        </p>
        <a href="https://wa.mansoor/93700267728" target="_blank">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <Phone /> WhatsApp
          </Button>
        </a>
      </section>
    </div>
  );
}
