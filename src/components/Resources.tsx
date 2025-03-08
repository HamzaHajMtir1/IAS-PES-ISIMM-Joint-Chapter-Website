import { Button } from "@headlessui/react";
import { BookOpen, Users, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

export function Resources() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">Resources</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access valuable resources from our joint chapter and parent societies.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <BookOpen className="h-5 w-5" />
                Technical Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Access journals, magazines, and conference proceedings from IEEE IAS and PES.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                Explore Publications
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Users className="h-5 w-5" />
                Membership Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Learn about the benefits of joining IEEE and our societies.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
                View Benefits
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Calendar className="h-5 w-5" />
                Past Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Access recordings and materials from our previous events and workshops.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                View Archive
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}