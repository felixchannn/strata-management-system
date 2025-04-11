import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell, FileText, PenToolIcon as Tool, CreditCard, User } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Sample maintenance requests
  const maintenanceRequests = [
    {
      id: "REQ-2025-042",
      title: "Leaking Faucet in Kitchen",
      status: "In Progress",
      date: "April 5, 2025",
      priority: "Medium",
    },
    {
      id: "REQ-2025-039",
      title: "Light Fixture Replacement in Bathroom",
      status: "Scheduled",
      date: "April 2, 2025",
      priority: "Low",
    },
    {
      id: "REQ-2025-031",
      title: "Air Conditioning Not Working",
      status: "Completed",
      date: "March 25, 2025",
      priority: "High",
    },
  ]

  // Sample upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Community Room",
    },
    {
      id: 2,
      title: "Budget Planning Committee",
      date: "April 28, 2025",
      time: "6:30 PM - 8:00 PM",
      location: "Meeting Room 2",
    },
  ]

  // Sample financial information
  const financialInfo = {
    nextLevyDue: "April 1, 2025",
    levyAmount: "$850.00",
    adminFundBalance: "$45,280.75",
    capitalWorksBalance: "$128,450.20",
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold">Resident Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/residents/profile">
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Link>
        </Button>
      </div>

      <Alert className="mb-8">
        <Bell className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          The next quarterly levy payment is due on April 1, 2025. Please ensure your payment is made on time.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Next Levy Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{financialInfo.levyAmount}</div>
            <p className="text-sm text-muted-foreground">Due on {financialInfo.nextLevyDue}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/residents/financial">
                <CreditCard className="mr-2 h-4 w-4" />
                Make Payment
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Admin Fund Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{financialInfo.adminFundBalance}</div>
            <p className="text-sm text-muted-foreground">Updated April 1, 2025</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/residents/financial">
                <FileText className="mr-2 h-4 w-4" />
                View Statement
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Capital Works Fund</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{financialInfo.capitalWorksBalance}</div>
            <p className="text-sm text-muted-foreground">Updated April 1, 2025</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/residents/financial">
                <FileText className="mr-2 h-4 w-4" />
                View Statement
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="maintenance" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="maintenance">Maintenance Requests</TabsTrigger>
          <TabsTrigger value="meetings">Upcoming Meetings</TabsTrigger>
        </TabsList>

        {/* Maintenance Requests Tab */}
        <TabsContent value="maintenance" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Maintenance Requests</CardTitle>
                <Button asChild>
                  <Link href="/residents/maintenance/new">
                    <Tool className="mr-2 h-4 w-4" />
                    New Request
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{request.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {request.id} • {request.date} • Priority: {request.priority}
                      </div>
                    </div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          request.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : request.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/residents/maintenance">View All Requests</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Upcoming Meetings Tab */}
        <TabsContent value="meetings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{meeting.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {meeting.date} • {meeting.time}
                      </div>
                      <div className="text-sm text-muted-foreground">Location: {meeting.location}</div>
                    </div>
                    <Button size="sm">RSVP</Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/residents/meetings">View All Meetings</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
