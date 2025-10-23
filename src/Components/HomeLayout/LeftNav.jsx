import React, { Suspense } from 'react';
import { CircleLoader, HashLoader, PropagateLoader } from 'react-spinners';

const Categoris = React.lazy(() => import('../Categoris'));

const LeftNav = () => {
  return (
    <div>
      <Suspense fallback={<CircleLoader color="#e75b04" />}>
        <Categoris />
      </Suspense>
    </div>
  );
};

export default LeftNav;
