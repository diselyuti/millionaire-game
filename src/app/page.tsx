'use client';

import React from 'react';
import styles from '@/app/styles/page.module.scss';
import Button from '@/app/components/common/Button.tsx';
import Link from 'next/link';
import Image from 'next/image';
import { reset } from '@/stores/progressSlice.ts';
import { useDispatch } from 'react-redux';

function Page() {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/images/hand-1.webp"
          alt="hand OK"
          className={styles.image}
          width={624}
          height={367}
        />
        <div className={styles.titleBlock}>
          <h1>Who wants to be a millionaire?</h1>
          <Link
            href="/game"
            className={styles.startLink}
            onClick={handleRestart}
          >
            <Button>Start</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Page;
