package com.campusdual.cameraback.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ProductRequestDao")
@ConfigurationFile(
        configurationFile = "dao/ProductRequestDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ProductRequestDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "id_prequest";
    public static final String START_DATE = "start_date";
    public static final String END_DATE = "end_date";
    public static final String ID_PRODUCT = "tproducts_id_product";
    public static final String STATE = "state";
    public static final String TEXT = "request_text";
    public static final String USER_ = "tuser_user_";

}