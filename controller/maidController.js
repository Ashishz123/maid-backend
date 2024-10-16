const Maid = require("../models/maid");

// Get all maids
exports.getMaids = async (req, res) => {
  try {
    const maids = await Maid.find().populate("reviews");
    res.json(maids);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Add new maid
exports.addMaid = async (req, res) => {
  const { name, service, location } = req.body;
  try {
    const maid = new Maid({ name, service, location });
    await maid.save();
    res.status(201).json(maid);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Update maid
exports.updateMaid = async (req, res) => {
  const { id } = req.params;
  const { name, service, location, availability } = req.body;
  try {
    let maid = await Maid.findById(id);
    if (!maid) {
      return res.status(404).json({ msg: "Maid not found" });
    }
    maid = await Maid.findByIdAndUpdate(
      id,
      { name, service, location, availability },
      { new: true }
    );
    res.json(maid);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Delete maid
exports.deleteMaid = async (req, res) => {
  const { id } = req.params;
  try {
    const maid = await Maid.findById(id);
    if (!maid) {
      return res.status(404).json({ msg: "Maid not found" });
    }
    await Maid.findByIdAndDelete(id);
    res.json({ msg: "Maid deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
