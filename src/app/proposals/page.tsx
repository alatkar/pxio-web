import RfpCardNew from "@/components/rfp-card/rfp-card";
import WelcomeBanner from "@/components/ui/welcomebanner";

export default function Page() {
    return (
      <>
      {/* <div>
        <RfpUpload/>
      </div> */}
      <WelcomeBanner/>      
      <div className="flex flex-row pr-20">
        <RfpCardNew tags={["construction", "geotechnical"]} 
          src="/prop1.jpeg" heading="Seattle Convention Center" 
          content="Seattle Convention Center has added more space to collaborate, innovate and celebrate in the heart of downtown. Let's chat about hosting your event at Arch, our original building, or Summit." />
        <RfpCardNew tags={["design", "communication"]} src="/Alaskan.png" heading="Alaskan Way Viaduct Replacement Program" 
        content="The Port of Seattle relies heavily on State Route 99 and the Alaskan Way Viaduct for freight mobility, Port facility access, and regional mobility. While our container trucks don’t travel on the viaduct, it nonetheless carries more than 100,000 vehicles every day that otherwise would be on Duwamish area surface streets and conflicting with freight and rail lines." />      
        <RfpCardNew tags={["watershed", "weirs"]} heading="Rindge Dam" content="A 100-ft high concrete dam and spillway structure built in Malibu Creek on the Rindge family property in 1926, Rindge Dam was constructed as a water supply for local ranching, agriculture, and landscape irrigation. Removal is a high priority for Southern California steelhead trout recovery because it will allow access to 18 miles of high-quality spawning and rearing habitat in the Malibu Creek watershed." src="/prop3.jpeg"/>      
      </div>
      </>
    );
}