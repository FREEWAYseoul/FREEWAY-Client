import { Suspense } from 'react';

import PageHeader from '@/common/components/PageHeader';
import ProgressBar from '@/common/components/ProgressBar';

import IframeView from '../components/IframeView';

const page = ({ params }: { params: { name: string } }) => {
  return (
    <>
      <PageHeader title='설정' />
      <Suspense fallback={<ProgressBar />}>
        <IframeView path={params.name} />
      </Suspense>
    </>
  );
};

export default page;
