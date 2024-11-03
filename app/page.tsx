'use client'
import { Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { User, Code, BarChart, Headphones, Palette, LayoutDashboard, Lightbulb, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Building2,
  CircleDot,
  Factory,
  Globe2,
  HandshakeIcon,
  LineChart,
  Network,
  PackageSearch,
  Rocket,
  ShieldCheck,
  Store,
  TrendingUp,
  Warehouse,
  Users,
  Briefcase,
  PieChart,
  Target,
  ShoppingBag
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  const phoneNumber = "+919637124286";
  const message = "Hello! I'd like to chat.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          className="flex-1"
          placeholder="Enter your business email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
      {isSubmitted && (
        <p className="text-green-600 text-sm">Thank you for your interest! We&apos;ll be in touch soon.</p>
      )}
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="outline">
          <Phone className="mr-2 h-4 w-4" />
          Call Us
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        By signing up, you agree to our Terms & Conditions
      </p>
    </div>
  );
}

export { EmailCaptureForm };

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const currentHeroRef = heroRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }
  
    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link className="flex items-center space-x-2" href="#">
              <Store className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SathiBazzar
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#features">
                Features
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#business-model">
              Our Unique Offerings
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#team">
                Team
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#impact">
                Impact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </nav>
            <Button variant="ghost" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
        >
          <div className="absolute inset-0 bg-grid-blue-600/[0.03] -z-10" />
          <div
            className="absolute inset-0 flex items-center justify-center -z-10"
            style={{
              background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            }}
          />
          <div className="container px-4 py-24 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 ${isVisible ? 'animate-fade-right' : 'opacity-0'}`}>
                <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 text-blue-600">
                  <CircleDot className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Transforming B2B Commerce</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Connecting MSMEs
                  </span>
                  <br />
                  <span className="text-gray-900">
                    Building Future
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
  India&apos;s first integrated B2B marketplace designed exclusively for MSMEs. Source materials, connect with verified partners, and scale your business.
</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-gray-600">GDP Contribution</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div>
                    <div className="text-3xl font-bold text-blue-600">110M+</div>
                    <div className="text-sm text-gray-600">People Employed</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div>
                    <div className="text-3xl font-bold text-blue-600">63M</div>
                    <div className="text-sm text-gray-600">MSMEs in India</div>
                  </div>
                </div>
              </div>
              <div className={`relative ${isVisible ? 'animate-fade-left' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-3 opacity-10" />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <Factory className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold">Manufacturers</div>
                        <div className="text-sm text-gray-600">Direct Access</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <Warehouse className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold">Suppliers</div>
                        <div className="text-sm text-gray-600">Verified Partners</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <PackageSearch className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold">Raw Materials</div>
                        <div className="text-sm text-gray-600">Quality Assured</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <Network className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold">Network</div>
                        <div className="text-sm text-gray-600">Pan India</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">MSME Impact</h3>
                        <p className="text-sm text-blue-100">Key Statistics</p>
                      </div>
                      <LineChart className="h-6 w-6" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>GDP Contribution</span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="w-full bg-blue-700/50 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-3/4" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Employment</span>
                        <span className="font-semibold">110M+ Jobs</span>
                      </div>
                      <div className="w-full bg-blue-700/50 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-4/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        <section id="features" className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 text-blue-600 mb-4">
                <Rocket className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Why Choose SathiBazzar</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Empowering Your Business Growth</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Experience a new era of B2B commerce with features designed specifically for Indian MSMEs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: HandshakeIcon,
                  title: "Direct Connections",
                  description: "Connect directly with manufacturers and suppliers, eliminating middlemen and reducing costs"
                },
                {
                  icon: ShieldCheck,
                  title: "Verified Partners",
                  description: "All partners undergo strict verification process ensuring secure and reliable transactions"
                },
                {
                  icon: Globe2,
                  title: "Pan India Network",
                  description: "Access suppliers and buyers from across India, expanding your business reach"
                },
                {
                  icon: Building2,
                  title: "Industry Specific",
                  description: "Tailored solutions for furniture, textile, and other manufacturing sectors"
                },
                {
                  icon: TrendingUp,
                  title: "Growth Analytics",
                  description: "Track your business growth with detailed analytics and market insights"
                },
                {
                  icon: Store,
                  title: "Digital Storefront",
                  description: "Showcase your products and services with a professional online presence"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative">
                    <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center text-center mb-16">
      <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 text-blue-600 mb-4">
        <Briefcase className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Our Unique Offerings</span>
      </div>
      <h2 className="text-4xl font-bold mb-4">Empowering MSMEs with Cutting-Edge Solutions</h2>
      <p className="text-xl text-gray-600 max-w-2xl">
        Our platform provides a range of innovative tools and services designed to enhance your business operations.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <ShoppingBag className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">Affordable Raw Materials</h3>
          <p className="text-gray-500 mt-2">Access quality materials at competitive prices, reducing operational costs</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <HandshakeIcon className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">Transparent Connections</h3>
          <p className="text-gray-500 mt-2">Connect directly with verified suppliers, eliminating intermediaries</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <Lightbulb className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">User-Friendly Interface</h3>
          <p className="text-gray-500 mt-2">Intuitive design mirroring established e-commerce platforms for ease of use</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <LayoutDashboard className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">Dedicated Dashboard</h3>
          <p className="text-gray-500 mt-2">Personalized management of orders, listings, and insights for buyers and sellers</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <ShieldCheck className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">Secure Transactions</h3>
          <p className="text-gray-500 mt-2">OTP verification and secure payment processing for peace of mind</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <Globe2 className="h-12 w-12 text-[#4169E1] mb-4" />
          <h3 className="text-xl font-bold">Local Support</h3>
          <p className="text-gray-500 mt-2">Region-specific assistance in local languages for personalized help</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


        <section id="team" className="py-24 bg-white">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center text-center mb-16">
      <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 text-blue-600 mb-4">
        <Users className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Meet Our Team</span>
      </div>
      <h2 className="text-4xl font-bold mb-4">The Minds Behind SathiBazzar</h2>
      <p className="text-xl text-gray-600 max-w-2xl">
        Our diverse team of experts is committed to revolutionizing the MSME sector in India
      </p>
    </div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { name: "Vishal Maurya", role: "Chief Executive Officer", icon: User },
        { name: "Mehtab Khan", role: "Chief Technical Officer", icon: Code },
        { name: "Rahul Patel", role: "Chief Financial Officer", icon: BarChart },
        { name: "Arunima Upadhyay", role: "Head of Operations", icon: Briefcase },
        { name: "Aaditya Kandekar", role: "Lead Product Designer", icon: Palette },
        { name: "Rehan Khan", role: "Lead Tech Developer", icon: Code },
      ].map((member, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <member.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

        <section id="impact" className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Impact on Indian MSMEs</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                SathiBazzar is transforming the landscape for Micro, Small, and Medium Enterprises across India
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1+</div>
                <p className="text-blue-100">MSMEs Onboarded</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">₹10-15lac+</div>
                <p className="text-blue-100">Transaction Volume</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">2-5%</div>
                <p className="text-blue-100">Avg. Cost Reduction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1+</div>
                <p className="text-blue-100">States Reached</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Read Our Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join thousands of MSMEs already growing their business with SathiBazzar
        </p>
      </div>
      <EmailCaptureForm />
    </div>
  </div>
</section>
      </main>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Store className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">SathiBazzar</span>
              </div>
              <p className="text-sm">
                Empowering MSMEs with technology-driven solutions for sustainable growth
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>© 2024 SathiBazzar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}