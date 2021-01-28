import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Cols,
    Col,
    Panel,
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
            <Field name="claimNumber" />
            <Field name="claimName" subpath="ns2:claims_anthropology" />

            <Field name="claimAltNameGroupList" subpath="ns2:claims_anthropology">
              <Field name="claimAltNameGroup">
                <Field name="claimAltName" />
                <Field name="claimAltNote" />
              </Field>
            </Field>

            <Field name="claimantGroupList">
              <Field name="claimantGroup">
                <Field name="claimFiledBy" />
                <Field name="claimFiledOnBehalfOf" />
                <Field name="claimantNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="claimTypeList" subpath="ns2:claims_anthropology">
              <Field name="claimType" />
            </Field>

            <Field name="claimReceivedGroupList">
              <Field name="claimReceivedGroup">
                <Field name="claimReceivedDate" />
                <Field name="claimReceivedNote" />
              </Field>
            </Field>

            <Field name="claimNoteList" subpath="ns2:claims_anthropology">
              <Field name="claimNote" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="context" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="claimInventoryInvolvedGroupList" subpath="ns2:claims_anthropology">
              <Field name="claimInventoryInvolvedGroup">
                <Field name="inventoryInvolvedName" />
                <Field name="inventoryInvolvedNote" />
              </Field>
            </Field>

            <Field name="claimGroupInvolvedGroupList" subpath="ns2:claims_anthropology">
              <Field name="claimGroupInvolvedGroup">
                <Field name="groupInvolvedName" />
                <Field name="groupInvolvedNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="claimSiteInvolvedGroupList" subpath="ns2:claims_anthropology">
              <Field name="claimSiteInvolvedGroup">
                <Field name="claimSiteInvolvedName" />
                <Field name="claimSiteInvolvedNote" />
              </Field>
            </Field>

            <Field name="claimPeriodInvolvedGroupList" subpath="ns2:claims_anthropology">
              <Field name="claimPeriodInvolvedGroup">
                <Field name="claimPeriodInvolvedDateGroup" />
                <Field name="claimPeriodInvolvedNote" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="processing" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="dateOfInitialResponseGroupList" subpath="ns2:claims_anthropology">
              <Field name="dateOfInitialResponseGroup">
                <Field name="initialResponseDate" />
                <Field name="initialResponseNote" />
              </Field>
            </Field>

            <Field name="sentToLocalCommitteeGroupList" subpath="ns2:claims_anthropology">
              <Field name="sentToLocalCommitteeGroup">
                <Field name="sentToLocalCommitteeDate" />
                <Field name="sentToLocalCommitteeNote" />
              </Field>
            </Field>

            <Field name="recommendationOfLocalCommitteeGroupList" subpath="ns2:claims_anthropology">
              <Field name="recommendationOfLocalCommitteeGroup">
                <Field name="recommendationOfLocalCommitteeDate" />
                <Field name="recommendationOfLocalCommitteeNote" />
              </Field>
            </Field>

            <Field name="sentToOversightCommitteeGroupList" subpath="ns2:claims_anthropology">
              <Field name="sentToOversightCommitteeGroup">
                <Field name="sentToOversightCommitteeDate" />
                <Field name="sentToOversightCommitteeNote" />
              </Field>
            </Field>

            <Field
              name="recommendationOfOversightCommitteeGroupList"
              subpath="ns2:claims_anthropology"
            >
              <Field name="recommendationOfOversightCommitteeGroup">
                <Field name="recommendationOfOversightCommitteeDate" />
                <Field name="recommendationOfOversightCommitteeNote" />
              </Field>
            </Field>

            <Field name="sentToNationalNagpraGroupList" subpath="ns2:claims_anthropology">
              <Field name="sentToNationalNagpraGroup">
                <Field name="sentToNationalNagpraDate" />
                <Field name="sentToNationalNagpraNote" />
              </Field>
            </Field>

            <Field name="responseFromNationalNagpraGroupList" subpath="ns2:claims_anthropology">
              <Field name="responseFromNationalNagpraGroup">
                <Field name="responseFromNationalNagpraDate" />
                <Field name="responseFromNationalNagpraNote" />
              </Field>
            </Field>

            <Field name="dateOfNationalNagpraApprovalGroupList" subpath="ns2:claims_anthropology">
              <Field name="dateOfNationalNagpraApprovalGroup">
                <Field name="dateOfNationalNagpraApprovalDate" />
                <Field name="dateOfNationalNagpraApprovalNote" />
              </Field>
            </Field>

            <Field name="dateOfThirtyDayNoticeGroupList" subpath="ns2:claims_anthropology">
              <Field name="dateOfThirtyDayNoticeGroup">
                <Field name="dateOfThirtyDayNoticeDate" />
                <Field name="dateOfThirtyDayNoticeType" />
                <Field name="dateOfThirtyDayNoticeNote" />
              </Field>
            </Field>

            <Field name="anthroTransferGroupList" subpath="ns2:claims_anthropology">
              <Field name="anthroTransferGroup">
                <Field name="transferDate" />
                <Field name="transferNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Panel name="tasks">
              <InputTable>
                <Field name="dispositionPossibilitiesDiscussed" subpath="ns2:claims_pahma" />
                <Field name="dispositionPossibilitiesDiscussedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="surroundingTribesContacted" subpath="ns2:claims_pahma" />
                <Field name="surroundingTribesContactedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="workingTeamNotified" subpath="ns2:claims_pahma" />
                <Field name="workingTeamNotifiedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="siteFileResearchCompleted" subpath="ns2:claims_pahma" />
                <Field name="siteFileResearchCompletedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="accessionFileResearchCompleted" subpath="ns2:claims_pahma" />
                <Field name="accessionFileResearchCompletedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="objectsLocatedAndCounted" subpath="ns2:claims_pahma" />
                <Field name="objectsLocatedAndCountedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="objectsConsolidated" subpath="ns2:claims_pahma" />
                <Field name="objectsConsolidatedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="objectsPhotographed" subpath="ns2:claims_pahma" />
                <Field name="objectsPhotographedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="registrationDocumentsDrafted" subpath="ns2:claims_pahma" />
                <Field name="registrationDocumentsDraftedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="tribeContactedForPackingPreferences" subpath="ns2:claims_pahma" />
                <Field name="tribeContactedForPackingPreferencesNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="dateArrangedForTransfer" subpath="ns2:claims_pahma" />
                <Field name="dateArrangedForTransferNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="objectsMarkedAsDeaccessioned" subpath="ns2:claims_pahma" />
                <Field name="objectsMarkedAsDeaccessionedNote" subpath="ns2:claims_pahma" />
              </InputTable>

              <InputTable>
                <Field name="documentsArchived" subpath="ns2:claims_pahma" />
                <Field name="documentsArchivedNote" subpath="ns2:claims_pahma" />
              </InputTable>
            </Panel>

            {/* <Cols> */}
            {/* <Col> */}
            {/* <Field name="dispositionPossibilitiesDiscussed" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="surroundingTribesContacted" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="workingTeamNotified" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="siteFileResearchCompleted" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="accessionFileResearchCompleted" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsLocatedAndCounted" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsConsolidated" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsPhotographed" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="registrationDocumentsDrafted" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="tribeContactedForPackingPreferences" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="dateArrangedForTransfer" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsMarkedAsDeaccessioned" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="documentsArchived" subpath="ns2:claims_pahma" /> */}
            {/* </Col> */}

            {/* <Col> */}
            {/* <Field
                  name="dispositionPossibilitiesDiscussedNote"
                  subpath="ns2:claims_pahma" /> */}
            {/* <Field name="surroundingTribesContactedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="workingTeamNotifiedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="siteFileResearchCompletedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="accessionFileResearchCompletedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsLocatedAndCountedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsConsolidatedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsPhotographedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="registrationDocumentsDraftedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field
                  name="tribeContactedForPackingPreferencesNote"
                  subpath="ns2:claims_pahma" /> */}
            {/* <Field name="dateArrangedForTransferNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="objectsMarkedAsDeaccessionedNote" subpath="ns2:claims_pahma" /> */}
            {/* <Field name="documentsArchivedNote" subpath="ns2:claims_pahma" /> */}
            {/* </Col> */}
            {/* </Cols> */}
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.conservation.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
