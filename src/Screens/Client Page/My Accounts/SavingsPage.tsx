import React from 'react';
import { savings_account } from '../../../data/account-cards';
import AccountCard from '../../../components/AccountCard';
import { useState } from "react";
import { Table } from 'antd';
import CustomButton from '../../../components/CustomButton';
import { currentAccountData } from '../../../data/allAccountsTransactionData';

function SavingsPage() {
  const [showCards, setShowCards] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);

  const [showBalance, setShowBalance] = useState(false);

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Next Due Date',
      dataIndex: 'next_due_date',
      key: 'next_due_date',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    },
    {
      title: 'Days Left',
      dataIndex: 'days_left',
      key: 'days_left',
      sorter: (a: any, b: any) => a.days_left - b.days_left,
      showSorterTooltip: false,
    },
    {
      title: 'Amount Due',
      dataIndex: 'amount_due',
      key: 'amount_due',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
      key: 'remaining',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    }
  ];

  return (
    <>
      {
        showCards ? (
          <div className="account_card_items">
            {
              savings_account.map((account, index) => {
                return <AccountCard 
                title={account['title']} 
                number={account['number']} 
                onClick={() => {
                  setShowCards(false);
                  setSelectedCard(account.id);
                }}
                />
              })
            }
        </div>
        ) : (
          <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center gap-x-16">
                <div onClick={() => {setShowCards(true); setShowBalance(false)}}>
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                  {
                    savings_account.find(item => item.id === selectedCard)?.number
                  }
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <div className="w-full flex flex-row justify-between">
                    <h1 style={{
                      fontFamily:"outfit", fontWeight:300, color: "#505050", fontSize:"5rem", margin:0
                    }} 
                    className={showBalance ? '' : 'blurred-balance'}
                    >
                    437,912 EGP
                    </h1>
                    <div className="show_button" onClick={() => { setShowBalance((prev) => !prev) }}>
                      {showBalance ? "Hide Balance" : "Show Balance"}
                    </div>
                  </div>
                  <hr style={{marginBottom:12}} className="loan_header_divider" />
                  <div className='w-full flex flex-row justify-end'>
                    <p>
                      {
                        savings_account.find(item => item.id === selectedCard)?.number
                      }
                    </p>
                  </div>
                </div>
              </div>
              {
                showBalance ? (
                  <div className="ml-28 flex flex-col items-start">
                    <h1 style={{
                          fontFamily:"outfit", fontWeight:300, color: "#505050", fontSize:"5rem", margin:0
                        }}
                    >
                      Transactions
                    </h1>
                    <hr className="loan_header_divider" />
                    <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={currentAccountData} columns={columns} pagination={false} />
                  </div>
                ) : (
                  <div className='w-full flex flex-row justify-center'>
                    <p style={{fontFamily: 'outfit', color:"#9F9F9F"}}>Please show your balance in order to view your transactions</p>
                  </div>
                )
              }
            </div>
        )
      }
    </>
  )
}

export default SavingsPage