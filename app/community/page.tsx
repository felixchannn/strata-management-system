import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function CommunityPage() {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community BBQ",
      date: "May 20, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Rooftop Garden",
      description: "Join us for our monthly community BBQ. Food and drinks will be provided. Please RSVP by May 18.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The-Exchange-Darling-Harbour.jpg-uSEohv5rQaotBJ3EK0Yr8SQtDPBUHB.jpeg",
    },
    {
      id: 2,
      title: "Gardening Workshop",
      date: "May 25, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Garden",
      description: "Learn about urban gardening and help plant new flowers and herbs in our community garden.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sydney-Modern_Web-Portrait_2.jpg-9dnORVh3tuRVyGI1YoqeQvB2mAW4DL.jpeg",
    },
    {
      id: 3,
      title: "Movie Night",
      date: "June 5, 2025",
      time: "7:30 PM - 10:00 PM",
      location: "Community Room",
      description: "Join us for a screening of a popular movie. Popcorn and refreshments will be provided.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/punchbowl-mosque-Copy.jpg-p0aMd02TlvMHHzlMf1UZP2LvyR1fv5.jpeg",
    },
  ]

  // Sample discussion topics
  const discussionTopics = [
    {
      id: 1,
      title: "Building Security Improvements",
      author: "Felix Chan",
      date: "April 8, 2025",
      replies: 12,
      excerpt:
        "I'd like to discuss potential improvements to our building security system. What are your thoughts on adding additional cameras in the parking area?",
    },
    {
      id: 2,
      title: "Community Garden Expansion",
      author: "Sarah Johnson",
      date: "April 5, 2025",
      replies: 8,
      excerpt:
        "With the success of our current community garden, I'm proposing we expand it to include more vegetable plots. Who would be interested in participating?",
    },
    {
      id: 3,
      title: "Noise Concerns on Weekends",
      author: "David Chen",
      date: "April 2, 2025",
      replies: 15,
      excerpt:
        "There have been several complaints about noise levels on weekend nights. Let's discuss potential solutions to ensure everyone can enjoy their homes.",
    },
    {
      id: 4,
      title: "Recycling Program Updates",
      author: "Megan Li",
      date: "March 28, 2025",
      replies: 6,
      excerpt:
        "The council has updated their recycling guidelines. I've summarized the changes and how they affect our building's waste management.",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Community</h1>

      <Tabs defaultValue="events" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="events">Events Calendar</TabsTrigger>
          <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
        </TabsList>

        {/* Events Calendar Tab */}
        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">RSVP</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Events</Button>
          </div>
        </TabsContent>

        {/* Discussion Forum Tab */}
        <TabsContent value="forum" className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            <Button>New Topic</Button>
          </div>

          <div className="space-y-4">
            {discussionTopics.map((topic) => (
              <Card key={topic.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{topic.replies} replies</span>
                    </div>
                  </div>
                  <CardDescription>
                    Posted by {topic.author} on {topic.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{topic.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Discussion</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Topics</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
