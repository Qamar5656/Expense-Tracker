import express from "express";

export const getUsers = (req, res) => {
  res.send("user data ");
};

export const createUser = (req, res) => {
  res.send("create user");
};
