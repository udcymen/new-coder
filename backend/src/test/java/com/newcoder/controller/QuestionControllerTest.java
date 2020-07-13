package com.newcoder.controller;

import com.newcoder.model.Question;
import com.newcoder.service.QuestionService;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.assertj.core.api.Assertions;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import org.mockito.Mockito;

import java.util.HashSet;
import java.util.List;

/**
 * {@link QuestionController}
 */
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class QuestionControllerTest {
    private static final String ROOT_URL = "http://localhost:";

    @LocalServerPort
    private int port;

    @Autowired
    private QuestionController questionController;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @Test
    public void contextLoads() throws Exception {
        Assertions.assertThat(questionController).isNotNull();
    }

    @Test
    public void whenGetQuestionsWithoutTitle_returnAllQuestions() throws Exception {
        long nextQuestionId = 1L;

        List<Question> questions = List.of(
                new Question(nextQuestionId++, "title_1", "description_1", new HashSet<>()),
                new Question(nextQuestionId++, "title_2", "description_2", new HashSet<>()),
                new Question(nextQuestionId++, "title_3", "description_3", new HashSet<>())
        );

        Mockito.when(questionService.getQuestions(PageRequest.of(0, 20), null))
                .thenReturn(new PageImpl<>(questions));
        this.mockMvc
                .perform(get(ROOT_URL + port + QuestionController.GET_QUESTIONS_ROUTE))
                .andDo(print())
                .andExpect(status().isOk());
    }
}
