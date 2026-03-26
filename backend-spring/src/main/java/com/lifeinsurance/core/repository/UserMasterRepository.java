package com.lifeinsurance.core.repository;

import com.lifeinsurance.core.model.UserMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMasterRepository extends JpaRepository<UserMaster, String> {
    List<UserMaster> findByUserNameContainingIgnoreCase(String userName);
}
