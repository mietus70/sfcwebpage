import { ListElementComponent }                     from './list-element.component';
import { ListModel }                                from "../../../models/list.model";

const LIST = new ListModel(0, 'test1', '', []);
const LIST_2 = new ListModel(1, 'test2', '', []);
const LISTS: ListModel[] = [];

LISTS.push(LIST);
LISTS.push(LIST_2);

class MockListsService {
  lists = LISTS;
}

describe('ListElementComponent', () => {
  let component: ListElementComponent;
  let listService: MockListsService;

  beforeEach(() => {
    listService = new MockListsService();
    // @ts-ignore
    component = new ListElementComponent(listService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list element', () => {
    component.listTitle = "test2";
    expect(component.list).toEqual(LIST_2)
  });
});
