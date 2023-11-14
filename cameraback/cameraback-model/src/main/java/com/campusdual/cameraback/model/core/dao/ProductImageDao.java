package com.campusdual.cameraback.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ProductImageDao")
@ConfigurationFile(
        configurationFile = "dao/ProductImageDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ProductImageDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "tproducts_id_product";
    public static final String IMG1 = "img1";
    public static final String IMG2 = "img2";
    public static final String IMG3 = "img3";
    public static final String IMG4 = "img4";


}