'use client';

import React, { useMemo } from 'react';
import styles from '@/app/styles/finish.module.scss';
import Button from '@/app/components/common/Button.tsx';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/stores/progressSlice.ts';
import { RootState } from '@/stores/index.ts';
import { IStep } from '@/types/IStep.ts';

// eslint-disable-next-line no-unused-vars
function findLastIndex(array: IStep[], predicate: (step: IStep) => boolean) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
}

function Page() {
  const dispatch = useDispatch();

  const steps = useSelector((state: RootState) => state.progress.steps);

  const score = useMemo(() => {
    if (!steps) return 0;
    const lastFinishedStepIndex = findLastIndex(steps, (step) => step.finished);
    return steps[lastFinishedStepIndex]?.prize.toLocaleString() || 0;
  }, [steps]);

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
          <div>
            <h2 className={styles.score}>Total score:</h2>
            <h1>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <span data-testid="score">${score}</span>
              <span>earned</span>
            </h1>
          </div>
          <Link
            href="/game"
            className={styles.startLink}
            onClick={handleRestart}
          >
            <Button>Try again</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Page;
