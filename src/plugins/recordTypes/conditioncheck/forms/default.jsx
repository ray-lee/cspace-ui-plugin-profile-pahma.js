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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible>
        <Cols>
          <Col>
            <Field name="conditionCheckRefNumber" />
            <Field name="conditionChecker" />
            <Field name="conservationTreatmentPriority" />

            <Field name="conditionCheckGroupList">
              <Field name="conditionCheckGroup" tabular={false}>
                <Field name="condition" embedded label="" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="conditionCheckAssessmentDate" />
            <Field name="nextConditionCheckDate" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="securityRecommendations" />
          </Col>

          <Col>
            <Field name="tempRequirement" subpath="ns2:conditionchecks_anthropology" />
            <Field name="humidityRequirement" subpath="ns2:conditionchecks_anthropology" />
            <Field name="lightRequirement" subpath="ns2:conditionchecks_anthropology" />

            <Field name="hazardGroupList">
              <Field name="hazardGroup">
                <Field name="hazard" />
                <Field name="hazardNote" />
              </Field>
            </Field>

            <Field name="packingRecommendations" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
