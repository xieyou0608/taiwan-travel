import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { News } from "../interfaces";
import Image from "next/image";

import Link from "next/link";

type Props = { news: News };

const NewsCard = ({ news }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        {/* need to change to Image  */}
        <img src={news.urlToImage} alt={news.title} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{news.title}</Heading>
          <Text>{news.description}</Text>
          {/* <Text color="blue.600" fontSize="2xl">
            $450
          </Text> */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" as={Link} href="/">
            詳細
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            as="a"
            href={news.url}
            target="_blank"
            rel="noreferrer noopenner"
          >
            新聞連結
          </Button>
        </ButtonGroup>
        {/* <ExternalLinkIcon mx="2px" /> */}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
