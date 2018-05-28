
export class FaqModel {

  /**
   * Request ID.
   * @type {number}
   * @private
   */
  private _id: number;

  /**
   * Getter ID
   * @return {number}
   */
  get id(): number {
    return this._id;
  }

  /**
   * Request title.
   * @type {string}
   * @private
   */
  private _title: string;

  /**
   * Getter title
   * @return {string}
   */
  get title(): string {
    return this._title;
  }

  /**
   * Request content.
   * @type {string}
   * @private
   */
  private _content: string;

  /**
   * Request content.
   * @return {string}
   */
  get content(): string {
    return this._content;
  }

  /**
   * Constructor assigns parameters to properties.
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  constructor(
    id: number,
    title: string,
    content: string,
  ){
    this._id = id;
    this._title = title;
    this._content = content;
  }
}
