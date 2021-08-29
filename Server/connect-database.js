const { Client } = require("cassandra-driver");
const { CLIENT_KEY, CLIENT_SECRET } = require("./config/constant")


async function run() {
    const client = new Client({
      cloud: {
        secureConnectBundle: "C:/Users/Softbook/Documents/Main Programs/Open Source/Datasax/secure-connect-african-wizard.zip",
      },
      credentials: {
        username: CLIENT_KEY,
        password: CLIENT_SECRET
      },
    });
  
    await client.connect();
  
    // Execute a query
    const rs = await client.execute("SELECT * FROM system.local");
    console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  
    await client.shutdown();
  }
  
  // Run the async function
  run();