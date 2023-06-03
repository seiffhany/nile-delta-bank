import React from 'react'
import '../../../css/client-page.css'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

function NotificationsPage() {

  interface DataType {
    key: React.Key;
    type: string;
    time: string;
    notification: string;
  }

  const dataSource = [
    {
      key: '1',
      type: 'Loan',
      time: '25-05-2023',
      notification: 'Your Car Loan is due in 4 days'
      // description: 'Business Loan',
      // next_due_date: '01-06-2023',
      // days_left: '4',
      // amount_due: <p><span className='bold'>175,000</span> EGP</p>,
      // remaining: <p><span className='bold'>175,000</span> EGP</p>,
      // total: <p><span className='bold'>700,000</span> EGP</p>,
    },
    {
      key: '2',
      type: 'Transfer',
      time: '27-05-2023',
      notification: 'Ahmed transfered 500 EGP to your account'
      // description: 'Car Loan',
      // next_due_date: '01-02-2024',
      // days_left: '249',
      // amount_due: <p><span className='bold'>171,000</span> EGP</p>,
      // remaining: <p><span className='bold'>342,000</span> EGP</p>,
      // total: <p><span className='bold'>855,000</span> EGP</p>
    },
  ];
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type),
      showSorterTooltip: false,
      filters: [
        {
          text: 'Loan',
          value: 'Loan',
        },
        {
          text: 'Transfer',
          value: 'Transfer',
        },
      ],
      filterMode: undefined, // or 'tree' or 'menu'
      filterSearch: true,
      onFilter: (value: string | number | boolean, record: DataType) =>
      String(record.type).startsWith(String(value)),
      width: '30%',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      sorter: (a: DataType, b: DataType) => (a.time < b.time ? -1 : 1),
      showSorterTooltip: false,
    },
    {
      title: 'Notification',
      dataIndex: 'notification',
      key: 'notification',
    },
  ];  
  
  
  return (
    <section className="client_section">
      <div className="my_loans_header">
        <h2>Notifications</h2>
        {/* <img src="/res/Nile Delta Icons/add.svg" alt="" /> */}
      </div>
      <hr className="loan_header_divider"/>
      <Table sortDirections={["descend", "ascend"]} dataSource={dataSource} columns={columns} pagination={false} />
    </section>
  )
}

export default NotificationsPage;