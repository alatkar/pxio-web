// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  email: string;
  password: string;
  org_id: string;
};

export type UserProfile = {
  id: string;
  user_id: string
  first_name: string;
  last_name: string;
  full_name: string;
  profile_image: string; 
};

export type Organization = {
  id: string;
  name: string;
  description: string;
};

export type Rfp = {
  id: string;
  user_id: string;
  org_id: string;
  name: string;
  date_created: string;
  amount: number;
  status: 'open' | 'accepted' | 'submitted' | 'won'| 'lost';
};

export type Proposal = {
  id: string;
  user_id: string;
  rfp_id: string;
  org_id: string;
  name: string;
  date_created: string;
  amount: number;
  status: 'open' | 'submitted' | 'won'| 'lost';
};