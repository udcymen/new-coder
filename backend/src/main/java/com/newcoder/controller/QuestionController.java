package com.newcoder.controller;

import com.newcoder.model.Question;
import com.newcoder.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class QuestionController {
    protected static final String GET_QUESTIONS_ROUTE = "/api/questions";

    @Autowired
    private QuestionService questionService;

    @GetMapping(GET_QUESTIONS_ROUTE)
    public Page<Question> getQuestions(Pageable pageable, String title) {
        return questionService.getQuestions(pageable, title);
    }

    @GetMapping("/api/questions/{questionId}")
    public Optional<Question> getQuestionById(@PathVariable long questionId) {
        return questionService.getQuestionById(questionId);
    }

    @PostMapping("/api/questions")
    public Question createQuestion(@Valid @RequestBody Question question) {
        return questionService.createQuestion(question);
    }

    @PutMapping("/api/questions/{questionId}")
    public Question updateQuestion(@PathVariable long questionId,
                                   @Valid @RequestBody Question questionRequest) {
        return questionService.updateQuestion(questionId, questionRequest);
    }

    @DeleteMapping("/api/questions/{questionId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable long questionId) {
        return questionService.deleteQuestion(questionId);
    }
}
