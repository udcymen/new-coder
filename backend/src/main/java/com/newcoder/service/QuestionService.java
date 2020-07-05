package com.newcoder.service;

import com.newcoder.controller.QuestionController;
import com.newcoder.exception.ResourceNotFoundException;
import com.newcoder.model.Question;
import com.newcoder.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Page<Question> getQuestions(Pageable pageable, String title) {
        return (title == null || title.isBlank())
                ? questionRepository.findAll(pageable)
                : questionRepository.findByTitleContainingIgnoreCase(pageable, title.toLowerCase().trim());
    }

    public Optional<Question> getQuestionById(long questionId) {
        return questionRepository.findById(questionId);
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question updateQuestion(long questionId, Question questionRequest) {
        return questionRepository.findById(questionId)
                .map(question -> {
                    question.setDescription(questionRequest.getDescription());
                    question.setTitle(questionRequest.getTitle());
                    question.setTags(questionRequest.getTags());
                    return questionRepository.save(question);
                }).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
    }

    public ResponseEntity<?> deleteQuestion(long questionId) {
        return questionRepository.findById(questionId)
                .map(question -> {
                    questionRepository.delete(question);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
    }


}
