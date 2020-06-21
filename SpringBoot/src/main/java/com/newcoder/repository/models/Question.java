package com.newcoder.repository.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "questions")
public class Question extends AduitModel {
    @Id
    @GeneratedValue(generator = "question_generator")
    @SequenceGenerator(
            name = "question_generator",
            sequenceName = "question_sequence",
            initialValue = 100
    )
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    @OneToMany
    private Set<Label> labels;

    @Column(name = "related_questions")
    @OneToMany
    private Set<Question> relatedQuestions;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Label> getLabels() {
        return labels;
    }

    public void setLabels(Set<Label> labels) {
        this.labels = labels;
    }

    public Set<Question> getRelatedQuestions() {
        return relatedQuestions;
    }

    public void setRelatedQuestions(Set<Question> relatedQuestions) {
        this.relatedQuestions = relatedQuestions;
    }
}
