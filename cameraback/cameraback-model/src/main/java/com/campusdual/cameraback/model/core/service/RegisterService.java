package com.campusdual.cameraback.model.core.service;


import com.campusdual.cameraback.api.core.service.IRegisterService;
import com.campusdual.cameraback.api.core.service.IUserService;
import com.campusdual.cameraback.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.assertj.core.internal.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("RegisterService")
public class RegisterService implements IRegisterService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	@Override
	public EntityResult registerQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	@Override
	public EntityResult registerInsert(Map<String, Object> attrMap) {
		try{
			return this.daoHelper.insert(userDao, attrMap);
		}
		catch(Exception e) {
			EntityResult result = new EntityResultMapImpl();
			result.setCode(EntityResult.OPERATION_WRONG);
			result.setMessage("USER_ALREADY_EXIST");
			return result;
		}

	}
}
