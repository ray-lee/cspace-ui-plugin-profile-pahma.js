export default (configContext) => {
  const {
    lib,
    layoutComponents,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

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
