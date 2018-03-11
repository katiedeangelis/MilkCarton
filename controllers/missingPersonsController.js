const db = require("../models");
// Defining methods for the missingPersonsController
module.exports = {

  missingPersonsSearch: function (req, res) {

    if ((req.params.firstName !== null) && (req.params.lastName !== null)) {
      db.People.findAll({
        where: {
          firstName: req.params.firstName,
          lastName: req.params.lastName
        },
        include: [db.Images, db.Sightings]
      }).then(function (data, err) {
        if (err) {
          console.log(err);
          res.status(500).end();
        } else if (data[0]) {
          console.log("data is returned");

          for (var i = 0; i < data.length; i++) {
            searchResults = {
              firstName: data[i].firstName,
              lastName: data[i].lastName,
              city: data[i].city,
              state: data[i].state,
              circumstances: data[i].circumstances,
              race: data[i].race,
              ethnicity: data[i].ethnicity,
              sex: data[i].sex,
              height: data[i].height,
              weight: data[i].weight
            }
          }
        }
      });
    } else {
      Sightings.findAll({
        where: {
          city: req.params.city,
          state: req.params.state
        },
        include: [db.Person, db.Images]
      }).then(function (data, err) {
        if (err) {
          console.log(err);
          res.status(500).end();
        } else if (data[0]) {
          console.log("data is returned");
          for (var i = 0; i < data.length; i++) {
            searchResults = {
              firstName: data[i].firstName,
              lastName: data[i].lastName,
              city: data[i].city,
              state: data[i].state,
              circumstances: data[i].circumstances,
              race: data[i].race,
              ethnicity: data[i].ethnicity,
              sex: data[i].sex,
              height: data[i].height,
              weight: data[i].weight
            }
          }
        }
      })
      // .find(req.query)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
    }
  },



  // findById: function (req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  logSighting: function (req, res) {
    db.Sightings
      .create({
        caseNumber: req.body.caseNumber,
        city: req.body.caseNumber,
        state: req.body.state
      }).then(function (data, err) {
        if (data) {
          console.log(data);
          res.status(200).end();
        } else if (err) {
          // If an error occurred, send a generic server failure
          console.log(err);
          res.status(500).end();
        }
      })
  }
};

// .then(dbModel => res.json(dbModel))
// .catch(err => res.status(422).json(err));



// update: function (req, res) {
//   db.Book
//     .findOneAndUpdate({
//       _id: req.params.id
//     }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// remove: function (req, res) {
//   db.Book
//     .findById({
//       _id: req.params.id
//     })
//     .then(dbModel => dbModel.remove())
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }