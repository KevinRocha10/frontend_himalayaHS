import {
  BadgeDelta,
  Block,
  Card,
  ColGrid,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";

const data = [
  {
    title: "Almuerzos Vendidos",
    metric: "$12.000",
    progress: 15.9,
    target: "80,000",
    delta: "13,2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Almuerzos Consumidos",
    metric: "$22.000",
    progress: 36.2,
    target: "80,000",
    delta: "23,2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Loncheras Vendidas",
    metric: "$42.000",
    progress: 50.3,
    target: "80,000",
    delta: "43,2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Loncheras Consumidas",
    metric: "$42.000",
    progress: 50.3,
    target: "80,000",
    delta: "43,2%",
    deltaType: "moderateIncrease",
  },
];

const CardGridMap = () => {
  return (
    <ColGrid
      numColsMd={2}
      numColsLg={3}
      marginTop="mt-6"
      gapX="gap-x-6"
      gapY="gap-y-6"
    >
      {data.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="items-start">
            <Block>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
              <BadgeDelta text={item.delta} />
            </Block>
          </Flex>
          <Flex marginTop="mt-4" spaceX="space-x-2">
            <Text>{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar percentageValue={item.progress} marginTop="mt-3" />
        </Card>
      ))}
    </ColGrid>
  );
};

export default CardGridMap;
