const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exitNumber" />
            <Field name="newOwnerList" subpath="ns2:objectexit_anthropology">
              <Field name="newOwner" />
            </Field>
            <Field name="depositor" />
          </Col>

          <Col>
            <Field name="exitDateGroup" />
            <Field name="exitMethods">
              <Field name="exitMethod" />
            </Field>
            <Field name="exitReason" />
          </Col>
        </Cols>

        <Field name="exitNote" />
        <Field name="packingNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
