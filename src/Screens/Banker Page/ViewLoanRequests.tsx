import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from "react";

const ViewLoanRequests = () => {
    interface StatusStatesType {
        key: string,
        value: string
    }

    const state_status: StatusStatesType[] = [
        {
            key: '3498',
            value: 'Pending'
        },
        {
            key: '38',
            value: 'Pending'
        },
        {
            key: '324',
            value: 'Pending'
        },
        {
            key: '31',
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
        setStatusStates((items: StatusStatesType[]) => {
            return items.map((item) => item.key === reportID ? { key: item.key, value: handleValue } : item);
        });
        console.log(statusStates);
    }

    interface DataType {
        key: string;
        name: string;
        requestID: string
        description: string
        status: string
        type: string
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Request ID',
            dataIndex: 'requestID',
            key: 'requestID',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
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
                    <a onClick={() => { updateStatus(record.requestID, "Accepted") }}>Accept</a>
                    <a onClick={() => { updateStatus(record.requestID, "Rejected") }}>Reject</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            requestID: '3498',
            name: 'John Brown',
            description: 'Loan money Req',
            type: 'Loan',
            status: statusStates[0].value
        },
        {
            key: '2',
            requestID: '38',
            name: 'Jim Green',
            description: 'I need money',
            type: 'Loan',
            status: statusStates[1].value
        },
        {
            key: '3',
            requestID: '324',
            name: 'Joe Black',
            description: 'Loan Plz??',
            type: 'Loan',
            status: statusStates[2].value
        },
        {
            key: '4',
            requestID: '31',
            name: 'Seif',
            description: 'Loan',
            type: 'Loan',
            status: statusStates[3].value
        }
    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default ViewLoanRequests;