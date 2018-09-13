/**
 * List model
 */
export class ListModel {

  /**
   * Request ID.
   * @type {number}
   * @readonly
   */
  readonly list_id: number;

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
  readonly elements: ListElementModel[];

  /**
   * Constructor assigns parameters to the properties.
   * @param {number} list_id
   * @param {string} title
   * @param {string} description
   * @param {ListElementModel[]} elements
   */
  constructor(
    list_id: number,
    title: string,
    description: string,
    elements: ListElementModel[]
  ) {
    this.list_id = list_id;
    this.title = title;
    this.description = description;
    this.elements = elements;
  }
}

/**
 * List element model
 */
export class ListElementModel {

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

  readonly  position: number;

  /**
   * Constructor assigns parameters to the properties.
   * @param {string} title
   * @param {string} content
   * @param {number} position
   */
  constructor(
    title: string,
    content: string,
    position: number,
  ){
    this.title = title;
    this.content = content;
    this.position = position;
  }
}
