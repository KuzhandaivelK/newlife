-- V3: Add audit columns to POLICY table
ALTER TABLE POLICY ADD (
    CREATED_BY VARCHAR2(50),
    MODIFIED_BY VARCHAR2(50),
    CREATED_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    MODIFIED_DATE TIMESTAMP
);

-- Note: In V1 we had CREATED_AT and UPDATED_AT. 
-- We can keep them for technical logs or migrate data if needed.
-- Here we are adding the exactly requested column names.
