import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from "react";
import { currentAccountData } from '../../data/allAccountsTransactionData';

const ViewAllClients = () => {
    const [showTable, setShowTable] = useState(true);
    const [selectedUser, setSelectedUser] = useState('');

    const userData1: UserDataType[] = [
        {
            key: '1',
            name: 'John Brown',
            clientID: '3498',
            ssn : '123873817399',
            accountNo : '2832839'
        },
        {
            key: '2',
            name: 'Jim Green',
            clientID: '38',
            ssn : '231312445666',
            accountNo : '1232425'
        },
        {
            key: '3',
            name: 'Joe Black',
            clientID: '324',
            ssn : '895389589300',
            accountNo : '4364369'
        },
        {
            key: '4',
            name: 'Seif',
            clientID: '31',
            ssn : '658458458458',
            accountNo : '4232382'
        }
    ]

    const userData2: UserDataType[] = [
       
    ]

    const userData3: UserDataType[] = [
        
    ]

    const userData4: UserDataType[] = [
      
    ]

    const [elUser, setElUser] = useState(userData1);

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
        clientID: string

    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Client ID',
            dataIndex: 'clientID',
            key: 'clientID',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (idx, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        setShowTable(false);
                        setSelectedUser(
                            record.clientID
                        );
                    }}>View</a>
                </Space>
            ),
        },
    ];

    interface UserDataType {
        key:string;
        name: string;
        clientID: string;
        ssn: string;
        accountNo: string
    }

    const userColumns:ColumnsType<UserDataType >= [
        
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'Client ID',
                dataIndex: 'clientID',
                key: 'clientID',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'SSN',
                dataIndex: 'ssn',
                key: 'ssn',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'Account Number',
                dataIndex: 'accountNo',
                key: 'accountNo',
                render: (text) => <a>{text}</a>,
            },
        
    ]

  

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            clientID: '3498',
        },
        {
            key: '2',
            name: 'Jim Green',
            clientID: '38',
        },
        {
            key: '3',
            name: 'Joe Black',
            clientID: '324',
        },
        {
            key: '4',
            name: 'Seif',
            clientID: '31',
        }
    ];

    useEffect(() => {
        var rakam = Math.ceil(Math.random()*3) + 1;
        switch (rakam) {
            case 1:
                return setElUser(userData1);
            case 2:
                return setElUser(userData2);
            case 3:
                return setElUser(userData3);
            case 4:
                return setElUser(userData4);

        }
    }, []);

    return (
        <>
            {
                showTable ? (
                    <Table columns={columns} dataSource={data} />
                ) : (
                    <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center">
                <div onClick={() => {
                    setShowTable(true);
                }} >
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                    Back
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <hr style={{ marginBottom: 12 }} className="loan_header_divider" />
                </div>
              </div>
              <div className="ml-28 flex flex-col items-start">
                <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={[userData1.at(userData1.findIndex(item => item.clientID === selectedUser))] as UserDataType[]} columns={userColumns} pagination={false} />
              </div>
            </div>
                )
            }
        </>
    )
}

export default ViewAllClients;