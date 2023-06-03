import React from 'react';
import NavMenu from '../../components/NavMenu';
import { DownOutlined } from '@ant-design/icons';
import { Card, MenuProps, Select, notification } from 'antd';
import '../../css/report-page.css';
// import {useFormik} from 'formik';

const ReportRequest = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Issue have been sent',
      description:
        '',
    })
  };
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //   }
  // });
  return (
    <div className="report-container">
      {contextHolder}
      <h2>Issue</h2>
      <hr />
      <form>
        <div className="report-container-2">
          <Select
            showSearch
            placeholder="Select an issue"
            size='large'
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }

            options={[
              {
                value: 'Credit Card Theft',
                label: 'Credit Card Theft',
              },
              {
                value: 'Credit Card Damage',
                label: 'Credit Card Damage',
              },
              {
                value: 'Credit Card Lost',
                label: 'Credit Card Lost',
              },
              {
                value: 'Technical Issue',
                label: 'Technical Issue',
              },
            ]}
          />
          <div className="description-label">
            <h2>Description</h2>
          </div>
          <div className="text-area">
            <textarea name="" id="" placeholder="Write A Description"></textarea>
          </div>
          <div className="submit-btn" onClick={openNotification}>
            <p>Report</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReportRequest;