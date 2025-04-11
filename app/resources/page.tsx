import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, LinkIcon, Download } from "lucide-react"

export default function ResourcesPage() {
  // Sample FAQs
  const faqs = [
    {
      question: "How do I submit a maintenance request?",
      answer:
        "You can submit a maintenance request through the Residents Portal. Log in to your account, navigate to the Maintenance section, and fill out the request form with details of the issue.",
    },
    {
      question: "When are strata levies due?",
      answer:
        "Strata levies are due quarterly on the first day of January, April, July, and October. You can pay your levies through the Residents Portal or by direct bank transfer.",
    },
    {
      question: "How do I book the common facilities?",
      answer:
        "Common facilities such as the BBQ area and community room can be booked through the Residents Portal. Navigate to the Facilities section, select the facility you wish to book, and choose your preferred date and time.",
    },
    {
      question: "What should I do if I lose my access card?",
      answer:
        "If you lose your access card, please contact the Building Manager immediately so they can deactivate the lost card and issue a replacement. There may be a fee for replacement cards.",
    },
    {
      question: "How can I get approval for renovations?",
      answer:
        "For renovations that affect common property, you need to submit a renovation request through the Residents Portal. Include detailed plans, contractor information, and proposed timeline. The Strata Committee will review your request and provide a decision.",
    },
  ]

  // Sample documents
  const documents = [
    {
      category: "Bylaws & Regulations",
      items: [
        { title: "Building Bylaws", type: "PDF", size: "1.2 MB" },
        { title: "Noise Regulations", type: "PDF", size: "450 KB" },
        { title: "Pet Policy", type: "PDF", size: "320 KB" },
        { title: "Moving Procedures", type: "PDF", size: "280 KB" },
      ],
    },
    {
      category: "Financial Documents",
      items: [
        { title: "Annual Budget 2024-2025", type: "PDF", size: "1.8 MB" },
        { title: "Quarterly Financial Report Q1 2025", type: "PDF", size: "2.1 MB" },
        { title: "Levy Schedule 2025", type: "PDF", size: "380 KB" },
        { title: "Insurance Certificate", type: "PDF", size: "1.5 MB" },
      ],
    },
    {
      category: "Meeting Minutes",
      items: [
        { title: "AGM Minutes - March 2025", type: "PDF", size: "1.4 MB" },
        { title: "Committee Meeting - February 2025", type: "PDF", size: "950 KB" },
        { title: "Committee Meeting - January 2025", type: "PDF", size: "870 KB" },
        { title: "Extraordinary General Meeting - December 2024", type: "PDF", size: "1.1 MB" },
      ],
    },
  ]

  // Sample external resources
  const externalResources = [
    {
      title: "NSW Fair Trading - Strata Living",
      description: "Official guide to living in a strata scheme in NSW",
      url: "https://www.fairtrading.nsw.gov.au/housing-and-property/strata-and-community-living",
    },
    {
      title: "Strata Community Association NSW",
      description: "Professional association for strata managers and suppliers",
      url: "https://nsw.strata.community/",
    },
    {
      title: "NSW Legislation - Strata Schemes Management Act 2015",
      description: "Full text of the Strata Schemes Management Act 2015",
      url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050",
    },
    {
      title: "NSW Civil and Administrative Tribunal (NCAT)",
      description: "Dispute resolution for strata schemes",
      url: "https://www.ncat.nsw.gov.au/",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>

      <Tabs defaultValue="documents" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">Documents Library</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="external">External Resources</TabsTrigger>
        </TabsList>

        {/* Documents Library Tab */}
        <TabsContent value="documents" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((doc) => (
                      <li key={doc.title} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download {doc.title}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faqs" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about living in our building</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* External Resources Tab */}
        <TabsContent value="external" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <LinkIcon className="mr-2 h-5 w-5" />
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button asChild variant="outline">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
