import React, { Children, useState } from 'react';
import { Button, Modal } from 'antd';


type IDynamicModalProps = {
    open: boolean;
    children: React.ReactElement| React.ReactNode
    onCancel: () => void;
    onOk: () => void;
}


const DynamicModal = (props:IDynamicModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={props.open} onOk={props.onOk} onCancel={props.onCancel}>
        {props.children}
      </Modal>
    </>
  );
};

export default DynamicModal;