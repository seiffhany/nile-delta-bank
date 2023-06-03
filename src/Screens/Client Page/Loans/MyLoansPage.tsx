import React from 'react'
import '../../../css/client-page.css';
import '../../../css/register-page.css';
import { Input, Select, Table, notification } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import LoanCreationModel from '../../../models/loanRequestModel';
import CustomButton from '../../../components/CustomButton';

function MyLoansPage() {
  const [showForm, setShowForm] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const formik = useFormik({
    initialValues: {
        type: '',
        loan_amount: '',
        car_model: '',
        monthly_payment: ''
    },
    validationSchema: Yup.object({
        type: Yup.string().required(),
        loan_amount: Yup.string().required(),
        car_model: Yup.string(),
        monthly_payment: Yup.string().required()
    }),
    onSubmit: (values: LoanCreationModel) => {
      showNotification();
    }
});

  const dropdownValues = [
    {
      value: 'Personal Loan',
      label: 'Personal Loan'
    },
    {
      value: 'Car Loan',
      label: 'Car Loan'
    }
  ]

  const dataSource = [
    {
      key: '1',
      description: 'Business Loan',
      next_due_date: '01-06-2023',
      days_left: '4',
      amount_due: <p><span className='bold'>175,000</span> EGP</p>,
      remaining: <p><span className='bold'>175,000</span> EGP</p>,
      total: <p><span className='bold'>700,000</span> EGP</p>,
    },
    {
      key: '2',
      description: 'Car Loan',
      next_due_date: '01-02-2024',
      days_left: '249',
      amount_due: <p><span className='bold'>171,000</span> EGP</p>,
      remaining: <p><span className='bold'>342,000</span> EGP</p>,
      total: <p><span className='bold'>855,000</span> EGP</p>
    },
  ];

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

  const handleSelect = (value: string) => {
    formik.setFieldValue('type', value);
  }

  const showNotification = () => {
    api.open({
      className: 'font-bold text-blue-400',
      message: <h1>Congratulations</h1>,
      description:
        'This Loan Request has been added, and it will now be reviewed by our experts. Excpect a response in 7-14 days.',
    });
  }

  return (
    <section className="client_section">
      {
        showForm ? (
          <div className="w-full flex flex-col">
            {contextHolder}
            <div onClick={() => setShowForm(false)} className="card-num-d flex flex-row items-center gap-x-2">
                <div>
                  <img className="back-icon w-16 h-16" src="/res/Nile Delta Icons/back-arrow.svg" />
                </div>
                <h2>
                  Back
                </h2>
            </div>
            <form className='w-full' onSubmit={formik.handleSubmit}>
             <div className="w-full flex flex-col items-center">
              <h2 style={{margin:0}}>Create Loan Request</h2>
              <hr className="loan_header_divider" />
              <div className='loan-fields w-1/2 flex flex-row justify-center gap-x-12'>
                  <div className="w-full">
                    <h2 className="">Type</h2>
                    <Select className="w-full" defaultValue="None" onChange={handleSelect} status={(formik.errors.type) ? "error" : ""} size="large" options={dropdownValues} />
                  </div>
                  <div className="w-full">
                    <h2 className="">Loan Amount</h2>
                    <Input type="text" name="loan_amount" value={formik.values.loan_amount} onChange={formik.handleChange} status={(formik.errors.loan_amount) ? "error" : ""} size="large" placeholder="100,000 EGP" />
                  </div>
              </div>
              <div className='loan-fields w-1/2 mt-12 flex flex-row justify-center gap-x-12'>
                  <div className="w-full">
                    <h2 className="">Car Model</h2>
                    <Input type="text" name="car_model" value={formik.values.car_model} onChange={formik.handleChange} status={(formik.errors.car_model) ? "error" : ""} size="large" placeholder="BMW 320i" />
                  </div>
                  <div className="w-full">
                    <h2 className="">Monthly Payment</h2>
                    <Input type="text" name="monthly_payment" value={formik.values.monthly_payment} onChange={formik.handleChange} status={(formik.errors.monthly_payment) ? "error" : ""} size="large" placeholder="10,000 EGP" />
                  </div>
              </div>
              <CustomButton
                body="Submit"
                type="submit"
                style='mt-12 bodia-border p-8 w-64'
              />
             </div>
            </form>
          </div>
        ) : (
          <>
          <div className="my_loans_header">
          <h2>My Loans</h2>
          <div onClick={() => setShowForm(true)}><img src="/res/Nile Delta Icons/add.svg" alt="" /></div>
          </div>
          <hr className="loan_header_divider" />
          <Table sortDirections={["descend", "ascend"]} dataSource={dataSource} columns={columns} pagination={false} />
        </>
        )
      }
    </section>
  )
}

export default MyLoansPage