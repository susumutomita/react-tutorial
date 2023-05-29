import { createStore } from 'redux';
import { memoReducer, addMemo, deleteMemo, findMemo } from './Store';

describe("Memo Reducer", () => {
  let store = null;

  beforeEach(() => {
    // Reset the store before each test
    store = createStore(memoReducer);
  });

  it("should add a new memo", () => {
    store.dispatch(addMemo('Test memo'));
    const { data, message } = store.getState();
    expect(data.length).toBe(1);
    expect(data[0].message).toBe('Test memo');
    expect(message).toBe('Added!');
  });

  it("should delete a memo", () => {
    store.dispatch(addMemo('Test memo'));
    store.dispatch(deleteMemo(0));
    const { data, message } = store.getState();
    expect(data.length).toBe(0);
    expect(message).toBe('delete "0":');
  });

  it("should find a memo", () => {
    store.dispatch(addMemo('Find me'));
    store.dispatch(findMemo('Find me'));
    const { data, fdata, message } = store.getState();
    expect(fdata.length).toBe(1);
    expect(fdata[0].message).toBe('Find me');
    expect(message).toBe('find "Find me":');
  });
});
