"use client"
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;


const Footer = () => {
    return (
        <>
            <AntdFooter style={{ textAlign: 'center' }}>
                Bug Buster  ©2023 Grow your business with us
            </AntdFooter>
        </>
    );
};

export default Footer;