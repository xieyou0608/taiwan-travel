import React from "react";
import { GetServerSideProps } from "next";
import { News } from "../../interfaces";
import NewsCard from "../../components/NewsCard";
import { Heading, Grid, GridItem, Flex } from "@chakra-ui/react";

interface Props {
  newsData: News[];
}

const news = ({ newsData }: Props) => {
  return (
    <Flex direction="column" align="center" p={6}>
      <Heading as="h1" mb={5}>
        台灣頭條新聞
      </Heading>
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        {newsData.map((newsData, idx) => (
          <GridItem>
            <NewsCard key={idx} news={newsData} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=tw&apiKey=" +
      process.env.NEWS_API_KEY
  );
  const data = await res.json();
  const newsData: News[] = data.articles;
  return {
    props: {
      newsData,
    },
  };
};

export default news;
