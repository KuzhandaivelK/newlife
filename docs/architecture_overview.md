# Life Insurance Core System - Architecture Overview

## Technology Stack
- **Frontend (Presentation Tier)**: React.js with TypeScript
- **Backend (Application Tier - Node.js)**: Node.js with TypeScript (for API gateway/BFF)
- **Backend (Application Tier - Spring)**: Java with Spring Boot (for core business logic/domain services)
- **Database (Data Tier)**: Oracle Database

## Folder Structure

### `frontend/`
Contains the React application. 
- `/src/api`: Service layer for handling API calls.
- `/src/components`: Reusable UI components.
- `/src/pages`: Main view components (Policy, Claims, Underwriting).
- `/src/store`: State management (Redux/Context API).

### `backend-node/`
Used as a Backend for Frontend (BFF) or light services.
- `/src/controllers`: Request handling and routing.
- `/src/services`: Integration logic and data transformation.
- `/src/models`: Type definitions for incoming/outgoing data.

### `backend-spring/`
Core domain services for the Life Insurance system.
- `/src/main/java/com/lifeinsurance/core/model`: JPA Entities mapping to Oracle DB.
- `/src/main/java/com/lifeinsurance/core/service`: Core business logic (Policy lifecycle, etc.).
- `/src/main/java/com/lifeinsurance/core/repository`: Persistence layer interfaces.

### `database/`
Oracle SQL scripts.
- `/migrations`: DDL scripts for table creation and schema changes.
- `/procedures`: PL/SQL procedures for complex insurance calculations.
