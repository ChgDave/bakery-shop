const db = require("../config/connection");
const { Profile, BakeryItem } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const bakeryItemSeeds = require("./bakeryItemSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Profile", "profiles");
    await cleanDB("BakeryItem", "bakeryitems");

    await Profile.create(profileSeeds);
    await BakeryItem.create(bakeryItemSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
