package com.lifeinsurance.core.controller;

import com.lifeinsurance.core.model.CommonCode;
import com.lifeinsurance.core.service.CommonCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/common-codes")
public class CommonCodeController {

    @Autowired
    private CommonCodeService commonCodeService;

    @GetMapping("/{type}")
    public List<CommonCode> getCodesByType(@PathVariable String type) {
        return commonCodeService.getCodesByType(type);
    }
}
