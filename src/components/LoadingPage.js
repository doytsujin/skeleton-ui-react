import React from 'react';

import BusyIndicator from './BusyIndicator';

const LoadingPage = () => (
  <div className="page-full">
    <BusyIndicator size="xl" title="Loading..." />
  </div>
);

export default LoadingPage;
