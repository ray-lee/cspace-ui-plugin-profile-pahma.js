/* global cspaceUIPluginProfilePAHMA */
/* The cspaceUIPluginProfilePAHMA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import logo from '../images/logo.svg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/pahma.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
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
  plugins: plugins.map(plugin => plugin()),
});
