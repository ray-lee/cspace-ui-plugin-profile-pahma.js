export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup">
        <Panel>
          <Row>
            <Cols>
              <Col>
                <Field name="measuredPart" />
              </Col>
              <Col />
            </Cols>
          </Row>

          <Field name="dimensionSubGroupList">
            <Field name="dimensionSubGroup">
              <Field name="dimension" />
              <Field name="measuredBy" />
              <Field name="value" />
              <Field name="measurementUnit" />
              <Field name="valueQualifier" />
              <Field name="valueDate" />
              <Field name="dimensionNote" />
            </Field>
          </Field>
          <Field name="measuredPartNote" />
        </Panel>
      </Field>
    </Field>
  );
};
