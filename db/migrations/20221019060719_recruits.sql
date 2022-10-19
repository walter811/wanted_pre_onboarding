-- migrate:up
CREATE TABLE recruits(
    id INT NOT NULL AUTO_INCREMENT,
    company_name VARCHAR(100) NOT NULL,
    nation VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    reward INT NOT NULL,
    content VARCHAR(2000) NOT NULL,
    skill VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE recruits;
