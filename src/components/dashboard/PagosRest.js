import {
  ColGrid,
  Col,
  Card,
  Text,
  TextInput,
  Title,
  Dropdown,
  DropdownItem,
  Button,
} from "@tremor/react";
import React from "react";
import DatePicker from "../dashboard/DatePicker";
import TableCalendar from "./TableCalendar";
// import ModalRecibo from "../dashboard/ModalRecibo";

const PagosRest = () => {
  return (
    <ColGrid
      numCols={1}
      numColsSm={2}
      numColsLg={3}
      gapX="gap-x-3"
      gapY="gap-y-3"
    >
      <Col>
        <Card>
          <Title>Datos Alumno</Title>
          <form>
            <Text marginTop="mt-3">Nombre del alumno: </Text>
            <TextInput type="text" name="name" placeholder="" />
            <Text marginTop="mt-3">Grado: </Text>
            <TextInput type="text" name="name" placeholder="" />
            <Text marginTop="mt-3">Cod/Estudiante: </Text>
            <TextInput type="text" name="name" placeholder="" />
            <Text marginTop="mt-3">Acudiente: </Text>
            <TextInput type="text" name="name" placeholder="" />
          </form>
        </Card>
      </Col>
      <Col numColSpan={1} numColSpanLg={2}>
        <Card>
          <Text>Dias a pagar:</Text>
          <DatePicker marginTop="mt-3"></DatePicker>
          <Text marginTop="mt-3">Tipo de Consumo:</Text>
          <Dropdown
            handleSelect={(value) =>
              console.log("The selected value is", value)
            }
            marginTop="mt-2"
            placeholder="Seleccione:"
          >
            <DropdownItem
              value={1}
              text="Almuerzo"
              // icon={CubeTransparentIcon}
            />
            <DropdownItem
              value={2}
              text="Lonchera"
              //   icon={CubeIcon}
            />
          </Dropdown>
          {/*  */}
          <Text marginTop="mt-3">Valor Unidad: </Text>
          <TextInput type="text" name="name" placeholder="" />
          <Text marginTop="mt-3">Valor Total: </Text>
          <TextInput type="text" name="name" placeholder="" />
        </Card>
      </Col>
      <Button text="Pagar">{/* <ModalRecibo></ModalRecibo> */}</Button>
      <Button text="Cancelar"></Button>
      <Col numColSpan={2} numColSpanLg={3}>
        <Card>
          <Title>Resumen:</Title>
          <TableCalendar></TableCalendar>
        </Card>
      </Col>
    </ColGrid>
  );
};

export default PagosRest;
