# Build Stage
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY server-side/react-springboot-dashboard .
RUN mvn clean package -DskipTests

# Final Stage
FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar react-springboot-dashboard.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "react-springboot-dashboard.jar"]