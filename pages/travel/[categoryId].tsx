import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Attraction, AttractionCategories } from "../../interfaces";
import AttractionCard from "../../components/travel/AttractionCard";
import { Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import CategorySelector from "../../components/travel/CategorySelector";

interface Props {
  attractions: Attraction[];
  categories: AttractionCategories;
}

const CategorizedPage = ({ attractions, categories }: Props) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryRes = await fetch(
    "https://www.travel.taipei/open-api/zh-tw/Miscellaneous/Categories?type=Attractions",
    {
      headers: { accept: "application/json" },
    }
  );
  const categoryData = await categoryRes.json();
  const categories: AttractionCategories = categoryData.data.Category;

  return {
    paths: categories.map((category) => ({
      params: { categoryId: category.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryId = context.params.categoryId;
  const attractionsRes = await fetch(
    `https://www.travel.taipei/open-api/zh-tw/Attractions/All?categoryIds=${categoryId}&page=1`,
    {
      headers: { accept: "application/json" },
    }
  );
  const attractionsData = await attractionsRes.json();
  const attractions: Attraction[] = attractionsData.data;

  // 這段 code 會在 build 每一頁都跑，更好的做法應該是 getStaticPaths 後可以繼續用拿到的類別
  // Next 12 暫時沒有原生方式，解法是在 server cache 存 getStaticPaths 拿別的類別
  // 參考 https://github.com/vercel/next.js/discussions/11272
  const categoryRes = await fetch(
    "https://www.travel.taipei/open-api/zh-tw/Miscellaneous/Categories?type=Attractions",
    {
      headers: { accept: "application/json" },
    }
  );
  const categoryData = await categoryRes.json();
  const categories: AttractionCategories = categoryData.data.Category;

  return {
    props: {
      attractions,
      categories,
    },
  };
};

export default CategorizedPage;
