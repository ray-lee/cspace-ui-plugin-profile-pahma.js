/* global cspaceUIPluginProfilePAHMA */
/* The cspaceUIPluginProfilePAHMA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import cspaceUIPluginRecordTaxon from 'cspace-ui-plugin-record-taxon';
import cspaceUIPluginExtUCBNHCollectionObject from 'cspace-ui-plugin-ext-ucbnh-collectionobject';
import nagpraExtensionPlugin from 'cspace-ui-plugin-ext-nagpra';
import annotationExtensionPlugin from 'cspace-ui-plugin-ext-annotation';
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
  defaultAdvancedSearchBooleanOp: 'and',
  mediaSnapshotSort: 'primaryDisplay desc',
  prettyUrls: true,
  relationMemberPerm: 'R',
  structDateOptionListNames: ['dateQualifiers', 'dateera', 'datecertainty', 'datequalifier'],
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
    cspaceUIPluginExtUCBNHCollectionObject(),
    nagpraExtensionPlugin(),
    annotationExtensionPlugin(),
    ...plugins.map(plugin => plugin()),
  ],
});
