import { NavBar } from "@/components/dashboard/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen bg-[rgba(43,43,43,1)]">
      <div className="flex justify-center items-center">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default ProtectedLayout;