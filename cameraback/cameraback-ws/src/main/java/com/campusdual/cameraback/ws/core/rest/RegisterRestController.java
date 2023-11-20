package com.campusdual.cameraback.ws.core.rest;


import com.campusdual.cameraback.api.core.service.IRegisterService;
import com.campusdual.cameraback.api.core.service.IUserService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/register")
public class RegisterRestController extends ORestController<IRegisterService> {

	@Autowired
	private IRegisterService registerSrv;

	@Override
	public IRegisterService getService() {
		return this.registerSrv;
	}


}
