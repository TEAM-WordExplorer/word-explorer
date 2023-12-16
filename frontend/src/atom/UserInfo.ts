import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfoState = atom({
  key: 'UserInfoState',
  default: {
    id: -1,
  },
  effects_UNSTABLE: [persistAtom],
})