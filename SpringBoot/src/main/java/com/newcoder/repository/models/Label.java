package com.newcoder.repository.models;

import javax.persistence.*;

@Entity
@Table(name = "labels")
public class Label extends AduitModel {
    @Id
    @GeneratedValue(generator = "label_generator")
    @SequenceGenerator(
            name = "label_generator",
            sequenceName = "label_sequence",
            initialValue = 100
    )
    private long id;

    @Column(nullable = false, updatable = false)
    private String name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
