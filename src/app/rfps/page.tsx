"use client"
import RfpCardNew from "@/components/rfp-card/rfp-card";
import { RfpCard } from "@/components/rfp-card/rfp-cards";
import RfpUpload from "@/components/rfp-upload/rfp-upload";
import SideNavRfps from "@/components/sidenav-rfps/sidenav-rfps";
import WelcomeBanner from "@/components/ui/welcomebanner";
import Image from 'next/image';

export default function Page() {
  return (
    <>
    {/* <div>
      <RfpUpload/>
    </div> */}
    <WelcomeBanner/>
    {/* <div className="grid h-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <RfpCard title="City of Detroit" value='100' type="collected" />
      <RfpCard title="Kirkland Watershed" value='100' type="pending" />
      <RfpCard title="Chicago City" value='100' type="invoices" />
      <RfpCard title="City of Detroit" value='100' type="collected" />
      <RfpCard title="Kirkland Watershed" value='100' type="pending" />
      <RfpCard title="Chicago City" value='100' type="invoices" />
    </div> */}
    <div className="flex flex-row pr-20">
      <RfpCardNew tags={["stormwater", "wetlands"]} src="/ced.jpg" heading="Kirkland Stormwater Management" content="The Cedar Creek rainwater management project will address water quality, creek health, and flooding concerns in the Cedar Creek basin." />
      <RfpCardNew tags={["geotechnical", "remediation"]} src="/det.jpg" heading="Detroit River Area of Concern" content="Department of Environment, Great Lakes requests preparation of a professional services for the Detroit River Remedial Investigation for the Contaminated Sediments, Wayne County, Michigan" />      
      <RfpCardNew tags={["brownfield", "contamination"]} heading="Brookfield Remediation" content="The town of Brookfield is soliciting bids for Brownfiled remediation" src="/brook.png"/>      
    </div>
      <div><RfpUpload /></div>
    </>
  );
}