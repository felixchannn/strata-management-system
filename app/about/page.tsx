import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const committeeMembers = [
    {
      name: "Felix Chan",
      role: "Chairperson",
      bio: "Felix has been a resident for over 5 years and brings extensive experience in property management.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Megan Li",
      role: "Secretary",
      bio: "Megan has a background in administration and ensures all records and communications are maintained efficiently.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Andrew Wang",
      role: "Treasurer",
      bio: "Andrew has a finance background and oversees the building's financial management and reporting.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Committee Member",
      bio: "Sarah focuses on community engagement and organizing building events.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Chen",
      role: "Committee Member",
      bio: "David oversees maintenance issues and building improvements.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="text-lg">
            Our mission is to maintain and enhance our building community through transparent management, effective
            communication, and responsible financial stewardship. We strive to create a harmonious living environment
            where all residents feel valued, heard, and proud to call this building home.
          </p>
        </div>
      </section>

      {/* Strata Committee */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Strata Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Strata Schemes Management Act */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Strata Schemes Management Act (2015)</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              In New South Wales, strata-titled apartment buildings are governed by the Strata Schemes Management Act
              (2015). This legislation sets out the framework for how strata schemes are managed and operated.
            </p>
            <p className="mb-4">Key aspects of the Act include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The establishment and functions of the Owners Corporation</li>
              <li>The election and responsibilities of the Strata Committee</li>
              <li>Financial management requirements, including the administration fund and capital works fund</li>
              <li>By-laws and their enforcement</li>
              <li>Dispute resolution procedures</li>
              <li>Building defect management</li>
            </ul>
            <p>
              Our building management adheres strictly to this legislation to ensure proper governance and compliance
              with all legal requirements.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
