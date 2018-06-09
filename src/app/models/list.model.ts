/**
 * List model
 */
export class ListModel {

  /**
   * Request ID.
   * @type {number}
   * @readonly
   */
  readonly id: number;

  /**
   * List title
   * @type {string}
   * @readonly
   */
  readonly title: string;

  /**
   * List description
   * @type {string}
   * @readonly
   */
  readonly description: string;

  /**
   * List description
   * @type {ListElementModel[]}
   * @readonly
   */
  readonly listElements: ListElementModel[];

  /**
   * Constructor assigns parameters to the properties.
   * @param {number} id
   * @param {string} title
   * @param {string} description
   * @param {ListElementModel[]} listElements
   */
  constructor(
    id: number,
    title: string,
    description: string,
    listElements: ListElementModel[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.listElements = listElements;
  }
}

/**
 * List element model
 */
export class ListElementModel {

  /**
   * Request ID.
   * @type {number}
   * @readonly
   */
  readonly id: number;

  /**
   * Request title.
   * @type {string}
   * @readonly
   */
  readonly title: string;

  /**
   * Request content.
   * @type {string}
   * @readonly
   */
  readonly content: string;

  /**
   * Constructor assigns parameters to the properties.
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  constructor(
    id: number,
    title: string,
    content: string,
  ){
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
