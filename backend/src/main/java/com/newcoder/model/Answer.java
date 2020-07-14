package com.newcoder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.Duration;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "answers")
public class Answer extends AuditModel {
    /**
	 *
	 */
	private static final long serialVersionUID = -1236098405245037831L;

	@Id
    @GeneratedValue(generator = "answer_generator")
    @SequenceGenerator(
            name = "answer_generator",
            sequenceName = "answer_sequence",
            initialValue = 100
    )
    private long id;

    @NotBlank
    private Duration duration;

    @NotBlank
    @Lob
    private String content;

    @Lob
    private String note;

    @OneToMany(mappedBy = "answer", fetch = FetchType.LAZY)
    private Set<Tag> tags = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "question_id", nullable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Question question;

    @Enumerated(EnumType.STRING)
    private Language language;

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Answer answer = (Answer) o;
        return duration.equals(answer.duration) &&
                content.equals(answer.content) &&
                Objects.equals(note, answer.note) &&
                Objects.equals(tags, answer.tags) &&
                Objects.equals(question, answer.question) &&
                language == answer.language;
    }

    @Override
    public int hashCode() {
        return Objects.hash(duration, content, note, tags, question, language);
    }
}
