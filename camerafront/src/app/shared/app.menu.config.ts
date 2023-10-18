import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [
  { 
    id: "home",
    name: "HOME",
    icon: "home",
    route: "/main/home",
   },
  {
    id: "products",
    name: "PRODUCTS",
    icon: "video_camera_front",
    route: "/main/products",
  },
  {
    id: 'profile',
    name: 'PROFILE',
    icon: 'people',
    route: '/main/profile', 
  },
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
];
