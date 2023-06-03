import React from 'react';
import '../../../css/client-page.css';
import CustomCreditCard from "../../../components/CustomCreditCard";
import creditCardData from '../../../data/credit-card-data';
import { CreditCardProps } from '../../../components/CustomCreditCard';
import { useState } from 'react';
import CustomButton from '../../../components/CustomButton';
import { Table, message } from 'antd';
import { currentAccountData } from '../../../data/allAccountsTransactionData';

function CreditCardsPage() {
  const [showCards, setShowCards] = useState(true);
  const [selectedCard, setSelectedCard] = useState(1);

  const [showBalance, setShowBalance] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [points, setPoints] = useState(99000);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Redeemed Points Successfully! ',
    });
  };

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a: any, b: any) => a < b ? -1 : 1,
      showSorterTooltip: false,
    }
  ];

  return (
    <section className="client_section">
      <h2>
        My Cards
      </h2>
      <hr className="loan_header_divider" />

      {
        showCards ? (
          <div className="credit_card_items">
            {
              creditCardData.map((props: any) => {
                return (
                  <CustomCreditCard
                    key={props.id}
                    creditCardNum={props.creditCardNumber}
                    type={props.type}
                    onClick={() => {
                      setShowCards(false);
                      setSelectedCard(props.id)
                    }}
                  />
                );
              })
            }
          </div>
        ) :
          (
            <div className="w-full flex flex-col gap-y-16">
              <div className="card-num flex flex-row items-center">
                <div onClick={() => setShowCards(true)} >
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                  {
                    creditCardData.find(item => item.id === selectedCard)?.creditCardNumber
                  }
                </h2>
              </div>
              <div className='ml-28 flex flex-col items-start'>
                <div className='w-full '>
                  <div className="w-full flex flex-row justify-between">
                    <h1 style={{
                      fontFamily: "outfit", fontWeight: 300, color: "#505050", fontSize: "5rem", margin: 0
                    }}
                    // className={showBalance ? '' : 'blurred-balance'}
                    >
                      {points} Points
                    </h1>

                    <div className="show_button" onClick={() => {
                      success();
                      setPoints(prev => prev - 1000);
                    }}>
                      {contextHolder}
                      Redeem Points
                    </div>
                  </div>
                  <hr style={{ marginBottom: 12 }} className="loan_header_divider" />
                  <div className='w-full flex flex-row justify-end'>
                    <p>
                      {
                        creditCardData.find(item => item.id === selectedCard)?.creditCardNumber
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
                <Table className='w-full' sortDirections={["descend", "ascend"]} dataSource={currentAccountData} columns={columns} pagination={false} />
              </div>
            </div>
          )
      }
    </section>
  )
}

export default CreditCardsPage