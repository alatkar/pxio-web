// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const organizations = [
  {
    id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'Phoenix iO',
    description: 'AI in AEC Platform',
  },
];

const users = [
  {
    id: '89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    email: 'user@phoenixio.one',
    password: '123456',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695'
  },
  {
    id: '262f437f-d049-4104-b3f5-f742109c13f8',
    email: 'admin@phoenixio.one',
    password: '123456',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695'
  },
];

const rfps = [
  {
    id: 'e1a0dc67-4491-4683-aafc-ceab757d41f6',
    user_id:'89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'Rfp Name Placeholder',
    date_created: '2024-05-02',
    amount: 250000,
    status: 'open'
  },
  {
    id: '23cdab36-8f24-4f13-a5f2-ce77e5e55ac1',
    user_id:'89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'New Rfp Name Placeholder',
    date_created: '2024-05-02',
    amount: 500000,
    status: 'open'
  },
  {
    id: '52156c6f-159b-40fe-9629-d518d7e99173',
    user_id:'89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'New new Rfp Name Placeholder',
    date_created: '2024-05-02',
    amount: 500000,
    status: 'open'
  },
];

const proposals = [
  {
    id: 'c6e47630-5533-41c0-81ab-ac895a2bea16',
    user_id:'89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    rfp_id: 'e1a0dc67-4491-4683-aafc-ceab757d41f6',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'New Proposal Name Placeholder',
    date_created: '2024-05-02',
    amount: 500000,
    status: 'open'
  },
  {
    id: '5a6605d6-9b94-4306-a966-5c638ffec629',
    user_id:'89df8618-dddd-4a20-92fb-b4d7ca87bcd7',
    rfp_id: '23cdab36-8f24-4f13-a5f2-ce77e5e55ac1',
    org_id: 'a745b8ef-1bae-4563-ab04-b47dc4a6d695',
    name: 'Proposal Name Placeholder',
    date_created: '2024-05-02',
    amount: 250000,
    status: 'open'
  },
];

module.exports = {
  users,
  organizations,
  rfps,
  proposals
};
