const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="location" collapsible>
        <InputTable name="currentLocation">
          <Field name="currentLocation" />
          <Field name="crate" subpath="ns2:movements_anthropology" />
          <Field name="currentLocationFitness" />
          <Field name="currentLocationNote" />
        </InputTable>

        <Cols>
          <Col>
            <Field name="locationDate" />
            <Field name="reasonForMove" />

            <Field name="movementMethods">
              <Field name="movementMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="locationHandlers" subpath="ns2:movements_anthropology">
              <Field name="locationHandler" />
            </Field>
            <Field name="movementNote" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
