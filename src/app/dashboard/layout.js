import SidebarMdAndLg from "@/components/dashboard-sidebars/SidebarMdAndLg";

export default function DashboardLayout({children}){
  return(
    <main className=" flex gap-5">
      {/* sidebar */}
      <section className=" md:w-[30%]">
          <SidebarMdAndLg></SidebarMdAndLg>
      </section>
      {/* main  */}
      <section className="md:w-[70%]">
        {children}
      </section>
    </main>
  )
}