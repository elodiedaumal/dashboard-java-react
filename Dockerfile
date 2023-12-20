FROM maven:3.8.5-openjdk-17 AS build
COPY server-side/react-springboot-dashboard .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/java-project-0.0.1-SNAPSHOT.jar react-springboot-dashboard.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","java-project.jar"]