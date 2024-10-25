import { getConfig } from '@edx/frontend-platform';

const supersetUrl = () => `${getConfig().SUPERSET_URL}`;
const aspectsGuestTokenURL = (entityId) => `${getConfig().LMS_BASE_URL}/aspects/superset_guest_token/${entityId}`;

export {
  supersetUrl,
  aspectsGuestTokenURL,
};
