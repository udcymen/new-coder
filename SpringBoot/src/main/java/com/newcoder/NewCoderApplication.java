package com.newcoder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NewCoderApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewCoderApplication.class, args);
	}

}
