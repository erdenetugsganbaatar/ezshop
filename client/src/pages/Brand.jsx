import React from "react";

import CrudModule from "@/modules/CrudModule";
import BrandForm from "@/forms/BrandForm";

export default function Admin() {
  const entity = "api/brand";
  const searchConfig = {
    displayLabels: ["name", "desc"],
    searchFields: "name,desc",
    outputValue: "_id",
  };

  const panelTitle = "Brand Panel";
  const dataTableTitle = "Brand Lists";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Description", dataIndex: "desc" },
  ];

  const dataTableColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Description", dataIndex: "desc" },
  ];

  const ADD_NEW_ENTITY = "Шинэ Brand нэмэх";
  const DATATABLE_TITLE = "Brands List";
  const ENTITY_NAME = "brand";
  const CREATE_ENTITY = "Create Brand";
  const UPDATE_ENTITY = "Update Brand";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<BrandForm />}
      updateForm={<BrandForm isUpdateForm={true} />}
      config={config}
    />
  );
}
