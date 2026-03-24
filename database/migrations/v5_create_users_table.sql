-- V5: Create USER_MASTER table for authentication
CREATE TABLE USER_MASTER (
    user_id VARCHAR2(50) PRIMARY KEY,
    user_name VARCHAR2(100) NOT NULL,
    user_password VARCHAR2(255) NOT NULL,
    user_role VARCHAR2(20) DEFAULT 'USER',
    created_date DATE DEFAULT SYSDATE,
    created_user VARCHAR2(50),
    modified_date DATE,
    modified_user VARCHAR2(50)
);

-- Index for searching users by name
CREATE INDEX IDX_USER_NAME ON USER_MASTER(user_name);
