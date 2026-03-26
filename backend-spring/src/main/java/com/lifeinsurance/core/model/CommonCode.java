package com.lifeinsurance.core.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "COMMON_CODE")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommonCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cc_id")
    private Long ccId;

    @Column(name = "cc_type", nullable = false, length = 50)
    private String ccType;

    @Column(name = "cc_type_desc", length = 200)
    private String ccTypeDesc;

    @Column(name = "cc_code", nullable = false, length = 50)
    private String ccCode;

    @Column(name = "cc_code_desc", length = 200)
    private String ccCodeDesc;

    @Builder.Default
    @Column(name = "cc_show_yn")
    private Integer ccShowYn = 1;

    @Column(name = "cc_value", length = 500)
    private String ccValue;

    @Column(name = "cc_created_date", updatable = false)
    private LocalDateTime ccCreatedDate;

    @Column(name = "cc_created_by", length = 50)
    private String ccCreatedBy;

    @Column(name = "cc_modified_date")
    private LocalDateTime ccModifiedDate;

    @Column(name = "cc_modified_by", length = 50)
    private String ccModifiedBy;

    @PrePersist
    protected void onCreate() {
        ccCreatedDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        ccModifiedDate = LocalDateTime.now();
    }
}
