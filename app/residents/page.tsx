import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileText, PenToolIcon as Tool, Calendar } from "lucide-react"
import Link from "next/link"

export default function ResidentsPortalPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Residents Portal</h1>

      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Access Required</AlertTitle>
        <AlertDescription>
          Please log in or register to access the full features of the Residents Portal.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Access your resident account</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/residents/login">Login to Portal</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new resident account</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/residents/register">Register Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Portal Features</h2>

      <Tabs defaultValue="maintenance" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="financial">Financial Reports</TabsTrigger>
        </TabsList>

        {/* Maintenance Tab */}
        <TabsContent value="maintenance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tool className="mr-2 h-5 w-5" />
                Maintenance Requests
              </CardTitle>
              <CardDescription>
                Submit and track maintenance requests for your apartment or common areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>The maintenance request system allows you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Submit new maintenance requests with detailed descriptions and photos</li>
                  <li>Track the status of your existing requests</li>
                  <li>Communicate with maintenance staff</li>
                  <li>Rate and provide feedback on completed work</li>
                </ul>
                <div className="pt-4">
                  <Button asChild disabled>
                    <Link href="/residents/maintenance">Access Maintenance System</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">(Login required to access this feature)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Meetings Tab */}
        <TabsContent value="meetings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Meetings & Minutes
              </CardTitle>
              <CardDescription>Access information about upcoming meetings and past meeting minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>The meetings section allows you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View the schedule of upcoming strata committee and general meetings</li>
                  <li>RSVP to meetings and add them to your calendar</li>
                  <li>Access agendas for upcoming meetings</li>
                  <li>View and download minutes from past meetings</li>
                  <li>Submit topics for discussion at future meetings</li>
                </ul>
                <div className="pt-4">
                  <Button asChild disabled>
                    <Link href="/residents/meetings">Access Meetings</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">(Login required to access this feature)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Reports Tab */}
        <TabsContent value="financial" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Financial Reports
              </CardTitle>
              <CardDescription>Access financial statements, budgets, and levy information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>The financial reports section allows you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View and download quarterly and annual financial statements</li>
                  <li>Access the current and past budgets</li>
                  <li>Check your levy payment history and upcoming payments</li>
                  <li>Download tax statements for your records</li>
                  <li>View expenditure reports for major projects</li>
                </ul>
                <div className="pt-4">
                  <Button asChild disabled>
                    <Link href="/residents/financial">Access Financial Reports</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">(Login required to access this feature)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
