import React from "react";

import CrudModule from "@/modules/CrudModule";
import LeadForm from "@/forms/CategoryForm";

function Lead() {
  const entity = "/api/category";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "client,email,phone",
    outputValue: "_id",
  };

  const panelTitle = "Lead Panel";
  const dataTableTitle = "Leads Lists";
  const entityDisplayLabels = ["client"];

  const readColumns = [
    {
      title: "Нэр",
      dataIndex: "name",
    },
    {
      title: "Тайлбар",
      dataIndex: "desc",
    },
    {
      title: "parent_id",
      dataIndex: "parentId",
    }
  ];
  const dataTableColumns = [
    {
      title: "Нэр",
      dataIndex: "name",
    },
    {
      title: "Тайлбар",
      dataIndex: "desc",
    },
  ];

  const ADD_NEW_ENTITY = "Шинэ category нэмэх";
  const DATATABLE_TITLE = "Category Lists";
  const ENTITY_NAME = "lead";
  const CREATE_ENTITY = "category үүсгэх";
  const UPDATE_ENTITY = "cateogry засварлах";
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
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Lead;
