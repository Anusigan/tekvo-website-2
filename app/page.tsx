"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Users,
  Zap,
  Shield,
  Globe,
  Code,
  Smartphone,
  Database,
  Cloud,
  TrendingUp,
  Calendar,
  Award,
  Star,
  ChevronRight,
  Play,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ContactForm } from "@/components/contact-form"
import { ConsultationDialog } from "@/components/consultation-dialog"

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white relative">
      {/* Math exercise book background - perfect squares */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, 20px)",
            gridTemplateRows: "repeat(auto-fill, 20px)",
            gridAutoFlow: "row",
            opacity: 0.05,
          }}
        >
          {Array.from({ length: 5000 }).map((_, i) => (
            <div key={i} className="border border-gray-900 w-[20px] h-[20px]"></div>
          ))}
        </div>
      </div>

      {/* Consultation Dialog */}
      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="flex h-16 w-full items-center justify-between px-6 md:px-12 lg:px-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/tekvo1.png"
              alt="Tekvo Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <span className="ml-2 font-semibold text-red-900">Tekvo.net</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-red-900 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-red-900 transition-colors">
              Projects
            </Link>
            <Link href="#journey" className="text-gray-700 hover:text-red-900 transition-colors">
              Our Journey
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-16 relative z-10">
        <div className="mb-6">
          <Badge className="bg-red-100 text-red-900 hover:bg-red-100 px-4 py-2 text-sm font-medium">
            🚀 Introducing tekvo solutions
          </Badge>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-5xl leading-tight mb-8">
          We build <span className="text-red-900">extraordinary</span> technology solutions for tomorrow's leaders
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
          From revolutionary web applications to cutting-edge mobile experiences, we transform ambitious ideas into
          powerful digital realities that drive unprecedented business growth and innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
          <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-10 py-4 text-lg">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-900 text-red-900 hover:bg-red-50 px-10 py-4 text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-900 mb-2">2+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-900 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-900 mb-2">6</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-900 mb-2">1+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-900 hover:bg-red-100 mb-4">Currently Working On</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Live Projects in Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an inside look at the innovative projects we're currently building for our clients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-red-900 to-red-700 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-white/20 text-white">In Progress</Badge>
                  <div className="text-sm opacity-90">50% Complete</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">University Attendance Management System</h3>
                <p className="opacity-90">Revolutionary attendance management system for educational institutions</p>
              </div>
              <CardContent className="p-6">
                <Progress value={85} className="mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                 
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Expected Launch:July 2025</span>
                  <Button variant="ghost" size="sm" className="text-red-900">
                    Stay Tuned <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-white/20 text-white">Completed</Badge>
                  <div className="text-sm opacity-90">Deployed</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">MemoRaid- An Amnesia Rehabilitation Platform</h3>
                <p className="opacity-90">Modern Rehabilitation platform to rehabilitate from memory disorders</p>
              </div>
              <CardContent className="p-6">
                <Progress value={92} className="mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.Js</Badge>
                  <Badge variant="outline">Express.Js</Badge>
                  <Badge variant="outline">Supabase</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Launched on: May 2025</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-900"
                    onClick={() => window.open('https://memoraid.netlify.app', '_blank')}
                  >
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">Planning</Badge>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare IoT Platform</h4>
                <p className="text-sm text-gray-600 mb-4">Smart medical device integration system</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    IoT
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ML
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">Testing</Badge>
                  <Shield className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Crypto Trading Bot</h4>
                <p className="text-sm text-gray-600 mb-4">AI-powered automated trading system</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    APIs
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Research</Badge>
                  <Zap className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">VR Training Platform</h4>
                <p className="text-sm text-gray-600 mb-4">Immersive corporate training solution</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    VR
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Unity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    C#
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section id="journey" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-900 hover:bg-red-100 mb-4">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Tekvo Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading technology partner - here's how we've grown and evolved
            </p>
          </div>

          {/* Timeline with animations */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>

            <div className="space-y-12">
              <div className="flex items-center timeline-item animate-fadeIn">
                <div className="flex-1 text-right pr-8">
                  <Card className="border-0 shadow-lg ml-auto max-w-md animate-slideRight bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2019 - The Beginning</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Founded with a Vision</h4>
                      <p className="text-gray-600 text-sm">
                        Started as a 3-person team with a mission to democratize technology
                      </p>
                      <div className="mt-3 text-xs text-gray-500">3 Team Members • 5 Projects</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center timeline-item animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 text-left pl-8">
                  <Card className="border-0 shadow-lg mr-auto max-w-md animate-slideLeft bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2020 - First Breakthrough</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Major Client Success</h4>
                      <p className="text-gray-600 text-sm">
                        Delivered our first enterprise solution, gaining industry recognition
                      </p>
                      <div className="mt-3 text-xs text-gray-500">8 Team Members • 25 Projects</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex items-center timeline-item animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                <div className="flex-1 text-right pr-8">
                  <Card className="border-0 shadow-lg ml-auto max-w-md animate-slideRight bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2021 - Rapid Expansion</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Team Growth & New Services</h4>
                      <p className="text-gray-600 text-sm">Expanded into mobile development and AI solutions</p>
                      <div className="mt-3 text-xs text-gray-500">15 Team Members • 50 Projects</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center timeline-item animate-fadeIn" style={{ animationDelay: "0.9s" }}>
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 text-left pl-8">
                  <Card className="border-0 shadow-lg mr-auto max-w-md animate-slideLeft bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2022 - Innovation Hub</div>
                      <h4 className="font-semibold text-gray-900 mb-2">R&D Department Launch</h4>
                      <p className="text-gray-600 text-sm">
                        Established dedicated research team for emerging technologies
                      </p>
                      <div className="mt-3 text-xs text-gray-500">25 Team Members • 80 Projects</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex items-center timeline-item animate-fadeIn" style={{ animationDelay: "1.2s" }}>
                <div className="flex-1 text-right pr-8">
                  <Card className="border-0 shadow-lg ml-auto max-w-md animate-slideRight bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2023 - Global Recognition</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Awards & Partnerships</h4>
                      <p className="text-gray-600 text-sm">
                        Won "Best Tech Innovation" award and formed strategic partnerships
                      </p>
                      <div className="mt-3 text-xs text-gray-500">35 Team Members • 120 Projects</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center timeline-item animate-fadeIn" style={{ animationDelay: "1.5s" }}>
                <div className="flex-1 pr-8"></div>
                <div className="w-6 h-6 bg-red-900 rounded-full border-4 border-white shadow-lg z-10 animate-ping"></div>
                <div className="flex-1 text-left pl-8">
                  <Card className="border-0 shadow-lg mr-auto max-w-md bg-gradient-to-r from-red-50 to-white animate-slideLeft backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="text-red-900 font-bold text-lg mb-2">2024 - The Future</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Next-Gen Solutions</h4>
                      <p className="text-gray-600 text-sm">
                        Leading the charge in AI, blockchain, and quantum computing
                      </p>
                      <div className="mt-3 text-xs text-gray-500">50+ Team Members • 150+ Projects</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="mt-20">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-gray-900">Our Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-red-900 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">2,500%</div>
                    <div className="text-gray-600">Revenue Growth</div>
                    <div className="text-sm text-gray-500 mt-1">Since 2019</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-red-900 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">1,600%</div>
                    <div className="text-gray-600">Team Expansion</div>
                    <div className="text-sm text-gray-500 mt-1">From 3 to 50+ members</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-red-900 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">3,000%</div>
                    <div className="text-gray-600">Project Volume</div>
                    <div className="text-sm text-gray-500 mt-1">From 5 to 150+ projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-900 hover:bg-red-100 mb-4">What We Do</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that drive innovation and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Globe className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom web applications built with cutting-edge frameworks for optimal performance and user
                  experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Smartphone className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
                <p className="text-gray-600 mb-6">
                  Native and cross-platform mobile applications that deliver seamless experiences across all devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Flutter
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Swift
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Cloud className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Scalable cloud infrastructure and microservices architecture for enterprise-grade applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Azure
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Database className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent systems and predictive analytics to automate processes and drive insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PyTorch
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Shield className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Blockchain & Web3</h3>
                <p className="text-gray-600 mb-6">
                  Decentralized applications and smart contracts for the next generation of digital experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Solidity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Ethereum
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Web3.js
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-900 transition-colors">
                  <Code className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps & Automation</h3>
                <p className="text-gray-600 mb-6">
                  Streamlined development workflows and automated deployment pipelines for faster delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Kubernetes
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Jenkins
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Terraform
                  </Badge>
                </div>
                <Button variant="ghost" className="text-red-900 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-900 hover:bg-red-100 mb-4">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Tekvo transformed our entire digital infrastructure. Their expertise in cloud solutions saved us 40%
                  in operational costs."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Davis</div>
                    <div className="text-sm text-gray-600">CEO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The mobile app they built for us has over 1M downloads. Exceptional quality and ongoing support."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    EW
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Wilson</div>
                    <div className="text-sm text-gray-600">Founder, StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Their AI solution revolutionized our business processes. ROI was achieved within 6 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RJ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Robert Johnson</div>
                    <div className="text-sm text-gray-600">CTO, Enterprise Inc</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-900 hover:bg-red-100 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with our team and let's discuss your next big
              project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-1">hello@tekvo.com</p>
                      <p className="text-gray-600">support@tekvo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600 mb-1">123 Innovation Drive</p>
                      <p className="text-gray-600 mb-1">San Francisco, CA 94105</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-red-900 to-red-700 text-white">
                <CardContent className="p-8">
                  <h3 className="font-semibold mb-4">Quick Consultation</h3>
                  <p className="mb-6 opacity-90">
                    Need immediate assistance? Schedule a quick 15-minute consultation with our experts.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-red-900 hover:bg-gray-100"
                    onClick={() => setConsultationOpen(true)}
                  >
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-900 mb-1">48h</div>
                  <div className="text-sm text-gray-600">Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-900 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4">tekvo</div>
              <p className="text-gray-400 mb-6">
                Building tomorrow's technology solutions today. Transforming ideas into digital reality.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>Cloud Solutions</div>
                <div>AI & ML</div>
                <div>Blockchain</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Our Journey</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>hello@tekvo.com</div>
                <div>+1 (555) 123-4567</div>
                <div>San Francisco, CA</div>
                <div>New York, NY</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Tekvo. All rights reserved.</div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
