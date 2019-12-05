/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * List model
 */
export class ListModel {

  /**
   * List ID
   * @type {number}
   * @readonly
   */
  readonly listId: number;

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
   * List elements
   * @type {ListElementModel[]}
   * @readonly
   */
  readonly elements: ListElementModel[];

  /**
   * Constructor assigns parameters to the properties.
   * @param {number} listId
   * @param {string} title
   * @param {string} description
   * @param {ListElementModel[]} elements
   */
  constructor(
    listId: number,
    title: string,
    description: string,
    elements: ListElementModel[]
  ) {
    this.listId = listId;
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
   * Request content
   * @type {string}
   * @readonly
   */
  readonly content: string;

  /**
   * Position
   * @type {number}
   * @readonly
   */
  readonly position: number;

  /**
   * Constructor assigns parameters to the properties
   * @param {string} title
   * @param {string} content
   * @param {number} position
   */
  constructor(
    title: string,
    content: string,
    position: number,
  ) {
    this.title = title;
    this.content = content;
    this.position = position;
  }
}
