import SidebarLg from "@/components/dashboard-sidebars/SidebarLg";
import SidebarMdAndSm from "@/components/dashboard-sidebars/SidebarMdAndSm";
export const metadata = {
  title: "Dashboard",
  description: "Travel Vista, User Dashboard",
};
export default function DashboardLayout({ children }) {
  
  return (
    <main className=" flex min-h-screen relative">
      {/* sidebar */}
      <section className="hidden lg:block md:w-[20%] flex-shrink-0 h-full">
        <SidebarLg></SidebarLg>
      </section>
      <section className=" absolute block lg:hidden">
        <SidebarMdAndSm></SidebarMdAndSm>
      </section>
      {/* main  */}
      <section className=" w-[95%] mx-auto md:w-[80%] my-8 md:my-0 flex-grow">
        {children}
      </section>
    </main>
  );
}
