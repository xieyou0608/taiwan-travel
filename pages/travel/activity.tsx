import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Activity } from "../../interfaces";
import { Heading, Grid, GridItem, Flex, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import ActivityCard from "../../components/travel/ActivityCard";

interface Props {
  activities: Activity[];
}

const ActivitysPage = ({ activities }: Props) => {
  return (
    <Flex direction="column" align="center" p={6}>
      <Heading as="h1" mb={5}>
        活動
      </Heading>
      <Flex direction="column" gap={6} w="80%">
        {activities.map((activity, idx) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://www.travel.taipei/open-api/zh-tw/Events/Activity?page=1",
    {
      headers: { accept: "application/json" },
    }
  );
  const resData = await res.json();
  console.log(resData);
  const activities: Activity[] = resData.data;
  return {
    props: {
      activities,
    },
  };
};

export default ActivitysPage;
