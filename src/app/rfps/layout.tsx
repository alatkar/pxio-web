import SideNavRfps from "@/components/sidenav-rfps/sidenav-rfps";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> */}
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNavRfps />
        </div>
        <div className="flex flex-col flex-grow md:overflow-y-auto md:p-5">{children}</div>
      </div>
    </div>
  );
}