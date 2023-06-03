import React from 'react';
import NavMenu from '../../../components/NavMenu';
import { Space, Table, Tag, notification } from 'antd';
import { Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from "react";
// import {useFormik} from 'formik';

const PayBills = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Bill has been paid successfully! ',
    });
  };

  interface StatusStatesType {
    key: string,
    value: string
  }

  const state_status: StatusStatesType[] = [
    {
      key: '1',
      value: 'Pending'
    },
    {
      key: '2',
      value: 'Pending'
    },
    {
      key: '3',
      value: 'Pending'
    },
    {
      key: '4',
      value: 'Pending'
    },
    {
      key: '5',
      value: 'Pending'
    }

  ]

  // var status_states = {
  //     '3498' : 'Balabizo 1',
  //     '38' : 'Balabizo 2',
  //     '324' : 'Balabizo 3',
  //     '31' : 'Balabizo 4',
  // }

  const [statusStates, setStatusStates] = useState(state_status);

  function updateStatus(reportID: string, handleValue: string) {
    console.log(reportID, handleValue);
    setStatusStates((items: StatusStatesType[]) => {
      return items.map((item) => item.key === reportID ? { key: item.key, value: handleValue } : item);
    });
  }

  interface DataType {
    key: string;
    name: string;
    billID: string
    amount: string
    status: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Bill Type',
      dataIndex: 'name',
      key: 'billType',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Bill ID',
      dataIndex: 'billID',
      key: 'billID',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.name === "Credit Card" ? <a onClick={() => { success(); updateStatus(record.billID, "Paid") }}>Pay Fully</a> : <a onClick={() => { success(); updateStatus(record.billID, "Paid") }}>Pay</a>}
          {record.name === "Credit Card" ? <a onClick={() => { success(); updateStatus(record.billID, "Paid Partially") }}>Pay Partially</a> : <a></a>}
          {/* <a onClick={() => { updateStatus(record.billID, "Pay Partially") }}>Pay Partially</a> */}
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Credit Card',
      billID: '1',
      amount: '2932',
      status: statusStates[0].value
    },
    {
      key: '2',
      name: 'Electricity',
      billID: '2',
      amount: '200',
      status: statusStates[1].value
    },
    {
      key: '3',
      name: 'Water',
      billID: '3',
      amount: '300',
      status: statusStates[2].value
    },
    {
      key: '4',
      name: 'Telephone',
      billID: '4',
      amount: '600',
      status: statusStates[3].value
    },
    {
      key: '5',
      name: 'Gas',
      billID: '5',
      amount: '700',
      status: statusStates[4].value
    }
  ];

  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default PayBills;