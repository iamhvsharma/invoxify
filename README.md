#### What tools and technology we are using in this project
- NextJS - To build a Web Application
- Auth.js for authentication
- Magic link to generate a special link for authentication
- Mail Trap to send emails
- Postgres for DB
- Tailwind css for styling 
- ShadCN UI for components
- Radix UI

### Work Flow
1. Create a Next.js Project 
2. Implement auth.js for sending magic links 
3. Create a custom verify route
4. Create a onbording route -> Name and address -> Later it will be used in the invoice
5. Create a dashboard layout 
6. Create invoice management route 
    - Create Invoice
        - Send email to the client on completion 
        - Create a nice looking template from scratch
        - Create a real custom pdf and attach using a link (READ PDF)
    - Edit Invoice
        - Send email to client on update
        - Create a nice looking template (HTML Buider)
    - Send remainder to client
        - Email template using the no code email template builder mailtrap 
    - Download invoice
    - Delete Invoice
    - Mark invoice as paid
7. Create dashboard index route (analytics)
    - Main info + Beautiful animated chart
8. Optimization, streaming with a beautiful skeleton 
9. Create a nice looking landing page 
10. Deploy our application on the vercel

### -> FINISH!!

**Developer - Harshvardhan Sharma** 