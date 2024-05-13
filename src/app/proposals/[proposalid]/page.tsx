import ProposalDetails from "@/components/proposals/proposal-details";

export default async function Page({ params }: { params: { proposalid: string } }) {
  return (
    <>      
      <ProposalDetails title={params.proposalid} content="Something"/>
    </>
  );
}