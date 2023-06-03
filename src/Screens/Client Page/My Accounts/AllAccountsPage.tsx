import AccountCard from '../../../components/AccountCard';
import { savings_account, current_account } from '../../../data/account-cards';
import "../../../css/client-page.css";
import { useState } from "react";
import CustomButton from '../../../components/CustomButton';
import { currentAccountData } from '../../../data/allAccountsTransactionData';
import { Table } from 'antd';

function AllAccountsPage() {
  const [showCurrentAccounts, setShowCurrentAccounts] = useState(true);
  const [showSavingAccounts, setShowSavingAccounts] = useState(true);

  const [showSavingBalance, setShowSavingBalance] = useState(false);
  const [showCurrentBalance, setShowCurrentBalance] = useState(false);

  const [selectedCurrentAccount, setSelectedCurrentAccount] = useState(0);
  const [selectedSavingAccount, setSelectedSavingAccount] = useState(0);

  const savingAccountColumns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
      key: 'remaining',
    },
  ];

  const currentAccountColumns = [
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
    <div>
      <section className="client_section">
        <h2>Savings Accounts</h2>
        <hr className="loan_header_divider" />

        {
          showSavingAccounts ? (
            <div className="account_card_items">
              {
                savings_account.map((account, index) => {
                  return <AccountCard
                    key={account.number}
                    title={account['title']}
                    number={account['number']}
                    onClick={() => {
                      setShowSavingAccounts(false);
                      setSelectedSavingAccount(account.id);
                    }}
                  />
                })
              }
            </div>
          ) : (
            <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center gap-x-16">
                <div onClick={() => {setShowSavingAccounts(true); setShowSavingBalance(false)}}>
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                  {
                    savings_account.find(item => item.id === selectedSavingAccount)?.number
                  }
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <div className="w-full flex flex-row justify-between">
                    <h1 style={{
                      fontFamily: "outfit", fontWeight: 300, color: "#505050", fontSize: "5rem", margin: 0
                    }}
                      className={showSavingBalance ? '' : 'blurred-balance'}
                    >
                      {
                        savings_account.find(item => item.id === selectedSavingAccount)?.balance
                      }
                    </h1>
                    <div className="show_button" onClick={() => { setShowSavingBalance((prev) => !prev) }}>
                      {showSavingBalance ? "Hide Balance" : "Show Balance"}
                    </div>
                  </div>
                  <hr style={{ marginBottom: 12 }} className="loan_header_divider" />
                  <div className='w-full flex flex-row justify-end'>
                    <p>
                      {
                        savings_account.find(item => item.id === selectedSavingAccount)?.number
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-28 flex flex-col items-start">
                <h1 style={{
                  fontFamily: "outfit", fontWeight: 300, color: "#505050", fontSize: "5rem", margin: 0
                }}
                >
                  Transactions
                </h1>
                <hr className="loan_header_divider" />
                {
                  showSavingBalance ? (
                    <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={currentAccountData} columns={savingAccountColumns} pagination={false} />
                  ) : (
                    <div className="w-full flex flex-row justify-center">
                      <p style={{ fontFamily: 'outfit', color: "#9F9F9F", fontSize: 20 }}>Please show your balance in order to view your transactions</p>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </section>
      <section className="client_section">
        <h2>Current Accounts</h2>
        <hr className="loan_header_divider" />

        {
          showCurrentAccounts ? (
            <div className="account_card_items">
              {
                current_account.map((account, index) => {
                  return <AccountCard
                    key={account.number}
                    title={account['title']}
                    number={account['number']}
                    onClick={() => {
                      setShowCurrentAccounts(false);
                      setSelectedCurrentAccount(account.id);
                    }}
                  />
                })
              }
            </div>
          ) : (
            <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center gap-x-16">
                <div onClick={() => {setShowCurrentAccounts(true); setShowCurrentBalance(false)}}>
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                  {
                    current_account.find(item => item.id === selectedCurrentAccount)?.number
                  }
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <div className="w-full flex flex-row justify-between">
                    <h1 style={{
                      fontFamily: "outfit", fontWeight: 300, color: "#505050", fontSize: "5rem", margin: 0
                    }}
                      className={showCurrentBalance ? '' : 'blurred-balance'}
                    >
                      {
                        current_account.find(item => item.id === selectedCurrentAccount)?.balance
                      }
                    </h1>
                    <div className="show_button" onClick={() => { setShowCurrentBalance((prev) => !prev) }}>
                      {showCurrentBalance ? "Hide Balance" : "Show Balance"}
                    </div>
                  </div>
                  <hr style={{ marginBottom: 12 }} className="loan_header_divider" />
                  <div className='w-full flex flex-row justify-end'>
                    <p>
                      {
                        current_account.find(item => item.id === selectedCurrentAccount)?.number
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-28 flex flex-col items-start">
                <h1 style={{
                  fontFamily: "outfit", fontWeight: 300, color: "#505050", fontSize: "5rem", margin: 0
                }}
                >
                  Transactions
                </h1>
                <hr className="loan_header_divider" />
                {
                  showCurrentBalance ? (
                    <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={currentAccountData} columns={currentAccountColumns} pagination={false} />
                  ) : (
                    <div className="w-full flex flex-row justify-center">
                      <p style={{ fontFamily: 'outfit', color: "#9F9F9F", fontSize: 20 }}>Please show your balance in order to view your transactions</p>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default AllAccountsPage