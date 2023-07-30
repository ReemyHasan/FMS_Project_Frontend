import React, { Fragment } from "react";
import { Row, Col, Card } from "antd";
import { DynamicFormDto } from "@/src/components/dynamic-form/dtos/dynamic-form.dto";
import styles from "./index.module.css";
import DynamicFormItem from "@/src/components/dynamic-form/items";
import { Formik, Form } from "formik";
import DynamicFormHeader from "@/src/components/dynamic-form/form-header";

const DynamicForm = ({
  formCol,
  className,
  onFinish,
  schema,
  title,
  initialValues,
}: DynamicFormDto) => {
  return (
    <Fragment>
      {/* <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onFinish}
        validationSchema={schema}
      > */}
        {() => (
          <Form>
            <DynamicFormHeader
              className={className?.formHeaderClassName}
              title={title}
              onSave={onFinish} 
            />
          <Row
              className={`${styles.formContent} ${className?.formContentClassName}`}
            >
                {/* 
              {formCol?.map((col, index) => (
                <Col span={col?.span} key={index}>
                  {col?.cards?.map((card, index) => (
                    <Card
                      key={index}
                      title={card?.title}
                      className={styles.cardItem}
                    >
                      <Row gutter={[12, 12]}>
                        {card?.items?.map((item, index) => (
                          <Col span={item?.colSpan} key={index}>
                            <DynamicFormItem {...item} />
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  ))}
                </Col>
              ))}*/}
            </Row> 
          </Form>
        )}
      {/* </Formik> */}
    </Fragment>
  );
};

export default DynamicForm;
