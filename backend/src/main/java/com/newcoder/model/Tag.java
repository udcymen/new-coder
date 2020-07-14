package com.newcoder.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = "tags")
public class Tag extends AuditModel {
    /**
	 *
	 */
	private static final long serialVersionUID = -6948882110532829978L;

	@Id
    @GeneratedValue(generator = "tag_generator")
    @SequenceGenerator(
            name = "tag_generator",
            sequenceName = "tag_sequence",
            initialValue = 100
    )
    private long id;

    @Column(updatable = false)
    @NotBlank
    @Size(max = 20)
    private String name;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tag tag = (Tag) o;
        return name.equals(tag.name) &&
                Objects.equals(answer, tag.answer) &&
                Objects.equals(question, tag.question);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, answer, question);
    }
    
}
