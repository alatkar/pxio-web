const { db } = require('@vercel/postgres');
const {  
  organizations,
  users,  
  rfps,
  proposals,
} = require('../lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedOrganizations(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "organizations" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS organizations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
  );
`;

    console.log(`Created "organizations" table`);

    // Insert data into the "organizations" table
    const insertedOrganizations = await Promise.all(
      organizations.map(
        (organization) => client.sql`
        INSERT INTO organizations (id, name, description)
        VALUES (${organization.id}, ${organization.name}, ${organization.description})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedOrganizations.length} organizations`);

    return {
      createTable,
      organizations: insertedOrganizations,
    };
  } catch (error) {
    console.error('Error seeding organizations:', error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        org_id UUID NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, email, password, org_id)
        VALUES (${user.id}, ${user.email}, ${hashedPassword}, ${user.org_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedRfps(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "rfps" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS rfps (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        org_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        date_created DATE NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "rfps" table`);

    // Insert data into the "rfps" table
    const insertedRfps = await Promise.all(
      rfps.map(async (rfp) => {        
        return client.sql`
        INSERT INTO rfps (id, user_id, org_id, name, date_created, amount, status)
        VALUES (${rfp.id}, ${rfp.user_id}, ${rfp.org_id}, ${rfp.name}, ${rfp.date_created}, ${rfp.amount}, ${rfp.status})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedRfps.length} rfps`);

    return {
      createTable,
      rfps: insertedRfps,
    };
  } catch (error) {
    console.error('Error seeding rfps:', error);
    throw error;
  }
}

async function seedProposals(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "proposals" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS proposals (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        rfp_id UUID NOT NULL,
        org_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        date_created DATE NOT NULL,
        amount INT NOT NULL,
        status VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "proposals" table`);

    // Insert data into the "proposal" table
    const insertedProposals = await Promise.all(
      proposals.map(async (proposal) => {        
        return client.sql`
        INSERT INTO proposals (id, user_id, rfp_id, org_id, name, date_created, amount, status)
        VALUES (${proposal.id}, ${proposal.user_id}, ${proposal.rfp_id}, ${proposal.org_id}, ${proposal.name}, ${proposal.date_created}, ${proposal.amount}, ${proposal.status})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedProposals.length} proposals`);

    return {
      createTable,
      proposals: insertedProposals,
    };
  } catch (error) {
    console.error('Error seeding proposals:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedOrganizations(client);
  await seedUsers(client);
  await seedRfps(client);
  await seedProposals(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
