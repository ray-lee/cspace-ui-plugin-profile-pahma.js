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
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Row>
          <Field name="identificationNumber" />
          <Field name="approvedForWeb" subpath="ns2:media_pahma" />
        </Row>
        <Field name="description" />

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Row>
              <Field name="primaryDisplay" subpath="ns2:media_pahma" />
              <Field name="documentationImage" subpath="ns2:media_pahma" />
            </Row>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Row>
              <Cols>
                <Col>
                  <Field name="languageList">
                    <Field name="language" />
                  </Field>
                </Col>

                <Col>
                  <Field name="typeList">
                    <Field name="type" />
                  </Field>
                </Col>
              </Cols>
            </Row>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
