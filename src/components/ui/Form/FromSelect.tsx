import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { Controller, useForm } from 'react-hook-form';

type ISelectProps = {
    name:string,
    mode: "tags" | "multiple"|undefined,
    placeholder: string,
    options: SelectProps['options'],
    handleChange:(value:string)=>void
}

const DynamicSelect = (selectProps: ISelectProps) => {
    const {control}=useForm()
    return (
        <Select
        mode={selectProps.mode||undefined}
        style={{ width: '100%' }}
        placeholder={selectProps.placeholder||'Please select'}
        onChange={selectProps.handleChange}
        options={selectProps.options}
          />

)};

export default DynamicSelect;
{/* <Controller
name={selectProps.name}
control={control}
defaultValue={null} // Set the default value if needed
render={({ field }) => (
    <Select
        {...field}
        mode={selectProps.mode || 'tags'}
        style={{ width: '100%' }}
        placeholder={selectProps.placeholder || 'Please select'}
        options={selectProps.options}
    />
)}
/>
 <Select
    mode={selectProps.mode||'tags'}
    style={{ width: '100%' }}
    placeholder={selectProps.placeholder||'Please select'}
    onChange={selectProps.handleChange}
    options={selectProps.options}
      /> */}