import { configureStore } from '@reduxjs/toolkit';
import progressSlice from '@/stores/progressSlice.ts';

// config the store
const store = configureStore({
  reducer: {
    progress: progressSlice,
  },
});

// export default the store
export default store;
export type RootState = ReturnType<typeof store.getState>;
