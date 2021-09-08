import React from "react";

import CrudModule from "@/modules/CrudModule";
import ProductForm from "@/forms/ProductForm";

function Product() {
  const entity = "api/product";
  const searchConfig = {
    displayLabels: ["productName"],
    searchFields: "productName",
    outputValue: "_id",
  };

  const panelTitle = "Бүтээгдэхүүн Panel";
  const dataTableTitle = "Бүтээгдэхүүний List";
  const entityDisplayLabels = ["productName"];

  const readColumns = [
    {
      title: "Бүтээгдэхүүний нэр",
      dataIndex: "name",
    },
    {
      title: "Тайлбар",
      dataIndex: "additional_info",
    },
    {
      title: "Үнэ",
      dataIndex: "cost",
    },
    {
      title: "Тоо",
      dataIndex: "unit",
    },
    {
      title: "Нэгжийн төрөл",
      dataIndex: "unit_type",
    },
    {
      title:"Нэмэлт мэдээлэл",
      dataIndex:"properties"
    }
  ];
  const dataTableColumns = [
    {
      title: "Бүтээгдэхүүний нэр",
      dataIndex: "name",
    },
    {
      title: "Тайлбар",
      dataIndex: "additional_info",
    },
    {
      title: "Үнэ",
      dataIndex: "cost",
    },
    {
      title: "Тоо",
      dataIndex: "unit",
    },
    {
      title: "Нэгжийн төрөл",
      dataIndex: "unit_type",
    },
    {
      title:"Нэмэлт мэдээлэл",
      dataIndex:"properties"
    }
  ];

  const ADD_NEW_ENTITY = "Add new product";
  const DATATABLE_TITLE = "products List";
  const ENTITY_NAME = "product";
  const CREATE_ENTITY = "Create product";
  const UPDATE_ENTITY = "Update product";
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
      createForm={<ProductForm />}
      updateForm={<ProductForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Product;
