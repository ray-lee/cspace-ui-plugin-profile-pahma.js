const template = (configContext) => {
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
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Row>
          <Field name="entryNumber" />
          <Field name="entryDate" />

          <Col>
            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>

          <Field name="entryReason" />
        </Row>

        <Cols>
          <Col>
            <Row>
              <Field name="expectedReturnDate" subpath="ns2:intakes_pahma" />
              <Field name="returnDate" />
            </Row>

            <Field name="depositorGroupList">
              <Field name="depositorGroupList">
                <Field name="depositor" />
                <Field name="depositorsRequirements" />
              </Field>
            </Field>

            <Field name="currentOwner">
              <Field name="currentOwner" />
            </Field>
          </Col>

          <Field name="entryNote" />
        </Cols>

        <Field name="packingNote" />
      </Panel>

      <Panel name="objectCollectionInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Row>
              <Field name="fieldCollectionDate" />

              <Col>
                <Field name="fieldCollectionMethods">
                  <Field name="fieldCollectionMethod" />
                </Field>
              </Col>
            </Row>

            <Field name="fieldCollectionNumber" />
            <Field name="fieldCollectionNote" />
          </Col>

          <Col>
            <Field name="fieldCollectionPlace" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldCollectionEventNames">
              <Field name="fieldCollectionEventName" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="valuation" collapsible collapsed>
        <Row>
          <Field name="valuer" />
          <Field name="valuationReferenceNumber" />
        </Row>
      </Panel>

      <Panel name="insurance" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="insurers">
              <Field name="insurer" />
            </Field>

            <Field name="insurancePolicyNumber" />
            <Field name="insuranceRenewalDate" />
          </Col>

          <Col>
            <Field name="insuranceReferenceNumber" />
            <Field name="insuranceNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="location" collapsible collapsed>
        <Field name="currentLocationGroupList">
          <Field name="currentLocationGroup">
            <Field name="currentLocation" />
            <Field name="currentLocationFitness" />
            <Field name="currentLocationNote" />
          </Field>
        </Field>

        <Row>
          <Field name="locationDate" />
          <Field name="normalLocation" />
        </Row>
      </Panel>

      <Panel name="condition" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="conditionCheckMethods">
              <Field name="conditionCheckMethod" />
            </Field>

            <Field name="conditionCheckReasons">
              <Field name="conditionCheckReason" />
            </Field>

            <Field name="conditionCheckersOrAssessors">
              <Field name="conditionCheckerOrAssessor" />
            </Field>
          </Col>

          <Col>
            <Field name="conditionCheckDate" />
            <Field name="conditionCheckReferenceNumber" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
