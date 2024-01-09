import React from "react";
import { Progress } from "@chakra-ui/react";
const Smallsteppers = ({ value }) => {
  return <Progress value={value} hasStripe size="xs" colorScheme="yellow" />;
};

export default Smallsteppers;
