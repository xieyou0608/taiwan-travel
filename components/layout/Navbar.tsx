import React from "react";
import { Flex, useColorMode, Switch, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex as="nav" pos="relative" top="0" justify="end" p={5} gap="8">
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
      <Link href="/travel">Travel</Link>
      <Link href="/travel/activity">Activity</Link>
      <Link href="/login">Login</Link>
      <Flex justify="center" gap="3" pt="1">
        <Icon as={BsSunFill} />
        <Switch onChange={toggleColorMode} isChecked={isDark} />
        <Icon as={BsFillMoonFill} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
