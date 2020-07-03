package com.newcoder.controller;

import com.newcoder.exception.ResourceNotFoundException;
import com.newcoder.model.Question;
import com.newcoder.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/questions")
    public Page<Question> getQuestions(Pageable pageable, String title){
        if (title.isBlank()){
            return questionRepository.findAll(pageable);
        }

        return questionRepository.findByTitleContainingIgnoreCase(pageable, title.toLowerCase().trim());
    }

    @PostMapping("/questions")
    public Question createQuestion(@Valid @RequestBody Question question){
        return questionRepository.save(question);
    }

    @PutMapping("/questions/{questionId}")
    public Question updateQuestion(@PathVariable long questionId,
                                   @Valid @RequestBody Question questionRequest){
        return questionRepository.findById(questionId)
                .map(question -> {
                    question.setDescription(questionRequest.getDescription());
                    question.setTitle(questionRequest.getTitle());
                    return questionRepository.save(question);
                }).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
    }

    @DeleteMapping("questions/{questionId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable long questionId){
        return questionRepository.findById(questionId)
                .map(question -> {
                    questionRepository.delete(question);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
    }
}
