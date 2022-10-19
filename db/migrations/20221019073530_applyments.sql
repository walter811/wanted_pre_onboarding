-- migrate:up
CREATE TABLE applyments(
    id INT NOT NULL AUTO_INCREMENT,
    recruit_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recruit_id) REFERENCES recruits (id)
);

-- migrate:down
DROP TABLE applyments
