import SidebarMenu from "components/Menu";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex gap-4 p-2 h-screen">
      <SidebarMenu />
      <div className="flex-grow-1 overflow-auto">{children}</div>
    </div>
  );
};
export default PublicLayout;
