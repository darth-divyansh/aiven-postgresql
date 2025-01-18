# Trying Out Aiven for Hosting PostgreSQL

This project documents my experience of setting up and hosting an online PostgreSQL database using [Aiven](https://aiven.io), a managed cloud service provider.

---

## Table of Contents
- [Overview](#overview)
- [Setup and Configuration](#setup-and-configuration)
- [Features Tested](#features-tested)
- [Learnings](#learnings)
- [Future Work](#future-work)
- [Acknowledgements](#acknowledgements)

---

## Overview
Aiven provides managed cloud database services that simplify database hosting and scaling. I explored Aiven's PostgreSQL hosting to understand its ease of use, setup process, and features.

---

## Setup and Configuration

### **Step 1: Sign Up on Aiven**
1. Create an account at [Aiven's website](https://aiven.io).
2. Navigate to the Aiven dashboard.

### **Step 2: Create a PostgreSQL Service**
1. Click on **Create a New Service**.
2. Choose `PostgreSQL` as the service type.
3. Select a cloud provider and region (e.g., AWS, GCP, or Azure).
4. Configure the database plan (e.g., resources like storage, CPU, and RAM).

### **Step 3: Connect to PostgreSQL**
1. On the overview of your hosted service use the "Quick Connect" button to select your way of connecting the online hosted service for your local backend app or run it in PostgreSQL, Nodejs Development or DBeaver.
![image](https://github.com/user-attachments/assets/4bf15b81-028a-4b31-959d-9d64af3d549e)
2. If the connection is successful, you should see output similar to:
   - psql (13.2, server 13.3)
     SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
     Type "help" for help.

     defaultdb=>
3. To confirm the connection, check the PostgreSQL version:
   - select version();
     
4. The output should look like this if the connection was successful:
   
                                             version
--------------------------------------------------------------------------------------------
PostgreSQL 16.6 on x86_64-pc-linux-gnu, compiled by gcc, [...]
(1 row)


---

## Features Tested

1. **Database Setup**: Successfully created and connected to the database.
2. **Basic Queries**: Ran simple `CREATE`, `INSERT`, `SELECT`, `UPDATE`, and `DELETE` commands.
3. **Backups and Restores**: Tested Aiven's automatic backup feature.
4. **Connection Security**: Verified SSL-enabled connections.
5. **Scaling**: Explored options to scale resources (CPU, storage).

---

## Learnings

- **Ease of Use**: Aiven provides an intuitive UI and detailed documentation, making the setup process straightforward.
- **Performance**: The hosted PostgreSQL instance performed well for small-scale testing.
- **Security**: SSL-enabled connections are enforced by default, ensuring data security.

---

## Future Work

- Experiment with Aiven's advanced features, such as:
  - Monitoring with Grafana and Prometheus.
  - Integration with other services like Kafka.
  - Testing performance under heavy workloads.
- Explore pricing and cost optimization for long-term use.



