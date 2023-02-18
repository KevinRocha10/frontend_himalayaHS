import React, { useState } from "react";
import { Title, Text, TabList, Tab, Block } from "@tremor/react";
import CardGridMap from "./CardGridMap";
import Charts from "./Charts";
import TableBase from "./TableBase";
import "../../styles/dash.css"
import PagosRest from "./PagosRest";
import {useNavigate} from "react-router-dom"
import "@tremor/react/dist/esm/tremor.css";

const DashboardBase = () => {
  const [selectedView, setSelectedview] = useState(1);
  const navigate = useNavigate();

  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    // =============== BARRA DE NAVEGACIÓN ================
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-h"></i>
                <i className="fa-solid fa-circle-nodes"></i>
                <i className="fa-solid fa-s"></i>
              </span>
              <span className="title">SYSTEMS HIMALAYA HS</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-house-chimney"></i>
                {/* <ion-icon name="home"></ion-icon> */}
              </span>
              <span className="title">Menú</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className="title">Configuración</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-door-open"></i>
              </span>
              <span className="title" onClick={() => navigate('../', { replace: true })}>Salir</span>
            </a>
          </li>
        </ul>
      </div>
      {/* ========================= MENU ==================== */}
      <div className="main">
        <main className="bg-slate-200 p-6 sm:p-10">
          <Title>HIMALAYA HS RESTAURANTE</Title>
          <Text>Dashboard</Text>

          <TabList
            defaultValue={selectedView}
            handleSelect={(value) => setSelectedview(value)}
            marginTop="mt-6"
          >
            <Tab value={1} text="Menú Principal" />
            <Tab value={2} text="Registrar Pago" />
            <Tab value={3} text="Detalles" />
          </TabList>

          {/*operadores ternarios para la seleccion de vistas */}
          {selectedView === 1 ? (
            <>
              <CardGridMap></CardGridMap>
              <hr></hr>
              {/* bloque */}
              <Block marginTop="mt-6">
                <Charts></Charts>
              </Block>
            </>
          ) : selectedView === 2 ? (
            // para vista detalles
            <>
              <Block marginTop="mt-6">
                <PagosRest></PagosRest>
              </Block>
            </>
          ) : (
            <Block marginTop="mt-6">
              <TableBase></TableBase>
            </Block>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardBase;
