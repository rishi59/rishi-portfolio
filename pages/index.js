
import Head from 'next/head'
import Image from 'next/image'
import ExperienceCard from '../src/components/ExperienceCard'

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-8 py-10 font-mono">
      <Head>
        <title>Rishi Gupta | Data Governance Portfolio</title>
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
        <div>
          <h1 className="text-5xl font-bold text-cyan-400">Rishi Gupta</h1>
          <p className="mt-4 text-gray-300 text-lg">Data Governance Specialist | Risk & Compliance | Metadata Ninja</p>
          <p className="mt-2 text-sm text-gray-500">Dublin, Ireland | Stamp 4 Visa</p>
          <div className="mt-6 space-x-4">
            <a href="mailto:Rishigupta.tech@outlook.com" className="underline text-cyan-300">Email</a>
            <a href="https://www.linkedin.com/in/rishi-c-gupta/" target="_blank" className="underline text-cyan-300">LinkedIn</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/profile.jpg" width={256} height={256} alt="Rishi Gupta" className="rounded-full shadow-xl border-4 border-cyan-400" />
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-cyan-300 border-b pb-2 border-gray-700">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4 text-gray-300">
          <div>SQL, Oracle SQL Developer</div>
          <div>Python, PySpark</div>
          <div>Power BI, Tableau, Alteryx</div>
          <div>Azure, Microsoft Purview</div>
          <div>IBM Infosphere, Big Query</div>
          <div>Control Testing, SOX, RCSA</div>
          <div>Risk Mitigation, eGRC, DRP</div>
          <div>Metadata, BCBS 239, Data Lineage</div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-cyan-300 border-b pb-2 border-gray-700">Professional Experience</h2>
        <div className="mt-6 space-y-8">
          <ExperienceCard />
        </div>
      </section>
    </div>
  )
}
