/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { localStorageHelper } from '@/helper/credential';
import { useGetUserOrdersQuery } from '@/redux/api/orderApi'; // Import the order API hook
import { Button } from 'antd';
import Link from 'next/link';

const getStatusColor = (status: string) => {
    switch (status) {
        case 'PENDING':
            return 'orange'; 
        case 'PROCESSING':
            return 'blue';
        case 'COMPLETED':
            return 'green'; 
        case 'CANCELLED':
            return 'red'; 
        default:
            return 'gray'; 
    }
};

const OrdersPage = () => {
    const userInfo = localStorageHelper.getUserInfo();
    // @ts-ignore
    const { data, isLoading } = useGetUserOrdersQuery(userInfo?.data?._id);
    console.log(data);

    const columns = [
        { title: 'Order ID', dataIndex: 'id', key: '1' },
        { title: 'Service', dataIndex: 'name', key: '2' },
        { title: 'Service For', dataIndex: 'idealFor', key: '3' },
        { title: 'Service Price', dataIndex: 'price', key: '4' },
        { title: 'Status', dataIndex: 'status', key: '4' },
        {
          title: 'Action',
          key: '5',
          dataIndex: 'Operation'
        },
    ];

    let transformedData;
    if (data?.success) { 
        transformedData = data?.data.map((item: { id: string;status:string, service: { id:string, serviceName: string; idealFor: string; price: string; }; }) => ({
            key: item.id,
            id: item.id,
            name: item.service.serviceName,
            idealFor: item.service.idealFor,
            price: item.service.price,
            status: <span className='rounded-lg inline-block p-1' style={{ background: getStatusColor(item.status) }}>{item?.status}</span>,
            Operation: <Link className="text-lg text-black" href={`/order/${item?.service?.id}`}>
                <Button style={{background:"green"}} type='primary'>View Details</Button>
            </Link>
        }));
    }

    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />
                <DynamicTable
                    columns={columns}
                    dataSource={transformedData}
                    isLoading={isLoading} />
                <Footer />
            </div>
        </div>
    );
};

export default OrdersPage;
