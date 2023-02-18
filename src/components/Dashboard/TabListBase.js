import { Card, Tab, TabList } from "@tremor/react";
import React, { useState } from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const TabListBase = () => {
  // vistas

  const [selectedView, setSelectedView] = useState(1);

  return (
    <>
      <TabList
        handleSelect={(value) => setSelectedView(value)}
        defaultValue={selectedView}
        marginTop="mt-6"
      >
        {/* tab me permite dejar dos o mas pestañas */}
        <Tab value={1} text="Pestaña 1" icon={HandThumbUpIcon} />
        <Tab value={2} text="Pestaña 2" icon={HandThumbDownIcon} />
      </TabList>
      {/*operadores ternarios para la seleccion de vistas */}
      {selectedView === 1 ? (
        <Card>
          <div className="h-28 bg-emerald-300"></div>
        </Card>
      ) : (
        <Card>
          <div className="h-28 bg-blue-700"></div>
        </Card>
      )}
    </>
  );
};

export default TabListBase;
