'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styles from '@/app/styles/game.module.scss';
import Image from 'next/image';
import QuizQuestionText from '@/app/components/quiz/QuizQuestionText.tsx';
import QuizAnswers from '@/app/components/quiz/QuizAnswers.tsx';
import QuizSteps from '@/app/components/quiz/QuizSteps.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index.ts';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const question = useSelector(
    (state: RootState) => state.progress.questions[state.progress.currentQuestion],
  );
  const steps = useSelector((state: RootState) => state.progress.steps);
  const isGameOver = useSelector(
    (state: RootState) => state.progress.isGameOver,
  );

  const sortedSteps = useMemo(
    () => [...steps].sort((a, b) => b.prize - a.prize),
    [steps],
  );

  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => {
        router.push('/finish');
      }, 1000);
    }
  }, [isGameOver, router]);

  const toggleMenu = (): void => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`${styles.layout} ${menuIsOpen ? styles.openedMenu : ''}`}>
      <div className={styles.menuButton}>
        {menuIsOpen ? (
          <Image
            src="/icons/close-menu.svg"
            alt="close menu button"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            width={16}
            height={16}
          />
        ) : (
          <Image
            src="/icons/open-menu.svg"
            alt="open menu button"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            width={16}
            height={16}
          />
        )}
      </div>
      <main className={styles.main}>
        <QuizQuestionText text={question.question} />
        <QuizAnswers answers={question.answers} />
      </main>
      <aside className={styles.aside}>
        <QuizSteps steps={sortedSteps} />
      </aside>
    </div>
  );
}

export default Page;
