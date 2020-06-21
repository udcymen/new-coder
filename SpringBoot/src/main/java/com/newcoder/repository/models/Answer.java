package com.newcoder.repository.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.Duration;

@Entity
@Table(name = "answers")
public class Answer extends AduitModel {
    @Id
    @GeneratedValue(generator = "answer_generator")
    @SequenceGenerator(
            name = "answer_generator",
            sequenceName = "answer_sequence",
            initialValue = 100
    )
    private long id;

    @Column(nullable = false)
    private Duration duration;

    @Column(nullable = false, updatable = false)
    private int version;

    @Column(nullable = false)
    private String content;

    private String note;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
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
}
