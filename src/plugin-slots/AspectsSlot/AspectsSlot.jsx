import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import AspectsIFrame from './AspectsiFrame';
import { supersetUrl } from './data/urls';

const AspectsSlot = ({ entityId, dashboardId }) => {
  if (!supersetUrl() || !entityId || !dashboardId) {
    return null;
  }

  return (
    <PluginSlot id="aspects_slot">
      <AspectsIFrame
        entityId={entityId}
        supersetUrl={supersetUrl()}
        dashboardId={dashboardId}
      />
    </PluginSlot>
  );
};

AspectsSlot.propTypes = {
  entityId: PropTypes.string.isRequired,
  dashboardId: PropTypes.string.isRequired,
};

export default AspectsSlot;
