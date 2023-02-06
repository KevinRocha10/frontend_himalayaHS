import { Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";

import React from "react";

const CardBase = () => {
  return (
    <Card maxWidth="max-w-sm">
      <Text>Sales</Text>
      <Metric>$ 23,332</Metric>
      <Flex marginTop="mt-4">
        <Text>32% tarjeta anual</Text>
        <Text>$ 332,332</Text>
      </Flex>
      <ProgressBar percentageValue={32} marginTop="mt-2" />
    </Card>
  );
};

export default CardBase;
