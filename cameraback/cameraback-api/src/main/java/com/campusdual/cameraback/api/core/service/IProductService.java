package com.campusdual.cameraback.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IProductService {

    public EntityResult productQuery(Map<String, Object> keyMap, List<String> attrList);
    public EntityResult productInsert(Map<String, Object> attrMap);
    public EntityResult productUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    public EntityResult productDelete(Map<String, Object> keyMap);
    public EntityResult myProductQuery(Map<String, Object> keyMap, List<String> attrList);
    public EntityResult productStatusQuery(Map<String, Object> keyMap, List<String> attrList);
    public EntityResult productStatusInsert(Map<String, Object> attrMap);
    public EntityResult productStatusUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    public EntityResult productStatusDelete(Map<String, Object> keyMap);
}
