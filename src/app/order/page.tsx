/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Footer from '@/components/ui/Footer';
import DynamicModal from '@/components/ui/Modal/Modal';
import Navbar from '@/components/ui/Navbar';
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { localStorageHelper } from '@/helper/credential';
import { useGetUserOrdersQuery } from '@/redux/api/orderApi'; // Import the order API hook
import { useCreateReviewMutation } from '@/redux/api/reviewApi';
import { Button, Rate, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Link from 'next/link';
import { useState } from 'react';

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

interface IReview { serviceId: string, orderID: string }

const OrdersPage = () => {

    const userInfo = localStorageHelper.getUserInfo();
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    // @ts-ignore
    const { data, isLoading } = useGetUserOrdersQuery(userInfo?.data?._id);
    const [addReview] = useCreateReviewMutation()
    const [textAreaValue, setTextAreaValue] = useState('');
    const [value, setValue] = useState<number>(3);
    const [isOpen, setIsOpen] = useState(false)
    const [orderName, setOrderName] = useState<IReview>({
        serviceId: '',
        orderID: ''
    })
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
            Operation: <div>
                <Link className="text-lg text-black" href={`/order/${item?.service?.id}`}>
                <Button style={{background:"green"}} type='primary'>View Details</Button>
                </Link>
                <Button onClick={() => showModal({ serviceId: item?.service?.id, orderID: item.id })} style={{ background: "blue" }} type='primary' className="ml-2">Review</Button>
            </div>
        }));
    }

    // ! modal function

    const showModal = (payload: IReview) => {
        setOrderName(payload)
        setIsOpen(true);
    };

    const handleOk = async () => {
        if (textAreaValue.length === 0 || orderName.orderID.length === 0 || orderName.serviceId.length === 0) {
            message.error("Please fill every value")
            return
        }
        const reviewPayload = {
            serviceId: orderName.serviceId,
            orderId: orderName.orderID,
            comments: textAreaValue,
            rating:value
        }
        const reviewResponse = await addReview(reviewPayload)
        // console.log({reviewResponse});
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleTextAreaChange = (e: unknown) => {
        // @ts-ignore
        setTextAreaValue(e?.target?.value);
    };

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
            <DynamicModal
                title="Give Review"
                open={isOpen}
                okText='Submit Review'
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <p>Give review about the service</p>
                <span className='my-4'>
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
                <TextArea
                    required
                    rows={4}
                    placeholder="Enter your text here"
                    value={textAreaValue}
                    onChange={handleTextAreaChange}
                />
            </DynamicModal>
        </div>
    );
};

export default OrdersPage;
