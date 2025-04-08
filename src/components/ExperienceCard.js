
export default function ExperienceCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <h3 className="text-xl text-cyan-200 font-semibold">Data Governance Analyst</h3>
      <p className="text-gray-400 text-sm">U.S. Bank Europe • Oct 2021 - Present</p>
      <ul className="list-disc list-inside mt-4 text-gray-300 text-sm">
        <li>Key Report Inventory and Authorized Data Source Management</li>
        <li>CDE Lineage Mapping (COREP, FINREP, Pillar 3)</li>
        <li>Business Continuity Plans, Risk & Control Assessment</li>
        <li>CDE Metadata Attestation and Quality Checks</li>
      </ul>
    </div>
  );
}
