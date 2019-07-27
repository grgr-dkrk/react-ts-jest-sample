import reducer, { initialState } from '@/modules/ColorPanelList/reducer';
import {
  addColorPanel,
  removeColorPanel,
} from '@/modules/ColorPanelList/actions';
import { StateType } from '@/modules/ColorPanelList/types';

describe('ColorPanelListのReducer', () => {
  // add
  describe('add', () => {
    let state: StateType;
    state = reducer(
      initialState,
      addColorPanel({ id: 0, label: '漆黒の黒', colorCode: '#000' })
    );
    it('id', () => {
      expect(state.items[0].id).toBe(0);
    });
    it('label', () => {
      expect(state.items[0].label).toBe('漆黒の黒');
    });
    it('colorCode', () => {
      expect(state.items[0].colorCode).toBe('#000');
    });
  });

  // remove
  describe('remove', () => {
    let state: StateType;
    state = reducer(initialState, addColorPanel({ id: 10, colorCode: '#000' }));
    it('何も残らない', () => {
      let newState = reducer(state, removeColorPanel(10));
      expect(newState.items).toHaveLength(0);
    });
  });

  // default
  describe('対象外のAction', () => {
    let state: StateType;
    // @ts-ignore (型チェックを回避するため)
    state = reducer(undefined, {});
    it('initialStateが返る', () => {
      expect(state).toEqual(initialState);
    });
  });
});
