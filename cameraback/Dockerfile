FROM maven:3.9.1-eclipse-temurin-11-alpine
WORKDIR /app
COPY ./cameraback-api ./cameraback-api
COPY ./cameraback-boot ./cameraback-boot
COPY ./cameraback-model ./cameraback-model
COPY ./cameraback-ws ./cameraback-ws
COPY pom.xml .
EXPOSE 33333
RUN mvn install
WORKDIR /app/cameraback-boot
CMD mvn spring-boot:run