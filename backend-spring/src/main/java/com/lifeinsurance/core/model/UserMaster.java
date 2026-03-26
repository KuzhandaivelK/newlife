package com.lifeinsurance.core.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "USER_MASTER")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserMaster {

    @Id
    @Column(name = "user_id", length = 50)
    private String userId;

    @Column(name = "user_name", nullable = false, length = 100)
    private String userName;

    @Column(name = "user_password", nullable = false, length = 255)
    private String userPassword;

    @Builder.Default
    @Column(name = "user_role", length = 20)
    private String userRole = "USER";

    @Column(name = "user_dept", length = 50)
    private String userDept;

    @Column(name = "created_date", updatable = false)
    private LocalDateTime createdDate;

    @Column(name = "created_user", length = 50, updatable = false)
    private String createdUser;

    @Column(name = "modified_date")
    private LocalDateTime modifiedDate;

    @Column(name = "modified_user", length = 50)
    private String modifiedUser;

    @PrePersist
    protected void onCreate() {
        createdDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        modifiedDate = LocalDateTime.now();
    }
}
