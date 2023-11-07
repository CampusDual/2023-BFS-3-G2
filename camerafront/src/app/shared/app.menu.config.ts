import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [

  {
    id: "products",
    name: "PRODUCTS",
    icon: "video_camera_front",
    route: "/main/products",
  },
  {
    id: 'myprofile', name: 'MYPROFILE', icon: 'remove_red_eye', opened: false,
    items: [
      {
        id: 'mydata',
        name: 'MYDATA',
        icon: 'person',
        route: '/main/profile/mydata',
      },
      {
        id: 'myproducts',
        name: 'MYPRODUCTS',
        icon: 'shop',
        route: '/main/profile/myProducts',
      }
    ]
  },
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
  // {
  //   id: "locale", name: "LOCALE", opened : false,
  //   items:
  //     [{ id: 'lang_it', name: 'LOCALE_it', icon: 'language', locale: 'it' }]
  // },
];
