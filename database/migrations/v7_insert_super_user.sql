-- V7: Insert super user (kins_user)
INSERT INTO USER_MASTER (user_id, user_name, user_password, user_role, user_dept, created_user)
VALUES ('kins_user', 'Antigravity Super Admin', 'kins_user', 'ADMIN', 'SYSTEM', 'SYSTEM');

COMMIT;
