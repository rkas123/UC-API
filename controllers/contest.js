//resource name
//start_lte,start_gte,end_lte,end_gte
//duration_lte,duration_gte
//limit
//pagenumber
//pagecount
import Contest from "../models/contest.js";

export const fetchall = async (req, res) => {
  if (isFetchPossible !== "Yes") {
    return res
      .status(503)
      .json({ type: 1, message: "Database Updating. Try again later" });
  }
  try {
    const data = await Contest.find();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const fetch = async (req, res) => {
  if (isFetchPossible !== "Yes") {
    return res
      .status(503)
      .json({ type: 1, message: "Database Updating. Try again later" });
  }
  try {
    const {
      pagenumber,
      itemsperpage,
      platforms,
      start_lte,
      start_gte,
      end_lte,
      end_gte,
      duration_lte,
      duration_gte,
    } = req.query;

    let query = [];

    if (platforms) {
      let plats = platforms.split(",");
      let intplat = plats.map((plat) => resourceToId.get(plat));
      query.push({ resourceId: { $in: intplat } });
    }
    if (start_lte) {
      let int_start_lte = parseInt(start_lte);
      query.push({ start: { $lte: int_start_lte } });
    }
    if (start_gte) {
      let int_start_gte = parseInt(start_gte);
      query.push({ start: { $gte: int_start_gte } });
    }
    if (end_lte) {
      let int_end_lte = parseInt(end_lte);
      query.push({ end: { $lte: int_end_lte } });
    }
    if (end_gte) {
      let int_end_gte = parseInt(end_gte);
      query.push({ end: { $gte: int_end_gte } });
    }
    if (duration_lte) {
      let int_duration_lte = parseInt(duration_lte);
      query.push({ duration: { $lte: int_duration_lte } });
    }
    if (duration_gte) {
      let int_duration_gte = parseInt(duration_gte);
      query.push({ duration: { $gte: int_duration_gte } });
    }
    try {
      let data;
      if (!pagenumber || !itemsperpage)
        data = await Contest.find({ $and: query });
      else
        data = await Contest.find({ $and: query })
          .skip((parseInt(pagenumber) - 1) * parseInt(itemsperpage))
          .limit(parseInt(itemsperpage));
      res.status(200).json({ data: data });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
