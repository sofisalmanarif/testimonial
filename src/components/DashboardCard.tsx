import * as React from "react"

// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface CardPropType{
    image?:string
}

export function DashboardCard(props:CardPropType) {
  return (
    <Card className="w-[380px] backdrop-blur-3xl bg-zinc-900">
      <CardHeader>
        {props.image&& <Image alt="Soryy" height={100} width={340} className="mb-4" src={'/techThreads.png'}/>}
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        {/* <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  )
}
