package com.newcoder.service;

import com.newcoder.exception.ResourceNotFoundException;
import com.newcoder.model.Answer;
import com.newcoder.repository.AnswerRepository;
import com.newcoder.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public Page<Answer> getAnswersByQuestionId(Pageable pageable, Long questionId) {
        return answerRepository.findByQuestionId(pageable, questionId);
    }

    public Answer addAnswer(Long questionId, Answer answer) {
        return questionRepository.findById(questionId)
                .map(question -> {
                    answer.setQuestion(question);
                    return answerRepository.save(answer);
                }).orElseThrow(() -> new ResourceNotFoundException("Question not found with id " + questionId));
    }

    public Answer updateAnswer(Long questionId, Long answerId, Answer answerRequest) {
        if (!questionRepository.existsById(questionId)) {
            throw new ResourceNotFoundException("Question not found with id " + questionId);
        }

        return answerRepository.findById(answerId)
                .map(answer -> {
                    answer.setContent(answerRequest.getContent());
                    answer.setDuration(answerRequest.getDuration());
                    answer.setNote(answerRequest.getNote());
                    answer.setTags(answerRequest.getTags());
                    answer.setLanguage(answerRequest.getLanguage());
                    return answerRepository.save(answer);
                }).orElseThrow(() -> new ResourceNotFoundException("Answer not found with id " + answerId));
    }

    public ResponseEntity<?> deleteAnswer(Long questionId, Long answerId) {
        if (!questionRepository.existsById(questionId)) {
            throw new ResourceNotFoundException("Question not found with id " + questionId);
        }

        return answerRepository.findById(answerId)
                .map(answer -> {
                    answerRepository.delete(answer);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Answer not found with id " + answerId));
    }
}
