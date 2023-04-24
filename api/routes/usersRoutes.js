const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/income-bmw-mercedes-lower-5usd", async (req, res) => {
  try {
    const users = await User.find({
      income: { $lt: "$5" },
      car: { $in: ["BMW", "Mercedes"] },
    });

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get('/male-phone-price-greater-10000', async (req, res) => {
    try {
      const users = await User.find({ gender: 'Male', phone_price: { $gt: 10000 } });
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.get('/last-name-quote-email', async (req, res) => {
 
    try {
        const users = await User.aggregate([
          {
            $match: {
              last_name: /^M/i,
              quote: {
                $regex: /^.{16,}/
              },
            }
          }
        ]);

        const filterd_users=users.filter(user => user.email.toLowerCase().includes(user.last_name.toLowerCase()));
        res.json(filterd_users);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
});


router.get('/car-email', async (req, res) => {
    try {
      const users = await User.find({
        car: { $in: ['BMW', 'Mercedes-Benz', 'Audi'] },
        email: { $not: /\d/ }
      });
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  

router.get('/top-10-cities', async (req, res) => {
    try {
      const result = await User.aggregate([
        {
          $addFields: {
            incomeWithoutDollar: {
              $toDouble: {
                $substr: [
                  "$income",
                  1,
                  { $strLenCP: "$income" }
                ]
              }
            }
          }
        },
        {
          $group: {
            _id: "$city",
            count: { $sum: 1 },
            total_income: { $sum: "$incomeWithoutDollar" }
          }
        },
        {
          $project: {
            _id: 0,
            city: "$_id",
            count: 1,
            avg_income: { $divide: ["$total_income", "$count"] }
          }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 10
        }
      ]);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
  
  

module.exports = router;


