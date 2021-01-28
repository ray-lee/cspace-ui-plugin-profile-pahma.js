const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDateGroup" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="acquisitionDateGroupList">
              <Field name="acquisitionDateGroup" />
            </Field>

            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>

            <Field name="acquisitionDonorGroupList" subpath="ns2:acquisitions_pahma">
              <Field name="acquisitionDonorGroup">
                <Field name="donor" />
                <Field name="donorAnon" />
              </Field>
            </Field>

            <Field name="transferOfTitleNumber" />
          </Col>

          <Col>
            <Panel name="priceInformation">
              <InputTable name="objectOfferPrice">
                <Field name="objectOfferPriceCurrency" />
                <Field name="objectOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchaseOfferPrice">
                <Field name="objectPurchaseOfferPriceCurrency" />
                <Field name="objectPurchaseOfferPriceValue" />
              </InputTable>

              <InputTable name="objectPurchasePrice">
                <Field name="objectPurchasePriceCurrency" />
                <Field name="objectPurchasePriceValue" />
              </InputTable>

              <InputTable name="originalObjectPurchasePrice">
                <Field name="originalObjectPurchasePriceCurrency" />
                <Field name="originalObjectPurchasePriceValue" />
              </InputTable>
            </Panel>

            <Field name="acquisitionReason" />
            <Field name="acquisitionNote" />
            <Field name="acquisitionProvisos" />
            <Field name="acquisitionDescription" subpath="ns2:acquisitions_anthropology" />
          </Col>
        </Cols>

        <Row>
          <Field name="acquisitionFundingList">
            <Field name="acquisitionFunding">
              <Field name="acquisitionFundingCurrency" />
              <Field name="acquisitionFundingValue" />
              <Field name="acquisitionFundingSource" />
              <Field name="acquisitionFundingSourceProvisos" />
            </Field>
          </Field>
        </Row>

        <Cols>
          <Col>
            <Field name="creditLine" />
          </Col>
          <Col />
        </Cols>
      </Panel>

      <Panel name="objectCollectionInformation" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="fieldCollectionEventNames">
              <Field name="fieldCollectionEventName" />
            </Field>
          </Col>
          <Col />
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
