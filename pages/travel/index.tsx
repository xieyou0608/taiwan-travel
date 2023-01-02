import React from "react";
import { GetStaticProps } from "next";
import { Attraction, AttractionCategories } from "../../interfaces";
import AttractionCard from "../../components/travel/AttractionCard";
import { Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import CategorySelector from "../../components/travel/CategorySelector";

interface Props {
  attractions: Attraction[];
  categories: AttractionCategories;
}

const TravelPage = ({ attractions, categories }: Props) => {
  return (
    <Flex direction="column" align="center" p={6}>
      <Heading as="h1" mb={5}>
        旅遊景點
      </Heading>
      <Flex my={3}>
        <CategorySelector categories={categories} />
      </Flex>
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        {attractions &&
          attractions.map((attraction) => (
            <GridItem key={attraction.id}>
              <AttractionCard attraction={attraction} />
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const attractionsRes = await fetch(
    "https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1",
    {
      headers: { accept: "application/json" },
    }
  );
  const attractionsData = await attractionsRes.json();
  const attractions: Attraction[] = attractionsData.data;

  const categoryRes = await fetch(
    "https://www.travel.taipei/open-api/zh-tw/Miscellaneous/Categories?type=Attractions",
    {
      headers: { accept: "application/json" },
    }
  );
  const categoryData = await categoryRes.json();
  console.log(categoryData);
  const categories: AttractionCategories = categoryData.data.Category;

  return {
    props: {
      attractions,
      categories,
    },
  };
};

export default TravelPage;
