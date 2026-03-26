package com.lifeinsurance.core.service;

import com.lifeinsurance.core.model.UserMaster;
import com.lifeinsurance.core.repository.UserMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserMasterService {

    @Autowired
    private UserMasterRepository userRepository;

    public List<UserMaster> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserMaster> getUserById(String id) {
        return userRepository.findById(id);
    }

    public UserMaster createUser(UserMaster user) {
        return userRepository.save(user);
    }

    public UserMaster updateUser(String id, UserMaster userDetails) {
        UserMaster user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
        
        user.setUserName(userDetails.getUserName());
        user.setUserPassword(userDetails.getUserPassword() != null ? userDetails.getUserPassword() : user.getUserPassword());
        user.setUserRole(userDetails.getUserRole());
        user.setUserDept(userDetails.getUserDept());
        user.setModifiedUser(userDetails.getModifiedUser());
        
        return userRepository.save(user);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
