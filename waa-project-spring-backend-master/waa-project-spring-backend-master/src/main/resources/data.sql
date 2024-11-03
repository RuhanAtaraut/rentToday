-- Ensure the database is selected
USE real2;

# -- Insert users
# INSERT INTO users (id, email, status, password) VALUES (91, 'ruhanhere1@gmail.com', 'STATUS_APPROVED', '$2y$10$dJ0kZtFHRVL7K93o.39H3OPDHoroQMRs/0mlmocRtnRTe4lK2n8T2');
# INSERT INTO users (id, email, status, password) VALUES (92, 'ruhan7863@gmail.com', 'STATUS_APPROVED', '$2y$10$dJ0kZtFHRVL7K93o.39H3OPDHoroQMRs/0mlmocRtnRTe4lK2n8T2');
# INSERT INTO users (id, email, status, password) VALUES (93, 'virtualruhan@gmail.com', 'STATUS_APPROVED', '$2y$10$dJ0kZtFHRVL7K93o.39H3OPDHoroQMRs/0mlmocRtnRTe4lK2n8T2');
# INSERT INTO users (id, email, status, password) VALUES (94, 'john', 'STATUS_APPROVED', '$2a$10$A97KJPG9ZCW8Gc.BWP8lbOQ2L0eOYO51BpOqtFmq8QnZ/PT.j1Spm');
# INSERT INTO users (id, email, status, password) VALUES (95, 'jane', 'STATUS_APPROVED', '$2a$10$A97KJPG9ZCW8Gc.BWP8lbOQ2L0eOYO51BpOqtFmq8QnZ/PT.j1Spm');
#
# -- Insert roles
# INSERT INTO roles (id, roletype) VALUES (91, 'ADMIN');
# INSERT INTO roles (id, roletype) VALUES (92, 'OWNER');
# INSERT INTO roles (id, roletype) VALUES (93, 'CUSTOMER');
#
# -- Insert users_roles
# INSERT INTO users_roles (user_id, role_id) VALUES (91, 91);
# INSERT INTO users_roles (user_id, role_id) VALUES (91, 92);
# INSERT INTO users_roles (user_id, role_id) VALUES (91, 93);
# INSERT INTO users_roles (user_id, role_id) VALUES (92, 92);
# INSERT INTO users_roles (user_id, role_id) VALUES (93, 93);
# INSERT INTO users_roles (user_id, role_id) VALUES (94, 92);
# INSERT INTO users_roles (user_id, role_id) VALUES (95, 93);
#
# -- Insert properties
# INSERT INTO properties (id, slug, status, name, description, price, owner_id)
# VALUES (91, 'property-first', 'STATUS_AVAILABLE', 'MAJESTIC House', 'Majestic Home in Goa with a Blend of Luxury and Tradition', 100000, 91);
# INSERT INTO properties (id, slug, status, name, description, price, owner_id)
# VALUES (92, 'property-two', 'STATUS_AVAILABLE', 'BEACH HOUSE', 'Exquisite Haveli-Style Residence by the Serene Beaches of Kerala', 300000, 92);
# INSERT INTO properties (id, slug, status, name, description, price, owner_id)
# VALUES (93, 'property-three', 'STATUS_AVAILABLE', 'Bangalore Bungalow', 'Opulent Bungalow in the Heart of Bangalore, Blending Elegance and Comfort', 250000, 92);
#
# -- Insert offers
# INSERT INTO offers (id, message, price, customer_id, status, property_id)
# VALUES(91, 'Hey this is my offer', 5000000.00, 91, 'STATUS_NEW', 91);
# INSERT INTO offers (id, message, price, customer_id, status, property_id)
# VALUES(92, 'Hey this is Last offer', 58373000.00, 92, 'STATUS_NEW', 92);
# INSERT INTO offers (id, message, price, customer_id, status, property_id)
# VALUES(93, 'Here is the offer', 746258984.00, 93, 'STATUS_NEW', 93);
#
# -- Insert message_session
# INSERT INTO message_session(user_one_id, user_two_id) VALUES (92, 93);
#
# -- Insert message
# INSERT INTO message (message, message_session_id, created_by_id, created_at) VALUES ('hi', 1, 93, '2024-02-04');
# INSERT INTO message (message, message_session_id, created_by_id, created_at) VALUES ('hello', 1, 92, '2024-02-04');
# INSERT INTO message (message, message_session_id, created_by_id, created_at) VALUES ('How are you?', 1, 92, '2024-02-04');
# INSERT INTO message (message, message_session_id, created_by_id, created_at) VALUES ('I am Good', 1, 93, '2024-02-04');
