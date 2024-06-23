'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FC, useContext, useRef } from 'react';
import useArchStore from '@/stores/archStore';

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  hidden: { opacity: 0,  },
  enter: { opacity: 1,  },
  exit: { opacity: 0,  },
};

type Props = {
  className?: string;
  children: React.ReactNode;
}

const PageTransitionEffect : FC<Props> = ({className, children}) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname();
  const isProjectOpen = useArchStore((state) => state.isProjectOpen);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={className}
        key={key}
        initial={"hidden"}
        animate={{
          opacity: 1,
          width: isProjectOpen ? '100%' : '50%',
        } }
        exit="exit"
        variants={variants}
        transition={{ ease: 'circInOut', duration: 1 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
