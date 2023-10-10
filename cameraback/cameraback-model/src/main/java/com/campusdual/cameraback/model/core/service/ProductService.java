package com.campusdual.cameraback.model.core.service;

import com.campusdual.cameraback.api.core.service.IProductService;
import com.campusdual.cameraback.model.core.dao.ProductDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("ProductService")
public class ProductService implements IProductService {
    @Autowired
    private ProductDao productDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Override
    public EntityResult productQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(productDao, keyMap, attrList);
    }

    @Override
    public EntityResult productInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(productDao, attrMap);
    }

    @Override
    public EntityResult productUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(productDao, attrMap, keyMap);
    }

    @Override
    public EntityResult productDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.productDao, keyMap);
    }
}
