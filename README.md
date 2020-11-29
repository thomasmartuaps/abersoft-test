# abersoft-test

**Backend setup**
I use Prisma as the ORM for this backend application, which might not be familiar to you, so I decided to put a quick tutorial to help you get the server up and running quickly. To set up the backend, follow these steps:
1. Please install the dependencies using the terminal command yarn install
2. Create a .env file in the backend root folder AND the prisma folder
3. Copy-paste each of the .txt files to the appropriate .env file
4. configure the prisma .env file according to your mysql configuration (Keep the database name as is.)
5. Configure the dotenv .env file
6. Run the schema.sql script file in the prisma folder using either mysql shell or the workbench
7. Run the command yarn prisma introspect, then yarn prisma generate (More info on this, look up the primsa tutorial.)
8. You should be able to start the backend using the command yarn start

**Frontend setup**
Just install the dependencies with yarn install and run the client with yarn start. If you receive network error while loggin in, you might need to edit the "baseUrl.ts" file in the root frontend folder with the correct url of your PC.