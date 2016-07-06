var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');


router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query('SELECT * FROM company ' +
                     'WHERE active = true ' +
                     'ORDER BY id ASC',
         function(err, result) {"SELECT applicant_id, date, test_pass," + "first_name||' +  ' || last_name AS fullname," +
         "job.title, company.name AS company_name, staff.name AS trainer_name" + "FROM assessment" +
         "JOIN applicant ON assessment.applicant_id = applicant.id" +
         "JOIN job ON applicant.job_id = job.id" +
         "JOIN company ON job.company_id = company.id" +
         "JOIN staff ON assessment.staff_id = staff.id" +
         "WHERE first_name LIKE ('Kar%')" +
         "OR last_name LIKE ('Kar%');"
            if (err) {
                console.log(err,'Oops');
            }
            done();
            console.log(result);
            res.send(result.rows);
        });
    });
});

module.exports = router;