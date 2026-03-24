package com.lifeinsurance.core.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/policy")
public class PolicyController {

    @GetMapping("/{policyNumber}")
    public Map<String, Object> getPolicyDetails(@PathVariable String policyNumber) {
        // Core business logic to retrieve policy from Oracle DB via Repository
        return Collections.singletonMap("policyNumber", policyNumber);
    }
}
