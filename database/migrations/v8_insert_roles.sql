-- V8: Insert roles into COMMON_CODE
INSERT INTO COMMON_CODE (cc_type, cc_type_desc, cc_Code, cc_code_desc, cc_created_by)
VALUES ('USER_ROLE', 'Application User Roles', 'ADMIN', 'Administrator', 'SYSTEM');

INSERT INTO COMMON_CODE (cc_type, cc_type_desc, cc_Code, cc_code_desc, cc_created_by)
VALUES ('USER_ROLE', 'Application User Roles', 'AGENT', 'Insurance Agent', 'SYSTEM');

INSERT INTO COMMON_CODE (cc_type, cc_type_desc, cc_Code, cc_code_desc, cc_created_by)
VALUES ('USER_ROLE', 'Application User Roles', 'UNDERWRITER', 'Underwriter', 'SYSTEM');

INSERT INTO COMMON_CODE (cc_type, cc_type_desc, cc_Code, cc_code_desc, cc_created_by)
VALUES ('USER_ROLE', 'Application User Roles', 'CLAIMS_OFFICER', 'Claims Officer', 'SYSTEM');

COMMIT;
