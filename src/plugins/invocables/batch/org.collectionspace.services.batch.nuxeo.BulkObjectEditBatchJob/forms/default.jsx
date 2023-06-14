const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  return (
    <Field name="params">
      <Cols>
        <Col>
          <Field name="numberOfObjects" />
          <Field name="material" />
          <Field name="responsibleDepartment" />
        </Col>

        <Col>
          <Field name="objectProductionPerson" />
          <Field name="objectProductionPlace" />
          <Field name="publishTo" />
        </Col>

        <Col>
          <Field name="contentPlace" />
          <Field name="objectName" />
        </Col>
      </Cols>
      <Field name="briefDescription" />
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
