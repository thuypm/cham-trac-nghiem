// Position
// import ConfirmOtp from 'pages/Auth/ConfirmOtp'
// import ForgotPassword from 'pages/Auth/ForgotPassword'
// import LoginPage from 'pages/Auth/Login'
// import Forbidden from 'pages/Error/403'
// import NotFound from 'pages/Error/404'

import Exam from "pages/Exam";
import Home from "pages/Home/Home";

export const publicRoutes = [
  {
    key: "not-found",
    path: "/",
    element: <Home />,
    label: "Không tìm thấy trang",
    icon: <></>,
  },
  {
    key: "not-found",
    path: "/exam",
    element: <Home />,
    children: [
      {
        key: "detail-exam",
        path: ":id",
        element: <Exam />,
        label: "Chi tiết bài kiểm tra",
        hiddenFromMenu: true,
        icon: "",
      },
    ],
  },
  // {
  //   key: 'forbidden',
  //   path: '/403',
  //   element: <Forbidden />,
  //   label: 'Không tìm thấy trang',
  //   icon: <></>,
  // },
  // {
  //   key: 'login',
  //   path: '/login',
  //   element: <LoginPage />,
  //   label: 'Đăng nhập',
  //   icon: <></>,
  // },
  // {
  //   key: 'forgot-password',
  //   path: '/forgot-password',
  //   element: <ForgotPassword />,
  //   label: 'Đăng nhập',
  //   icon: <></>,
  // },
  // {
  //   key: 'otp',
  //   path: '/otp',
  //   element: <ConfirmOtp />,
  //   label: 'Input otp',
  //   icon: <></>,
  // },
];
