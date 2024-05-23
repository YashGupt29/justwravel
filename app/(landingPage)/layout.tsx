import { NavigationMenuBar } from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationMenuBar />
      {children}
    </div>
  );
};
export default LandingPageLayout;
