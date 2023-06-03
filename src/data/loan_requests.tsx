

export const loan_requests = [
  {
    request_number: 873602148326,
    submit_date: '15-04-2023',
    current: 3,
    items: [
      {
        title: 'Submitted',
        description: 'You have submitted the request.',
        icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
      },
      {
        title: 'Pending',
        description: 'Your request is no longer pending.',
        icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
        // subTitle: 'Left 00:00:08',
      },
      {
        title: 'Reviewed',
        description: 'Your request has been reviewed.',
        icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
      },
      {
        title: 'Rejected',
        description: 'Your request has been rejected.',
        icon: <img src="/res/Nile Delta Icons/steps-rejected.svg" style={{ height: 30 }} alt="" />,
        style: { fontWeight: 500, fontFamily: 'Outfit', lineHeight: 1.4 },
      },
    ],
  },

  {
    request_number: 101999479520,
    submit_date: '23-05-2023',
    current: 1,
    items: [
      {
        title: 'Submitted',
        description: 'You have submitted the request.',
        icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
      },
      {
        title: 'Pending',
        description: 'Waiting to be reviewed.',
        style: { fontWeight: 500, fontFamily: 'Outfit', lineHeight: 1.4 },
        // icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />,
        // subTitle: 'Left 00:00:08',
      },
      {
        title: 'Reviewing',
        description: 'Your request is currently being reviewed.',
        // icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
      },
      {
        title: 'Final Status',
        description: 'Conclusion of the review.',
        // icon: <img src="/res/Nile Delta Icons/steps-rejected.svg" style={{ height: 30 }} alt="" />,
      },
    ],
  },
]

