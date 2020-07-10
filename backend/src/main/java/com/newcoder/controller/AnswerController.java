package com.newcoder.controller;

import com.newcoder.model.Answer;
import com.newcoder.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AnswerController {
    @Autowired
    private AnswerService answerService;

    @GetMapping("/api/questions/{questionId}/answers")
    public Page<Answer> getAnswersByQuestionId(Pageable pageable, 
                                                @PathVariable Long questionId) {
        return answerService.getAnswersByQuestionId(pageable, questionId);
    }

    @PostMapping("/api/questions/{questionId}/answers")
    public Answer addAnswer(@PathVariable Long questionId,
                            @Valid @RequestBody Answer answer) {
        return answerService.addAnswer(questionId, answer);
    }

    @PutMapping("/api/questions/{questionId}/answers/{answerId}")
    public Answer updateAnswer(@PathVariable Long questionId,
                               @PathVariable Long answerId,
                               @Valid @RequestBody Answer answerRequest) {
        return answerService.updateAnswer(questionId, answerId, answerRequest);
    }

    @DeleteMapping("/api/questions/{questionId}/answers/{answerId}")
    public ResponseEntity<?> deleteAnswer(@PathVariable Long questionId,
                                          @PathVariable Long answerId) {
        return answerService.deleteAnswer(questionId, answerId);
    }
}
