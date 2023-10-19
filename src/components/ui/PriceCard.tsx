import React from 'react';
import { Card } from 'antd';

export const pricingData = [
    {
        "title": "Basic",
        "price": "$19/month",
        "description": "Lorem ipsum dolor sit amet.",
        "features": ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
        "title": "Standard",
        "price": "$39/month",
        "description": "Lorem ipsum dolor sit amet.",
        "features": ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
        "title": "Premium",
        "price": "$59/month",
        "description": "Lorem ipsum dolor sit amet.",
        "features": ["Feature 1", "Feature 2", "Feature 3"]
    }
]


const PriceCard = ({ title, price, description, features }:{title:string,price:string,description:string,features:string[]}) => {
    return (
        <Card className="m-4" title={title} style={{ width: 300 }}>
            <p className="text-2xl font-bold mb-4">{price}</p>
            <p className="mb-4">{description}</p>
            <ul>
                {features.map((feature, index) => (
                    <h1 key={index} className="mb-2">
                        {feature}
                    </h1>
                ))}
            </ul>
        </Card>
    );
};

export default PriceCard;
