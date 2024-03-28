import RfpDetails from "@/components/rfp-details/rfp-details";

export default function Page({ params }: { params: { rfpid: string } }) {
  return (
    <>      
      <RfpDetails title={params.rfpid} content="Something"/>
    </>
  );
}