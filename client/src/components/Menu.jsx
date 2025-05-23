// SidebarMenu.jsx
import { PanelMenu } from "primereact/panelmenu";

const SidebarMenu = () => {
  const items = [
    {
      label: "Trang chủ",
      icon: "pi pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: "Quản lý",
      icon: "pi pi-cog",
      items: [
        {
          label: "Người dùng",
          icon: "pi pi-users",
          command: () => {
            window.location.href = "/users";
          },
        },
        {
          label: "Bài thi",
          icon: "pi pi-book",
          command: () => {
            window.location.href = "/exams";
          },
        },
      ],
    },
    {
      label: "Thoát",
      icon: "pi pi-sign-out",
      command: () => {
        alert("Đăng xuất");
      },
    },
  ];

  return (
    <PanelMenu model={items} style={{ width: "250px", flex: "0 0 auto" }} />
  );
};

export default SidebarMenu;
