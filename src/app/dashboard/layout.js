import SidebarMdAndLg from "@/components/dashboard-sidebars/SidebarMdAndLg";
import SidebarSm from "@/components/dashboard-sidebars/SidebarSm";

export default function DashboardLayout({children}){
  return(
    <main className=" flex gap-5 relative">
      {/* sidebar */}
      <section className=" hidden md:block md:w-[30%]">
          <SidebarMdAndLg></SidebarMdAndLg>
      </section>
      <section className=" absolute block md:hidden">
        <SidebarSm></SidebarSm>
      </section>
      {/* main  */}
      <section className=" w-[95%] mx-auto md:w-[70%]">
        {children}
      </section>
    </main>
  )
}