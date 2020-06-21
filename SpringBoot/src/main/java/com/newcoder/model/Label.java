package com.newcoder.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "labels")
public class Label extends AuditModel {
    @Id
    @GeneratedValue(generator = "label_generator")
    @SequenceGenerator(
            name = "label_generator",
            sequenceName = "label_sequence",
            initialValue = 100
    )
    private long id;

    @Column(updatable = false)
    @NotBlank
    @Size(max = 20)
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
