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
          <Field name="inventoryCount" />
          <Field name="numberOfObjects" />

          <Field name="otherNumberList">
            <Field name="otherNumber">
              <Field name="numberValue" />
              <Field name="numberType" />
            </Field>
          </Field>

          <Field name="fieldCollectionDate" />
          <Field name="materialGroup">
            <Field name="material" />
          </Field>

          <Field name="fieldCollectionPlace" />

          <Field name="objectNameGroup">
            <Field name="objectName" />
          </Field>
        </Col>

        <Col>
          <Field name="assocPeopleGroup">
            <Field name="assocPeople" />
          </Field>

          <Field name="objectProductionPersonGroup">
            <Field name="objectProductionPerson" />
          </Field>

          <Field name="objectProductionDate" />
          <Field name="taxonomicIdentGroup">
            <Field name="taxon" />
          </Field>

          <Field name="objectProductionPlaceGroup">
            <Field name="objectProductionPlace" />
          </Field>

          <Field name="responsibleDepartments">
            <Field name="responsibleDepartment" />
          </Field>
        </Col>

        <Col>
          <Field name="pahmaEthnographicFileCodeList">
            <Field name="pahmaEthnographicFileCode" />
          </Field>

          <Field name="fieldCollectors">
            <Field name="fieldCollector" />
          </Field>

          <Field name="objectStatusList">
            <Field name="objectStatus" />
          </Field>

          <Field name="contentDateGroup" />
          <Field name="pahmaFieldLocVerbatim" />

          <Field name="contentPlaces">
            <Field name="contentPlace" />
          </Field>
        </Col>
      </Cols>

      <Field name="briefDescriptions">
        <Field name="briefDescription" />
      </Field>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
