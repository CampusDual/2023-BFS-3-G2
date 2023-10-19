package com.campusdual.cameraback.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IProductService {

    public EntityResult productQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult productInsert(Map<?, ?> attrMap);
    public EntityResult productUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    public EntityResult productDelete(Map<?, ?> keyMap);
    public EntityResult myProductQuery(Map<String, Object> keyMap, List<String> attrList);
}
