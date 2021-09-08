import React from "react";

import CrudModule from "@/modules/CrudModule";

function Customer() {
  const entity = "/api/customer";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };

  const panelTitle = "Customer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["company"];

  const readColumns = [
    {
      title: "Нэр",
      dataIndex: "firstName",
    },
    {
      title: "Овог",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  const dataTableColumns = [
    {
      title: "Нэр",
      dataIndex: "firstName",
    },
    {
      title: "Овог",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const DATATABLE_TITLE = "customers List";
  const ENTITY_NAME = "customer";
  const CREATE_ENTITY = "Create customer";
  const UPDATE_ENTITY = "Update customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      config={config}
    />
  );
}

export default Customer;
