import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      try {
        const newsApiResponse = await fetch(
          "https://newsapi.org/v2/top-headlines?country=tw&apiKey=" +
            process.env.NEWS_API_KEY
        );
        const data = await newsApiResponse.json();
        res.status(200).send(data);
      } catch (e) {
        throw new Error("Cannot find data, please try again.");
      }
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
