package com.lifeinsurance.core.service;

import com.lifeinsurance.core.model.CommonCode;
import com.lifeinsurance.core.repository.CommonCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommonCodeService {

    @Autowired
    private CommonCodeRepository commonCodeRepository;

    public List<CommonCode> getCodesByType(String type) {
        return commonCodeRepository.findByCcTypeAndCcShowYn(type, 1);
    }
}
