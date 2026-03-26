package com.lifeinsurance.core.repository;

import com.lifeinsurance.core.model.CommonCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommonCodeRepository extends JpaRepository<CommonCode, Long> {
    List<CommonCode> findByCcTypeAndCcShowYn(String ccType, Integer ccShowYn);
}
