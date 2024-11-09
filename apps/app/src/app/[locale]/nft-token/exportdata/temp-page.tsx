'use client';
import { useSearchParams } from 'next/navigation';

import Export from '@/components/app/Export';

export default function NftTokenExportData() {
  const searchParams = useSearchParams();
  const address = searchParams?.get('address');

  const onHandleDowload = (blobUrl: string, file: string): void => {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = blobUrl;
    a.target = '_blank';
    a.setAttribute('download', file);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="relative">
      {address && (
        <Export
          exportType={'nfttokentransactions'}
          id={address}
          onHandleDowload={onHandleDowload}
        />
      )}
    </div>
  );
}
