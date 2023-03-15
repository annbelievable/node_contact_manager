START PROJECT:
DEBUG=node_contact_manager:* npm start

TODO:
-users can register for their account
-user can login to their account and manage their contacts
-user can perform CRUD operations on contacts
-user can only perform CRUD operations on their own contacts
-user should have a valid access token to use the private endpoints
-proper error messages with status code
-user password is stored properly
-JWT tokens for users that login successfully

ROUTES REQUIRED:
POST /api/users/register
POST /api/users/login
GET /api/users/current

GET /api/contacts
GET /api/contacts/:id
POST /api/contacts
PUT /api/contacts/:id
DELETE /api/contacts/:id