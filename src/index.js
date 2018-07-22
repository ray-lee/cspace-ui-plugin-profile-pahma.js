/* global cspaceUIPluginProfilePAHMA */
/* The cspaceUIPluginProfilePAHMA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import cspaceUIPluginRecordTaxon from 'cspace-ui-plugin-record-taxon';
import { defineMessages } from 'react-intl';
import logo from '../images/logo.svg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/pahma.css';

module.exports = () => ({
  logo,
  messages,
  allowDeleteHierarchyLeaves: true,
  autocompleteFindDelay: 1000,
  className: styles.common,
  mediaSnapshotSort: 'primaryDisplay desc',
  prettyUrls: true,
  relationMemberPerm: 'R',
  tenantId: '15',
  pluginInfo: {
    cspaceUIPluginProfilePAHMA: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfilePAHMA.name',
          defaultMessage: 'PAHMA profile',
        },
      }),
      version: cspaceUIPluginProfilePAHMA.packageVersion,
    },
  },
  plugins: [
    cspaceUIPluginRecordTaxon(),
    ...plugins.map(plugin => plugin()),
  ],
});
