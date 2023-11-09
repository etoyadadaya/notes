import { Navbar } from "@/components/core/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
}
