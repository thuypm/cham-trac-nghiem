import SidebarMenu from "components/Menu";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex gap-4 p-2">
      <SidebarMenu />
      <div className="surface-50 flex-grow-1">{children}</div>
    </div>
  );
};
export default PublicLayout;
