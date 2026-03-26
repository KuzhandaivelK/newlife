package com.lifeinsurance.core.service;

import com.lifeinsurance.core.model.UserMaster;
import com.lifeinsurance.core.repository.UserMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserMasterRepository userRepository;

    public Optional<UserMaster> authenticate(String userId, String password) {
        return userRepository.findById(userId)
                .filter(user -> user.getUserPassword().equals(password));
    }
}
