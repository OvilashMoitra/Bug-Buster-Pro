import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const ContentManagerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/blog`}>Manage Blogs</Link>,
      icon: <TableOutlined />,
      key: `/${role}/blog`,
    },
    {
      label: <Link href={`/${role}/faq`}>Manage Faq</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-faq`,
    },
  ];

  const HRSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Employee",
      key: "manage-employee",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-employee`}>Employee</Link>,
          key: `/${role}/manage-employee`,
        }
      ],
    }
  ];
  const ProductManagerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Service",
      key: "manage-service",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/product_manager/manage_product`}>Manage Service</Link>,
          key: `/product_manager/manage_product`,
        }
      ],
    }
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage No One</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/manage_user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage_user`,
    },
    {
      label: <Link href={`/${role}/manage_role`}>Manage Role</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage_role`,
    },
    {
      label: <Link href={`/product_manager/manage_product`}>Manage Service</Link>,
      icon: <TableOutlined />,
      key: `/product_manager/manage_product`,
    },
    {
      label: <Link href={`/content_manager/blog`}>Manage Blogs</Link>,
      icon: <TableOutlined />,
      key: `/content_manager/blog`,
    },
  ];


  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.HR) return HRSidebarItems;
  else if (role === USER_ROLE.CONTENT_MANAGER) return ContentManagerSidebarItems;
  // else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
