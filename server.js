//Dependencies

const fs = require("fs");
const path = require("path")
const express = require("express");

const app = express();

//Sets an initial port
const PORT = process.env.PORT || 8989;

//Sets up initial app to handle data parsing