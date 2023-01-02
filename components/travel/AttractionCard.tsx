import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";
import { Attraction } from "../../interfaces";
import { BiLinkExternal } from "react-icons/bi";

type Props = { attraction: Attraction };

const AttractionCard = ({ attraction }: Props) => {
  let thumbnail = "";
  if (attraction.images && attraction.images.length > 0) {
    thumbnail = attraction.images[0].src;
  }

  const introduction = attraction.introduction.substring(0, 100) + "......";

  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{attraction.name}</Heading>
          {thumbnail ? <img src={thumbnail} alt="景點照片" /> : ""}
          <Text>{introduction}</Text>
        </Stack>
      </CardBody>
      <Divider />

      <CardFooter justify="end">
        <Button
          variant="solid"
          colorScheme="blue"
          as="a"
          href={attraction.url}
          target="_blank"
          rel="noreferrer noopenner"
        >
          景點資訊
          <Icon as={BiLinkExternal} mx="2px" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AttractionCard;
