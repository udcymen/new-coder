FROM openjdk:12-jdk-alpine
VOLUME /tmp
COPY ./build/libs/newcoder-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]