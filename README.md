NOTES:
Please create a .env file. Add the following variables PORT, CONNECTION_STRING and ACCESS_TOKEN_SECRET to ensure the project works well.

START PROJECT:
DEBUG=node_contact_manager:\* npm start

ROUTES AVAILABLE:
POST /api/users/register
POST /api/users/login
GET /api/users/current

GET /api/contacts
GET /api/contacts/:id
POST /api/contacts
PUT /api/contacts/:id
DELETE /api/contacts/:id
