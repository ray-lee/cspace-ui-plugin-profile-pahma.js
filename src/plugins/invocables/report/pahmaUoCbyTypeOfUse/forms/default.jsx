import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field name="StaffName" />
      <Field name="Visit Date Start" />
      <Field name="Visit Date End" />
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.report.pahmaUoCbyTypeOfUse.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
