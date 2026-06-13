// routes/recommendations.js

const express = require("express");
const router = express.Router();

const { getRecommendations } = require("../services/recommendationService");

router.get("/:productName", async (req, res) => {
  try {
    const result = await getRecommendations(req.params.productName);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Recommendation failed",
    });
  }
});

module.exports = router;
