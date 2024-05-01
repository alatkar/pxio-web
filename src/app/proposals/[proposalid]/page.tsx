import ProposalDetails from "@/components/proposals/proposal-details";

export default function Page({ params }: { params: { proposalid: string } }) {
  return (
    <>      
      <ProposalDetails title={params.proposalid} content="Something"/>
    </>
  );
}