package com.eventmanagement.myapp;

import com.eventmanagement.myapp.config.AsyncSyncConfiguration;
import com.eventmanagement.myapp.config.EmbeddedRedis;
import com.eventmanagement.myapp.config.EmbeddedSQL;
import com.eventmanagement.myapp.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { EventManagementApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedRedis
@EmbeddedSQL
public @interface IntegrationTest {
}
