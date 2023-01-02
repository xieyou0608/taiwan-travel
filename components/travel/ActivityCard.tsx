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
  Flex,
} from "@chakra-ui/react";
import { Activity } from "../../interfaces";
import { BiLinkExternal } from "react-icons/bi";

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const beginDate = new Date(activity.begin).toLocaleDateString();
  const endDate = new Date(activity.end).toLocaleDateString();
  const description = activity.description.substring(0, 300) + "......";
  return (
    <Card>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{activity.title}</Heading>
          <Text>
            活動時間 {beginDate} ~ {endDate}
          </Text>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <Flex justify={"center"} mt={5}>
        <Button
          variant="solid"
          colorScheme="blue"
          as="a"
          href={activity.url}
          target="_blank"
          rel="noreferrer noopenner"
          w="50%"
        >
          活動連結
          <Icon as={BiLinkExternal} mx="2px" />
        </Button>
      </Flex>
      {/* <ExternalLinkIcon mx="2px" /> */}
      <CardFooter justify={"center"}>
        <ButtonGroup spacing="2">
          {activity.links.map((link) => (
            <Button
              key={link.subject}
              variant="ghost"
              colorScheme="blue"
              as="a"
              href={link.src}
              target="_blank"
              rel="noreferrer noopenner"
            >
              {link.subject}
            </Button>
          ))}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
