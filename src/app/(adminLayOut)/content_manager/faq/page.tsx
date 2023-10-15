"use client"

import DynamicTable from '@/components/ui/Table/DynamicTable';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

// fetch the data and mutate it make column
const columns = [
    { title: 'Question', dataIndex: 'question', key: '1' },
    { title: 'Answer', dataIndex: 'answer', key: '2' },
    { title: 'Created By', dataIndex: 'created By', key: '3' },
    {
        title: 'Action',
        key: 'operation',
        render: () => <Link href={'/content_manager/faq/create'}>Update</Link>,
      },
]

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];


const page = () => {
    return (
        <div>
            <div className='flex justify-end p-10'>
              <Button
                    type="primary"
                    className='my-5'
               >
                <Link href={'/content_manager/faq/create'}>Create</Link>
              </Button>
            </div>
            <DynamicTable
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default page;