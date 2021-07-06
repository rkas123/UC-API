import axios from "axios";
import Contest from "../models/contest.js";

const fetch = async () => {
  console.log("fetching");
  const date = new Date().toLocaleDateString();
  const datebreak = date.split("/");
  const time = new Date().toLocaleTimeString();
  const dat = time.split(" ");
  const url = `https://clist.by/api/v1/contest/?username=${process.env.usename}&api_key=${process.env.api_key}&start__gte=${datebreak[2]}-${datebreak[0]}-${datebreak[1]}T${dat[0]}&limit=100&order_by=start`;
  try {
    const data = await axios.get(url);
    const newDat = await Promise.all(
      data.data.objects.map(async (contest) => {
        try {
          const newContest = await new Contest({
            name: contest.event,
            resourceId: contest.resource.id,
            start: Date.parse(contest.start),
            end: Date.parse(contest.end),
            duration: contest.duration * 1000,
            link: contest.href,
          });
          const temp = newContest;
          return temp;
        } catch (error) {
          console.log(error);
        }
      })
    );
    await Contest.deleteMany({});
    setTimeout(() => {
      console.log("waiting");
    }, 6000);
    await Contest.insertMany(newDat);
  } catch (error) {
    console.log(error);
  }
  isFetchPossible = "Yes";
};

export default fetch;
