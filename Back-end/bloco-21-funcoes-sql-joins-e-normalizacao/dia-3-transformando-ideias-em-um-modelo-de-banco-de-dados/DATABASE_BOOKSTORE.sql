-- Active: 1668632984497@@localhost@3306@livraria

CREATE DATABASE IF NOT EXISTS livraria;

USE livraria;

CREATE TABLE pessoa_autora(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(25) NOT NULL
);

CREATE TABLE categoria(
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL
);

CREATE TABLE livro(
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  ano VARCHAR(4) NOT NULL,
  id_pessoa_autora INT,
  id_categoria INT,
  FOREIGN KEY (id_pessoa_autora) REFERENCES pessoa_autora(id),
  FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

CREATE TABLE cliente(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  data_nascimento DATETIME
);

CREATE TABLE livro_has_client(
  id_livro INT,
  id_categoria INT,
  PRIMARY KEY(id_livro, id_categoria),
  FOREIGN KEY (id_livro) REFERENCES livro(id),
  FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);