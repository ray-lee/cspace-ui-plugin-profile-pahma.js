const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="locTermGroupList">
          <Field name="locTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
              </Row>

              <Row>
                <Field name="termQualifier" />
                <Field name="termStatus" />
                <Field name="termType" />
              </Row>

              <Row>
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="locationType" />
          <Field name="locNote" subpath="ns2:locations_anthropology" />
        </Row>

        <Field name="conditionGroupList">
          <Field name="conditionGroup">
            <Field name="conditionNote" />
            <Field name="conditionNoteDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
