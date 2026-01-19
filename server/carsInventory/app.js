/*jshint esversion: 8 */

const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect("mongodb://mongo_db:27017/",{'dbName':'dealershipsDB'});

const cars_data = JSON.parse(fs.readFileSync("car_records.json", 'utf8'));