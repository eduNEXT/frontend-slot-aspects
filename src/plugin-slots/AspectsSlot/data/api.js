import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { logError } from '@edx/frontend-platform/logging';

import { aspectsGuestTokenURL } from './urls';

const getGuestToken = async (entityId) => {
  try {
    const { data } = await getAuthenticatedHttpClient().get(aspectsGuestTokenURL(entityId));
    return data.guestToken;
  } catch (error) {
    logError(error);
  }
  return null;
};

export default getGuestToken;
