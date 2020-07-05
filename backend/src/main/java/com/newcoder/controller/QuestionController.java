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
    @Autowired
    private QuestionService questionService;

    @GetMapping("/questions")
    public Page<Question> getQuestions(Pageable pageable, String title) {
        return questionService.getQuestions(pageable, title);
    }

    @GetMapping("/questions/{questionId}")
    public Optional<Question> getQuestionById(@PathVariable long questionId) {
        return questionService.getQuestionById(questionId);
    }

    @PostMapping("/questions")
    public Question createQuestion(@Valid @RequestBody Question question) {
        return questionService.createQuestion(question);
    }

    @PutMapping("/questions/{questionId}")
    public Question updateQuestion(@PathVariable long questionId,
                                   @Valid @RequestBody Question questionRequest) {
        return questionService.updateQuestion(questionId, questionRequest);
    }

    @DeleteMapping("questions/{questionId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable long questionId) {
        return questionService.deleteQuestion(questionId);
    }
}
