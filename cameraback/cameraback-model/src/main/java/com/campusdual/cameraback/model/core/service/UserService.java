package com.campusdual.cameraback.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResultMapImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.campusdual.cameraback.api.core.service.IUserService;
import com.campusdual.cameraback.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult myUserQuery(Map<String, Object> keyMap, List<String> attrList) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put(UserDao.ID, authentication.getName());
		return this.daoHelper.query(userDao, keyMap, attrList);
	}
	public EntityResult myUserUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(keyMap.get(userDao.ID).equals(authentication.getName())) {
			return this.daoHelper.update(userDao, attrMap, keyMap);
		} else{
			EntityResult result = new EntityResultMapImpl();
			result.setCode(EntityResult.OPERATION_WRONG);
			result.setMessage("ERROR");
			return result;
		}

	}

	public EntityResult userInsert(Map<?, ?> attrMap) {

		return this.daoHelper.insert(userDao, attrMap);
	}

	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}

}
