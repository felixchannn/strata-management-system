import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, Calendar, FileText, Bell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 15, 2025",
      description:
        "The Annual General Meeting will be held in the community room at 7:00 PM. All owners are encouraged to attend.",
    },
    {
      id: 2,
      title: "Building Maintenance",
      date: "April 20, 2025",
      description:
        "Scheduled maintenance of the elevator will take place from 9:00 AM to 12:00 PM. Please use the stairs during this time.",
    },
    {
      id: 3,
      title: "New Security System",
      date: "April 5, 2025",
      description:
        "A new security system has been installed. Please collect your new access cards from the building manager.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sydney-Modern-Project-complete.jpg-LqgAii7BxrsThErm0dDEyc0Fejv0E8.jpeg"
          alt="Modern apartment building"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to Our Building Community
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            A modern approach to strata management for our residents and owners
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/residents">Residents Portal</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Announcements</h2>
            <p className="text-muted-foreground">Stay updated with the latest news and events</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/resources">
              <Bell className="mr-2 h-4 w-4" />
              View All
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>{announcement.title}</CardTitle>
                  <Megaphone className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>{announcement.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{announcement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Maintenance Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit and track maintenance requests for your apartment or common areas.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/residents/maintenance">Submit Request</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View and register for upcoming community events and meetings.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community">View Calendar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Documents & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access important documents, bylaws, and financial reports.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources">View Documents</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
