import { dropTable } from './drop-table';
describe('dropTable', () => {
  it('should work', () => {
    expect(dropTable()).toEqual('drop-table');
  });
});
