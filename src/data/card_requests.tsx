

export const card_requests = [
  {
    request_number: 318529746102,
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
        title: 'Accepted',
        description: 'Your request has been approved.',
        icon: <img src="/res/Nile Delta Icons/steps-approved.svg" style={{ height: 30 }} alt="" />,
        style: { fontWeight: 500, fontFamily: 'Outfit', lineHeight: 1.4 },
      },
    ],
  },

  {
    request_number: 721938465023,
    submit_date: '23-05-2023',
    current: 2,
    items: [
      {
        title: 'Submitted',
        description: 'You have submitted the request.',
        icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />
      },
      {
        title: 'Pending',
        description: 'Your request is no longer pending.',
        // icon: <img src="/res/Nile Delta Icons/steps-done.svg" style={{ height: 30 }} alt="" />,
        // subTitle: 'Left 00:00:08',
      },
      {
        title: 'Reviewing',
        description: 'Your request is currently being reviewed.',
        style: { fontWeight: 500, fontFamily: 'Outfit', lineHeight: 1.4 },
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

