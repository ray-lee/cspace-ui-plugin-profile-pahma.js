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
    InputTable,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>

      <Panel name="id" collapsible>
        <Row>
          <Field name="objectNumber" />
          <Field name="pahmaTmsLegacyDepartment" subpath="ns2:collectionobjects_pahma" />
          <Field name="numberOfObjects" />
          <Field name="inventoryCount" subpath="ns2:collectionobjects_pahma" />
          <Field name="isComponent" subpath="ns2:collectionobjects_pahma" />

          <Col>
            <Field name="pahmaObjectStatusList" subpath="ns2:collectionobjects_pahma">
              <Field name="pahmaObjectStatus" />
            </Field>
          </Col>
        </Row>

        <Cols>
          <Col>
            <Field name="pahmaAltNumGroupList" subpath="ns2:collectionobjects_pahma" >
              <Field name="pahmaAltNumGroup">
                <Field name="pahmaAltNum" />
                <Field name="pahmaAltNumType" />
                <Field name="pahmaAltNumNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>
        </Cols>

        <Row>
          <Field name="computedCurrentLocation" />
          <Field name="computedCrate" subpath="ns2:collectionobjects_anthropology" />
        </Row>

        <Field name="objectClassGroupList" subpath="ns2:collectionobjects_pahma">
          <Field name="objectClassGroup">
            <Field name="objectClassName" />
            <Field name="objectClassNote" />
          </Field>
        </Field>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectName" />
            <Field name="objectNameLevel" />
            <Field name="objectNameCurrency" />
            <Field name="objectNameSystem" />
            <Field name="objectNameType" />
            <Field name="objectNameLanguage" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Row>
              <Field name="responsibleDepartments">
                <Field name="responsibleDepartment" />
              </Field>
              <Field name="collection" />
            </Row>
            <Field name="assocPeopleGroupList">
              <Field name="assocPeopleGroup">
                <Field name="assocPeople" />
                <Field name="assocPeopleType" />
                <Field name="assocPeopleNote" />
              </Field>
            </Field>
          </Col>
          <Col>
            <Field name="pahmaEthnographicFileCodeList" subpath="ns2:collectionobjects_pahma">
              <Field name="pahmaEthnographicFileCode" />
            </Field>

            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Cols>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_naturalhistory" >
          <Field name="annotationGroup">
            <Field name="annotationType" />
            <Field name="annotationNote" />
            <Field name="annotationDate" />
            <Field name="annotationAuthor" />
          </Field>
        </Field>

        {extensions.dimension.form}

        <Field name="materialGroupList">
          <Field name="materialGroup">
            <Field name="material" />
            <Field name="materialComponent" />
            <Field name="materialName" />
            <Field name="materialSource" />
            <Field name="materialComponentNote" />
          </Field>
        </Field>

        <Field name="taxonomicIdentGroupList" subpath="ns2:collectionobjects_naturalhistory">
          <Field name="taxonomicIdentGroup">
            <Field name="taxon" />
            <Field name="qualifier" />
            <Field name="identBy" />
            <Field name="identDateGroup" />
            <Field name="institution" />
            <Field name="identKind" />
            <Field name="reference" />
            <Field name="refPage" />
            <Field name="notes" />
          </Field>
        </Field>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <Col>
                  <Field name="title" />
                  <Field name="titleLanguage" />
                </Col>

                <Col>
                  <Field name="titleType" />

                  <Field name="titleTranslationSubGroupList">
                    <Field name="titleTranslationSubGroup">
                      <Field name="titleTranslation" />
                      <Field name="titleTranslationLanguage" />
                    </Field>
                  </Field>
                </Col>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field>

        <Row>
          <Field name="portfolioSeries" subpath="ns2:collectionobjects_pahma" />

          <Col>
            <Field name="pahmaCollectionList" subpath="ns2:collectionobjects_pahma">
              <Field name="pahmaCollection" />
            </Field>
          </Col>

          <Field name="pahmaTms2003DataSource" subpath="ns2:collectionobjects_pahma" />
        </Row>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Cols>
          <Col>
            <Field
              name="pahmaFieldCollectionDateGroupList"
              subpath="ns2:collectionobjects_pahma"
            >
              <Field name="pahmaFieldCollectionDateGroup" />
            </Field>

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />
            <Field name="fieldCollectionNumber" />
          </Col>

          <Col>
            <Field name="pahmaFieldCollectionPlaceList" subpath="ns2:collectionobjects_pahma">
              <Field name="pahmaFieldCollectionPlace" />
            </Field>

            <Field name="pahmaFieldLocVerbatim" subpath="ns2:collectionobjects_pahma" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>

            <Field name="fieldColEventNames">
              <Field name="fieldColEventName" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="techniqueGroupList">
              <Field name="techniqueGroup">
                <Field name="technique" />
                <Field name="techniqueType" />
              </Field>
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup" >
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>

            <Field name="objectProductionReasons">
              <Field name="objectProductionReason" />
            </Field>
          </Col>

          <Col>
            <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>

            <Field name="objectProductionNote" />
          </Col>
        </Row>
      </Panel>

      <Panel name="repatriation" collapsible collapsed>
        <Cols>
          <Col>
            <Cols>
              <Col>
                <Field name="nagpraInventoryNameList" subpath="ns2:collectionobjects_anthropology">
                  <Field name="nagpraInventoryName" />
                </Field>
              </Col>

              <Col>
                <Field name="nagpraApplicabilityList" subpath="ns2:collectionobjects_anthropology">
                  <Field name="nagpraApplicability" />
                </Field>
              </Col>
            </Cols>

            <Field name="pahmaNagpraCodeLegacyList" subpath="ns2:collectionobjects_pahma">
              <Field name="pahmaNagpraCodeLegacy" />
            </Field>

            <Field name="repatriationNoteList" subpath="ns2:collectionobjects_anthropology">
              <Field name="repatriationNote" />
            </Field>
          </Col>

          <Col>
            <Field
              name="nagpraCulturalDeterminationList"
              subpath="ns2:collectionobjects_anthropology"
            >
              <Field name="nagpraCulturalDetermination" />
            </Field>

          </Col>
        </Cols>
      </Panel>

      <Panel name="cultCare" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="culturalCareNoteList" subpath="ns2:collectionobjects_anthropology">
              <Field name="culturalCareNote" />
            </Field>
          </Col>
          <Col />
        </Cols>

        <Field name="accessRestrictionGroupList" subpath="ns2:collectionobjects_anthropology">
          <Field name="accessRestrictionGroup">
            <Field name="accessRestrictionType" />
            <Field name="accessRestrictionLevel" />
            <Field name="accessRestrictionDetails" />
            <Field name="accessRestrictionRequestor" />
            <Field name="accessRestrictionOnBehalfOf" />
            <Field name="accessRestrictionDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="desc" collapsible collapsed>

        <Field name="physicalDescription" />
        <Field name="distinguishingFeatures" />

        <Row>
          <Col>
            <Field name="objectComponentGroupList">
              <Field name="objectComponentGroup">
                <Field name="objectComponentName" />
                <Field name="objectComponentInformation" />
              </Field>
            </Field>
          </Col>
        </Row>

        <Panel name="content" collapsible collapsed>
          <Field name="contentDescription" />

          <Cols>
            <Col>
              <Row>
                <Col>
                  <Field name="contentLanguages">
                    <Field name="contentLanguage" />
                  </Field>
                </Col>

                <Col>
                  <Field name="contentScripts">
                    <Field name="contentScript" />
                  </Field>
                </Col>
              </Row>

              <Field name="contentActivities">
                <Field name="contentActivity" />
              </Field>

              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              <Field name="contentDateGroup" />

              <Field name="contentPositions">
                <Field name="contentPosition" />
              </Field>

              <Field name="contentObjectGroupList">
                <Field name="contentObjectGroup">
                  <Field name="contentObject" />
                  <Field name="contentObjectType" />
                </Field>
              </Field>
            </Col>

            <Col>
              <Field name="contentPeoples">
                <Field name="contentPeople" />
              </Field>

              <Field name="contentPersons">
                <Field name="contentPerson" />
              </Field>

              <Field name="contentPlaces">
                <Field name="contentPlace" />
              </Field>

              <Field name="contentOrganizations">
                <Field name="contentOrganization" />
              </Field>

              <Field name="contentWorks" subpath="ns2:collectionobjects_anthropology">
                <Field name="contentWork" />
              </Field>

              <Field name="contentEventNameGroupList">
                <Field name="contentEventNameGroup">
                  <Field name="contentEventName" />
                  <Field name="contentEventNameType" />
                </Field>
              </Field>

              <Field name="contentOtherGroupList">
                <Field name="contentOtherGroup">
                  <Field name="contentOther" />
                  <Field name="contentOtherType" />
                </Field>
              </Field>
            </Col>
          </Cols>

          <Field name="contentNote" />
        </Panel>

        <Panel name="textInscript" collapsible collapsed>
          <Field name="textualInscriptionGroupList">
            <Field name="textualInscriptionGroup">
              <Panel>
                <Field name="inscriptionContent" />

                <Row>
                  <Field name="inscriptionContentInscriber" />
                  <Field name="inscriptionContentType" />
                  <Field name="inscriptionContentMethod" />
                  <Field name="inscriptionContentPosition" />
                </Row>

                <Row>
                  <Field name="inscriptionContentDateGroup" />
                  <Field name="inscriptionContentLanguage" />
                  <Field name="inscriptionContentScript" />
                  <Col />
                </Row>

                <Field name="inscriptionContentInterpretation" />
                <Field name="inscriptionContentTranslation" />
                <Field name="inscriptionContentTransliteration" />
              </Panel>
            </Field>
          </Field>
        </Panel>

        <Panel name="nonTextInscript" collapsible collapsed>
          <Field name="nonTextualInscriptionGroupList">
            <Field name="nonTextualInscriptionGroup">
              <Panel>
                <Field name="inscriptionDescription" />

                <Row>
                  <Field name="inscriptionDescriptionInscriber" />
                  <Field name="inscriptionDescriptionType" />
                  <Field name="inscriptionDescriptionMethod" />
                  <Field name="inscriptionDescriptionPosition" />
                </Row>

                <Row>
                  <Field name="inscriptionDescriptionDateGroup" />
                  <Col />
                  <Col />
                  <Col />
                </Row>

                <Field name="inscriptionDescriptionInterpretation" />
              </Panel>
            </Field>
          </Field>
        </Panel>

      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field>

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>

            <Col>
              <Panel>
                <InputTable name="assocEvent">
                  <Field name="assocEventName" />
                  <Field name="assocEventNameType" />
                </InputTable>

                <Field name="assocEventOrganizations">
                  <Field name="assocEventOrganization" />
                </Field>

                <Field name="assocEventPeoples">
                  <Field name="assocEventPeople" />
                </Field>

                <Field name="assocEventPersons">
                  <Field name="assocEventPerson" />
                </Field>

                <Field name="assocEventPlaces">
                  <Field name="assocEventPlace" />
                </Field>

                <Field name="assocEventNote" />
              </Panel>
            </Col>
          </Row>
        </Panel>

        <Panel name="ownership" collapsible collapsed>
          <Field name="objectHistoryNote" />

          <Field name="ownershipHistoryGroupList" subpath="ns2:collectionobjects_pahma">
            <Field name="ownershipHistoryGroup" >
              <Field name="previousOwner" />
              <Field name="ownershipDateGroup" />
              <Field name="ownershipCategory" />
              <Field name="ownershipPlace" />
              <Field name="ownershipMethod" />
              <Field name="ownershipPriceCurrency" />
              <Field name="ownershipPriceAmount" />
              <Field name="ownershipNote" />
            </Field>
          </Field>
        </Panel>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
