import { Card, CardHeader, CardContent } from "./ui/card";
import Image from 'next/image';

export function ChapterLeadership() {
  return (
    <section id="leadership" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-700">Chapter Leadership</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the dedicated volunteers who lead our joint chapter.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <Card className="text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Chair"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold text-green-700">Dr. Jane Smith</h3>
              <p className="text-sm text-gray-700">Chapter Chair</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Vice Chair"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold text-green-700">Prof. John Doe</h3>
              <p className="text-sm text-gray-700">Vice Chair</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Secretary"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold text-green-700">Dr. Robert Johnson</h3>
              <p className="text-sm text-gray-700">Secretary</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Treasurer"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold text-green-700">Eng. Sarah Williams</h3>
              <p className="text-sm text-gray-700">Treasurer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}