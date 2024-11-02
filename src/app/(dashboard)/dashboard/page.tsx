import { DashboardCard } from '@/components/DashboardCard'
import React from 'react'

const Page = () => {
  return (
    <main className='container mx-auto max-w-7xl flex-col flex gap-10'>
      <h1 className='text-3xl'>Dashboard</h1>
      <section className=' border-b pb-20 grid grid-cols-3 justify-items-center'>
      <DashboardCard />
      <DashboardCard/>
      <DashboardCard/>
      </section>
      <section className='flex gap-10 flex-col'>
        <h2 className='text-2xl'>Your Spaces</h2>
        <section className='grid grid-cols-3 justify-items-center'>
  <DashboardCard image={"/techThreads.png"}/>
  <DashboardCard image={"/techThreads.png"}/>
  <DashboardCard image={"/public/techThreads.png"}/>
</section>

      </section>
    </main>
  )
}

export default Page