import { NavigationMenuBar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationMenuBar />
      {/* <Sidebar /> */}
      {children}
    </>
  );
};
export default LandingPageLayout;
