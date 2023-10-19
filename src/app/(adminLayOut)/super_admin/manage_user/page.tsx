/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import {PiPencilSimpleLineBold} from "react-icons/pi";
import {BsPlus} from "react-icons/bs";
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllUserQuery } from '@/redux/api/authApi';
import { useGetAllFAQQuery } from '@/redux/api/faqApi';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

// fetch the data and mutate it make column
const columns = [
  { title: 'Email', dataIndex: 'Email', key: '1' },
  { title: 'Id', dataIndex: 'key', key: '2' },
    { title: 'Role', dataIndex: 'Role', key: '3' },
  {
    title: 'Action',
    key: '4',
    dataIndex: 'Operation'
  },
]


const page = () => {

  const { data, isLoading } = useGetAllUserQuery(undefined);

  const columnData = data?.data?.map((elem: { id: any; email: any; Role: { name: any; }; }) => {
    return {
      key: elem?.id,
      Email: elem?.email,
      Role: elem?.Role?.name,
      Operation: <Link className="text-lg text-black" href={`/super_admin/manage_user/${elem?.id}`}>
        <Button type="primary" className="mr-2">
          <PiPencilSimpleLineBold />
        </Button>
      </Link>,
    };
  }) ?? [];

    return (
        <div>
            <div className='flex justify-end p-10'>
              <Button
                    type="primary"
                    className='my-5'
               >
                <Link href={'/content_manager/manage_user/create'}>Create <BsPlus className="inline text-base"/></Link>
              </Button>
            </div>
        <DynamicTable
          isLoading={isLoading}
          columns={columns}
          dataSource={columnData}
            />
        </div>
    );
};

export default page;