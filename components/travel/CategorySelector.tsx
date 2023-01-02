import React, { useState } from "react";
import { AttractionCategories } from "../../interfaces";
import { Select } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  categories: AttractionCategories;
};

const CategorySelector = ({ categories }: Props) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push("/travel/" + e.target.value);
  };

  const router = useRouter();
  console.log(router.query.categoryId);
  return (
    <Select
      placeholder="類型"
      onChange={changeHandler}
      value={router.query.categoryId}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};

export default CategorySelector;
