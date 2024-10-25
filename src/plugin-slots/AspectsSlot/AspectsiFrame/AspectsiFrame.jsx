import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import getGuestToken from '../data/api';

const AspectsIFrame = ({
  dashboardId,
  entityId,
  supersetUrl,
}) => {
  const mountID = `superset-container-${entityId}`.replaceAll(/:|\+/g, '-');

  useEffect(() => {
    const mountContainer = document.getElementById(mountID);
    if (mountContainer) {
      embedDashboard({
        id: dashboardId,
        supersetDomain: supersetUrl,
        mountPoint: mountContainer,
        fetchGuestToken: () => getGuestToken(entityId),
        dashboardUiConfig: {
          hideTitle: true,
          filters: {
            expanded: false,
          },
          hideTab: true,
          hideChartControls: false,
          hideFilters: true,
        },
      });

      const iframe = mountContainer.querySelector('iframe');
      if (iframe) {
        iframe.className += ' vh-100 w-100 border-0';
      }
    }
  }, [dashboardId, entityId, mountID, supersetUrl]);

  return (
    <div id={mountID} style={{ height: 'inherit' }} />
  );
};

AspectsIFrame.propTypes = {
  entityId: PropTypes.string.isRequired,
  dashboardId: PropTypes.string.isRequired,
  supersetUrl: PropTypes.string.isRequired,
};

export default AspectsIFrame;
