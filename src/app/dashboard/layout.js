import SidebarMdAndLg from "@/components/dashboard-sidebars/SidebarMdAndLg";
import SidebarSm from "@/components/dashboard-sidebars/SidebarSm";

export default function DashboardLayout({children}){
  return(
    <main className=" flex min-h-screen relative">
      {/* sidebar */}
      <section className="hidden md:block md:w-[20%] flex-shrink-0 h-full">
          <SidebarMdAndLg></SidebarMdAndLg>
      </section>
      <section className=" absolute block md:hidden">
        <SidebarSm></SidebarSm>
      </section>
      {/* main  */}
      <section className=" w-[95%] mx-auto md:w-[80%] my-8 md:my-0 flex-grow">
        {children}
      </section>
    </main>
  )
}